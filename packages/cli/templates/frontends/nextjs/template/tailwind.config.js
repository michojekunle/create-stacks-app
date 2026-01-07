/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        stacks: {
          purple: '#5546FF',
          'purple-dark': '#3D2DB8',
        },
      },
    },
  },
  plugins: [],
};
