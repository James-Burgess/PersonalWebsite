const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "data");
const outputPath = path.join(__dirname, "cv-index.js");

const files = fs
	.readdirSync(dataDir)
	.filter((f) => f.startsWith("cv-") && f.endsWith(".json"))
	.sort();

const imports = [];
const vars = [];

files.forEach((file) => {
	const varName =
		file
			.replace(/^cv-/, "")
			.replace(/\.json$/, "")
			.replace(/[^a-zA-Z0-9]/g, "_") + "Data";

	imports.push(`import ${varName} from "./data/${file}";`);
	vars.push(varName);
});

const content = `${imports.join("\n")}

export const allCvs = [${vars.join(", ")}];
`;

fs.writeFileSync(outputPath, content);
console.log(
	`Generated cv-index.js with ${files.length} CV(s): ${files.join(", ")}`,
);
