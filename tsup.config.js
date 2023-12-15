import { defineConfig } from "tsup";
import glob from "tiny-glob";

export default defineConfig([
	{
		entry: await glob("./src/**/!(*.d|*.spec).ts"),
		format: ["esm"],
		platform: "node",
		target: "node18",
		shims: false,
		dts: false,
		esbuildOptions(options) {
			options.external = ["consola", "os"];
		},
	},
]);
