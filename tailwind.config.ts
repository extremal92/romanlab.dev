import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./providers/**/*.{ts,tsx}",
    "./utils/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        card: "1.5rem",
        hero: "2.5rem",
      },
      colors: {
        space: "#05060b",
        "space-200": "#0f1424",
        "space-300": "#11172b",
        "space-400": "#1f2942",
        accent: {
          cyan: "#4debd7",
          purple: "#c084fc",
          magenta: "#ff4d8d",
          blue: "#60a5fa",
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(77, 235, 215, 0.25)",
        "inner-glow": "inset 0 0 40px rgba(96, 165, 250, 0.25)",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(13,17,23,0.35))",
      },
      animation: {
        aurora: "aurora 18s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        aurora: {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-5%) rotate(2deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.35 },
          "50%": { opacity: 0.8 },
        },
      },
    },
  },
  plugins: [],
};

export default config;
