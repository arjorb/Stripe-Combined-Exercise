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
        sm: '0.9rem',
        '7.7xl': '5.3rem',
      },
      maxWidth: {
        container: '1080px',
      },
      width: {
        small: '23.75rem',
      },
      height: {
        sm: '20vh',
        small: '30vh',
        medium: '90vh',
        full: '98.5vh',
        fuller: '130vh',
        fullest: '140vh',
        fullester: '250vh',
      },
    },
  },
  plugins: [],
};
