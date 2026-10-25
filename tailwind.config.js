/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eef1f6',
          100: '#d6dcea',
          200: '#aeb8d4',
          300: '#7f8fb4',
          400: '#516693',
          500: '#364c79',
          600: '#283b63',
          700: '#1e2f4f',
          800: '#16233d',
          900: '#0f1a31',
          950: '#0a1224',
        },
        gold: {
          50: '#fbf7ed',
          100: '#f5ebcf',
          200: '#ead49b',
          300: '#dfbd67',
          400: '#d4a73d',
          500: '#c08f2a',
          600: '#9c701f',
          700: '#78541c',
          800: '#543c19',
          900: '#322413',
        },
        cream: {
          50: '#fdfcf8',
          100: '#f9f6ee',
          200: '#f1ebda',
          300: '#e7dec5',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'draw-line': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { transform: 'scale(1.3)', opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.8s ease forwards',
        'draw-line': 'draw-line 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
      },
    },
  },
  plugins: [],
};
