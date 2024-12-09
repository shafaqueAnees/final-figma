import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#3563E9',
        'sec' : '#1A202C',
        'para' : '#90A3BF' 
      },
      fontFamily:{
        "primary" : ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
