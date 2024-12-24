/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add all relevant file extensions
  ],
  theme: {
    extend: {
      fontFamily: {
        dmserif: ['"DM Serif Text"', 'serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        'red': {
          500: '#F87171',
          900: '#B91C1C',
        },
        'pastel-blue': '#a0c8ff',
        'pastel-pink': '#ff8ca0',
      },
      animation: {
        "fade-in-scale": "fadeInScale 2s ease-in-out",
      },
      keyframes: {
        fadeInScale: {
          "0%": { opacity: 0, transform: "scale(0.8)" },
          "50%": { opacity: 1, transform: "scale(1.1)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
