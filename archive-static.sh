#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "Building static archive..."

# Clean and recreate archive dirs (keep root static untouched)
for v in 1 2 3 4; do
    rm -rf "static/archive/version${v}"
    mkdir -p "static/archive/version${v}"
done

# Copy v1 dist -> /archive/version1 (rewrite absolute /static/ refs)
cp -a "v1/dist/"* "static/archive/version1/"
sed -i.bak 's|href=/static/|href=static/|g; s|src=/static/|src=static/|g' "static/archive/version1/index.html"
rm "static/archive/version1/index.html.bak"

# Copy v2 dist -> /archive/version2 (rewrite absolute /static/ refs)
cp -a "v2/dist/"* "static/archive/version2/"
sed -i.bak 's|href=/static/|href=static/|g; s|src=/static/|src=static/|g' "static/archive/version2/index.html"
rm "static/archive/version2/index.html.bak"

# Copy v3 dist -> /archive/version3 (already relative paths)
cp -a "v3/dist/"* "static/archive/version3/"

# Copy v4 dist -> /archive/version4 (already relative paths)
cp -a "v4/dist/"* "static/archive/version4/"

# v5 is already at static root — nothing to copy

echo "Done."
echo ""
echo "Routes:"
echo "  /                   -> static/index.html              (v5)"
echo "  /archive/version1/  -> static/archive/version1/       (v1)"
echo "  /archive/version2/  -> static/archive/version2/       (v2)"
echo "  /archive/version3/  -> static/archive/version3/       (v3)"
echo "  /archive/version4/  -> static/archive/version4/       (v4)"
