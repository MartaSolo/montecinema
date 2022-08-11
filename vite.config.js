import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/stylesheets/_fonts.scss";
        @import "@/assets/stylesheets/_colors.scss";
        @import "@/assets/stylesheets/_mixins.scss";`,
      },
    },
  },
  plugins: [vue(), svgLoader()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

// import { fileURLToPath, URL } from "node:url";

// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";

// // https://vitejs.dev/config/
// export default defineConfig({
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `@import "@/assets/stylesheets/_fonts.scss";
//         @import "@/assets/stylesheets/_colors.scss";
//         @import "@/assets/stylesheets/_mixins.scss";`,
//       },
//     },
//   },
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
// });
