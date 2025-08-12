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
        rubik: ["var(--font-rubik)"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b41f25",
          "primary-content": "#ffffff",
          secondary: "#ffffff",
          "secondary-content": "#000000",
          accent: "#1b1b1b",
          "accent-content": "#163835",
          neutral: "#3d4451",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#d1d5db",
          "base-content": "#333333",

          info: "#3abff8",
          "info-content": "#ffffff",

          success: "#36d399",
          "success-content": "#ffffff",

          warning: "#fbbd23",
          "warning-content": "#ffffff",

          error: "#f87272",
          "error-content": "#ffffff",
        },
      },
    ],
  },
} satisfies Config;
