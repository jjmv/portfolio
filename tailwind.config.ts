import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(201, 43%, 45%)",
        secondary: "hsl(178, 40%, 47%)",
        tertiary: "hsl(49, 43%, 48%)",
        white: "hsl(60, 100%, 99%)",
        black: "hsl(229, 19%, 22%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
