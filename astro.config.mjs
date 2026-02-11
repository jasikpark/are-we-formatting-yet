import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://areweformattingyet.com",
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Instrument Serif",
        cssVariable: "--font-display",
        weights: [400],
        styles: ["normal", "italic"],
        fallbacks: ["Georgia", "serif"],
        display: "swap",
      },
      {
        provider: fontProviders.google(),
        name: "Outfit",
        cssVariable: "--font-body",
        weights: [300, 400, 500, 600, 700],
        styles: ["normal"],
        fallbacks: ["system-ui", "sans-serif"],
        display: "swap",
      },
      {
        provider: fontProviders.google(),
        name: "Fira Code",
        cssVariable: "--font-mono",
        weights: [400, 500],
        styles: ["normal"],
        fallbacks: ["monospace"],
        display: "swap",
      },
    ],
  },
});
