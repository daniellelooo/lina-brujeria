/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mystic: {
          50: '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
        dark: {
          50: '#1a1625',
          100: '#14111f',
          200: '#0f0d19',
          300: '#0a0812',
          400: '#06050c',
          500: '#020206',
        }
      },
      fontFamily: {
        'serif': ['Cinzel', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'mystic-gradient': 'linear-gradient(135deg, #0a0812 0%, #1a1625 50%, #2e1065 100%)',
        'mystic-radial': 'radial-gradient(circle at center, #2e1065 0%, #0a0812 70%)',
      },
      boxShadow: {
        'mystic': '0 0 20px rgba(139, 92, 246, 0.3)',
        'mystic-lg': '0 0 40px rgba(139, 92, 246, 0.5)',
      }
    },
  },
  plugins: [],
}
