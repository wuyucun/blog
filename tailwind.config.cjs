/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
    fontSize: {
        // 将基础字号从 1rem (16px) 调大到 1.125rem (18px) gemini添加
        base: ['1.125rem', { lineHeight: '1.75rem' }], 
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
