import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E63946',
          dark: '#C62828',
        },
        navy: {
          DEFAULT: '#1D1D2C',
          light: '#252836',
          dark: '#14141F',
        },
        surface: '#F5F5F7',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        arabic: ['var(--font-cairo)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
