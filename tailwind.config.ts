import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background-rgb) / <alpha-value>)",
        foreground: "rgb(var(--foreground-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        panel: "rgb(var(--panel-rgb) / <alpha-value>)",
        accent: "var(--primary_color)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        "ultra-wide": "0.32em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.06), 0 28px 60px -28px rgba(0,0,0,0.85)",
        "accent-glow":
          "0 0 0 1px color-mix(in oklab, var(--primary_color) 40%, transparent), 0 18px 40px -18px var(--primary_color)",
      },
      animation: {
        "pulse-soft": "pulse-soft 3.2s ease-in-out infinite",
        "spin-slow": "spin-slow 16s linear infinite",
        shimmer: "shimmer 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
