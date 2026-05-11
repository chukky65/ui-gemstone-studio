import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command }) => {
  const isBuild = command === "build";
  const isNetlifyBuild = process.env.NETLIFY === "true";
  const isCloudflareBuild = process.env.CLOUDFLARE === "true";

  return {
    plugins: [
      tailwindcss(),
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        importProtection: {
          behavior: "error",
          client: {
            files: ["**/server/**"],
            specifiers: ["server-only"],
          },
        },
        prerender: {
          enabled: true,
          crawlLinks: true,
          failOnError: true,
        },
      }),
      react(),
      ...(isBuild && isNetlifyBuild
        ? [netlify()]
        : isBuild && isCloudflareBuild
          ? [cloudflare({ viteEnvironment: { name: "ssr" } })]
          : []),
    ],
    resolve: {
      alias: {
        "@": `${process.cwd()}/src`,
      },
      dedupe: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "react/jsx-dev-runtime",
        "@tanstack/react-query",
        "@tanstack/query-core",
      ],
    },
    server: {
      host: "::",
      port: 8080,
    },
  };
});
