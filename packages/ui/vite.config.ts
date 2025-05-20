import { defineConfig } from "vite";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

export default defineConfig({
  plugins: [dts({ include: ["lib"] }), libInjectCss(), tailwindcss(), vue()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "Richesse Afrique",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
    target: "esnext",
  },
});
