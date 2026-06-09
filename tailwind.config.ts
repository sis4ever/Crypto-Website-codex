import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg: "#070A0F",
          panel: "#0D111A",
          panelAlt: "#111827",
          border: "#1F2937",
          text: "#E5E7EB",
          muted: "#94A3B8",
          green: "#22C55E",
          red: "#EF4444",
          amber: "#F59E0B",
          cyan: "#22D3EE",
          violet: "#A78BFA"
        }
      },
      boxShadow: {
        terminal: "0 0 0 1px rgba(34, 211, 238, 0.08), 0 20px 70px rgba(0, 0, 0, 0.35)"
      }
    }
  },
  plugins: [],
};

export default config;
