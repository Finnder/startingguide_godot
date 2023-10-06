/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
        "title": ["Gabarito"]
    },
    screens: {
        "phone": { max: "640px" }
    },
    extend: {}
  },
  plugins: []
};
