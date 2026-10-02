import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: resolve(__dirname, "src/index.ts"),
			name: "Toastly",
			formats: ["es"],
			fileName: "index",
		},
		rollupOptions: {
			external: ["react", "react-dom", "react/jsx-runtime"],
			output: {
				banner: '"use client";',
			},
		},
	},
});
