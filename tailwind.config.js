/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/images/hero-bg.png')",
      },
      fontFamily: {
        mono: ['var(--font-space-grotesk)', 'monospace'],
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgba(128, 50, 200, 0.4)',
      },
      colors: {
        customPurple: '#986DFF',
        customPurpleEscuro: '#7900DA',
        customPurpleEscuroMais: '#5A04AD',
        pretoLavado: '#191919',
        customPurpleOpacity: 'rgba(25, 25, 25, 0.8)',
      },
    },
  },
  plugins: [],
}
