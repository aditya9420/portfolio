/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08080A",
        surface: "#111114",
        "surface-elevated": "#18181D",
        "surface-border": "rgba(243, 241, 236, 0.12)",
        ivory: {
          DEFAULT: "#F4F1EA",
          warm: "#EDE8DF",
          muted: "#9D988F",
          dim: "#5E5A54",
        },
        editorial: {
          yellow: "#EAA728", // VOX-inspired warm amber/yellow
          red: "#D94A38",    // VOX-inspired punchy editorial red
          blue: "#2970FF",   // editorial cobalt blue
          paper: "#EAE8E2",  // warm paper ivory for hire me section
          ink: "#0D0D10",    // deep printer ink
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
