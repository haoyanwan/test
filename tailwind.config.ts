import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        "primary": "#fafafa",
        "secondary": "#ffed4a",
        "danger": "#e3342f",
        'f5f5f5': '#f5f5f5',
        'fafafa': '#fafafa',
        'f1f2f3': '#f1f2f3',
        'dee2e6': '#dee2e6'
      },
    },

  },
  plugins: [],
};
export default config;
