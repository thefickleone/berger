/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#050505",    // Deep matte background
          card: "#0F0F0F",    // Elevated surfaces
          accent: "#EAB308",  // Berger Gold
          muted: "#64748b",   // Slate text
        }
      },
      backgroundImage: {
        'glass-gradient': "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)",
      },
    },
  },
  plugins: [],
}