#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Building static archive..."

# Build versions that have a build step using Docker
if [ -f "v1/Dockerfile.build" ]; then
    echo "Building v1 via Docker..."
    docker build -f v1/Dockerfile.build -t v1-build v1/
    docker run --rm -v "$PWD/v1:/mnt" v1-build sh -c "npm run build && cp -r /app/dist /mnt/"
fi

if [ -f "v2/Dockerfile.build" ]; then
    echo "Building v2 via Docker..."
    docker build -f v2/Dockerfile.build -t v2-build v2/
    docker run --rm -v "$PWD/v2:/mnt" v2-build sh -c "npm run build && cp -r /app/dist /mnt/"
fi

# Build v5 with Bun
if [ -f "v5/package.json" ]; then
    echo "Building v5 with Bun..."
    (cd v5 && bun install && bun run build)
fi

# Sync v5 dist -> static root (protect archive/ from deletion)
rsync -av --delete --exclude=archive/ "v5/dist/" "static/"

# Clean and recreate archive dirs inside static/
for v in 1 2 3 4; do
    rm -rf "static/archive/version${v}"
    mkdir -p "static/archive/version${v}"
done

# Sync v1 dist -> /archive/version1 (rewrite absolute /static/ refs)
rsync -av --delete "v1/dist/" "static/archive/version1/"
sed -i.bak 's|href=/static/|href=static/|g; s|src=/static/|src=static/|g' "static/archive/version1/index.html"
rm "static/archive/version1/index.html.bak"

# Sync v2 dist -> /archive/version2 (rewrite absolute /static/ refs)
rsync -av --delete "v2/dist/" "static/archive/version2/"
sed -i.bak 's|href=/static/|href=static/|g; s|src=/static/|src=static/|g' "static/archive/version2/index.html"
rm "static/archive/version2/index.html.bak"

# Sync v3 dist -> /archive/version3 (already relative paths)
rsync -av --delete "v3/dist/" "static/archive/version3/"

# Sync v4 dist -> /archive/version4 (already relative paths)
rsync -av --delete "v4/dist/" "static/archive/version4/"

# v5 synced to root above

echo "Done."
echo ""
echo "Routes:"
echo "  /                   -> static/index.html              (v5)"
echo "  /archive/version1/  -> static/archive/version1/       (v1)"
echo "  /archive/version2/  -> static/archive/version2/       (v2)"
echo "  /archive/version3/  -> static/archive/version3/       (v3)"
echo "  /archive/version4/  -> static/archive/version4/       (v4)"
