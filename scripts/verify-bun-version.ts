import packageJson from "../package.json" with { type: "json" };

const [runtime, requiredVersion] = packageJson.packageManager.split("@");

if (runtime !== "bun" || Bun.version !== requiredVersion) {
  console.error(`This project requires Bun ${requiredVersion}; found ${Bun.version}.`);
  process.exit(1);
}
