import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#07090E",
        surface: {
          50: "#1A2234",
          100: "#141B2A",
          200: "#0F1622",
          300: "#0B101A",
          400: "#070A11",
        },
        primary: {
          DEFAULT: "#00E5FF",
          hover: "#38EFFF",
          glow: "rgba(0, 229, 255, 0.25)",
        },
        accent: {
          blue: "#2563EB",
          cyan: "#00E5FF",
          sky: "#38BDF8",
          indigo: "#4F46E5",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          glow: "rgba(0, 229, 255, 0.25)",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(circle at 50% 0%, rgba(0, 229, 255, 0.15) 0%, rgba(37, 99, 235, 0.08) 35%, transparent 70%)",
        "card-glass": "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(0, 229, 255, 0.3)",
        "glow-lg": "0 0 50px -10px rgba(0, 229, 255, 0.25)",
        "card-hover": "0 20px 40px -15px rgba(0, 229, 255, 0.12)",
      },
      animation: {
        "pulse-subtle": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

