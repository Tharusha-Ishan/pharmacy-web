export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          dark: '#0052a3',
          light: '#3385d6',
        },
        secondary: {
          DEFAULT: '#00A499',
          dark: '#00837a',
          light: '#33b6ad',
        },
        dark: {
          DEFAULT: '#1A202C',
          lighter: '#2D3748',
        },
        light: {
          DEFAULT: '#F5F7FA',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
