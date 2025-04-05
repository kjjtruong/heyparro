// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import yeskunallumami from "@yeskunall/astro-umami";
// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [yeskunallumami({id: "93794742-c5c3-44dc-aa94-c34d8f0132f8"})],
});