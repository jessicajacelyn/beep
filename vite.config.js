import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  console.log("Running vite in " + mode + " mode");

  return {
    plugins: [vue()],

    base: mode === "production" ? "/beep/" : "/",

    build: {
      outDir: "docs",
    },
  };
});
