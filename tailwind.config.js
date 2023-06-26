/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        title: 'var(--font-teko)',
      },
      colors: {
        mineral: {
          diamond: '#5030B7',
          gold: '#FFD700',
          silver: '#C0C0C0',
          bronze: '#CD7F32',
          plat: '#02D1C9 ',
          gray: {
            dark: '#4D4D4D',
            light: '#8C8C8C',
          },
        },
        navbar: '#1A202C',
      },
    },
  },
  plugins: [],
}
