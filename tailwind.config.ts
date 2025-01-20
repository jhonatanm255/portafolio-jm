import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#EAB308", // Mostaza
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "rgba(26, 26, 26, 0.8)",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#EAB308",
          foreground: "#000000",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-in": "slideIn 0.5s ease-out",
        "menu-down": "menuDown 0.3s ease-out",
        "menu-up": "menuUp 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideIn: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        menuDown: {
          "0%": { transform: "scaleY(0)", opacity: "0", transformOrigin: "top" },
          "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "top" },
        },
        menuUp: {
          "0%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "top" },
          "100%": { transform: "scaleY(0)", opacity: "0", transformOrigin: "top" },
        },
      },
      backgroundImage: {
        'dots-pattern': "url('/patterns/dots.svg')",
        'grid-pattern': "url('/patterns/grid.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;