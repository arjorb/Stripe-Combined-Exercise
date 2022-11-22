/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        background: 'url(/assets/world.png)',
      },
      animation: {
        'gradient-xy': 'gradient-xy 15s ease infinite',
      },
      keyframes: {
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
      colors: {
        primary: '#0A2540',
        second: '#F6F9FC',
      },
      margin: {
        35: '35rem',
      },
      fontSize: {
        9: '0.9rem',
        50: '5.3rem',
      },
      maxWidth: {
        container: '1080px',
      },
      width: {
        23: '23.75rem',
      },
      height: {
        20: '20vh',
        30: '30vh',
        90: '90vh',
        98: '98.5vh',
      },
    },
  },
  plugins: [],
};
