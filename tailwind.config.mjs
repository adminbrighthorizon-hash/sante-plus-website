/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#1E293B",
        primary: "#4DAA72",
        secondary: "#F472B6",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
