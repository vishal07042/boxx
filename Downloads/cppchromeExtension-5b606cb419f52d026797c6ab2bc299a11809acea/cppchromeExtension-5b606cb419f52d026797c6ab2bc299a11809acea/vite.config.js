import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				newtab: resolve(__dirname, "index.html"),
				background: resolve(__dirname, "background.js"),
				content: resolve(__dirname, "content.js"),
				codeRunner: resolve(__dirname, "codeRunner.js"),
			},
			output: {
				entryFileNames: '[name].js', // Keep the original file names
				chunkFileNames: '[name].js',
				assetFileNames: '[name].[ext]',
			},
		},
	},
});