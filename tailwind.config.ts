import type { Config } from "tailwindcss";

import relumeTailwindPreset from "@relume_io/relume-tailwind";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [relumeTailwindPreset]
};
export default config;