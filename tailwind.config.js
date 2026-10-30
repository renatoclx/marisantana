/** Build: npx tailwindcss@3 -i tailwind.input.css -o assets/tailwind.css --minify */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        terra: { DEFAULT: '#A84C3D', dark: '#8E3E31', light: '#C0695A' },
        cream: { DEFAULT: '#FBF2E1', dark: '#F1E2C8' },
        rust: '#C0561E',
        sand: '#E3CDB3',
      },
      fontFamily: {
        sans: ['"Louis George Cafe"', 'Quicksand', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { label: '0.35em' },
    },
  },
};
