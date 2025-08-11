import { Yellowtail } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        imprima: ["var(--font-imprima)"],
        quicksand: ["var(--font-quicksand)"],
        oswald: ["var(--font-oswald)"],
        yellowtail: ["var(--font-yellowtail)"],
        barlow: ["var(--font-barlow)"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b41f25",
          secondary: "#ffffff",
          accent: "#1b1b1b",
        },
      },
    ],
  },
} satisfies Config;
