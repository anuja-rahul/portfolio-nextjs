import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // {
      //   myTheme: {
      //     primary: "#f6c543",
      //     secondary: "#f6f6f6",
      //     accent: "#1be885",
      //     neutral: "#272136",
      //     "base-100": "#ffffff",
      //     info: "#778ad4",
      //     success: "#23b893",
      //     warning: "#f79926",
      //     error: "#ea535a",
      //     body: {
      //       "background-color": "#2f2f2f",
      //     },
      //   },
      // },
      "night",
    ],
  },
};
export default config;
