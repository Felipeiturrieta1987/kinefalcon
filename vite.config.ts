import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import { imagesOptimizer } from "@vinext/cloudflare/images/images-optimizer";

// The Cloudflare plugin boots `workerd`, which needs macOS 13.5+ (or glibc 2.35+).
// NO_CF=1 drops it so `vite dev` still runs on older hosts. Dev only: `vite build`
// targets Workers and refuses to run without the plugin. See README "Desarrollo local".
const useCloudflare = !process.env.NO_CF;

export default defineConfig({
  plugins: [
    vinext({
      prerender: { routes: "*" },
      ...(useCloudflare ? { images: { optimizer: imagesOptimizer() } } : {}),
    }),
    ...(useCloudflare
      ? [
          cloudflare({
            viteEnvironment: {
              name: "rsc",
              childEnvironments: ["ssr"],
            },
          }),
        ]
      : []),
  ],
});
