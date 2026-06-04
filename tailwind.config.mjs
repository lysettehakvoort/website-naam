/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        olive: {
          DEFAULT: '#5C6B3A',
          dark: '#3D4A25',
          light: '#A8C068',
        },
        copper: {
          DEFAULT: '#B5743A',
          dark: '#8F5A2A',
          light: '#D4956A',
        },
        stone: {
          50: '#F7F6F3',
        },
        ink: {
          DEFAULT: '#2C2C2C',
          muted: '#6B6B6B',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2.25rem, 5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.2' }],
        'subheading': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 8rem)',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
