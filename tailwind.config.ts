  /* eslint-disable @typescript-eslint/no-require-imports */
  import type { Config } from "tailwindcss";

  const config: Config = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E1E1E",
          secondary: "#db0505",
          textColor: "#FFFFFF",
        },
        backgroundImage: {
          'gradient-button-light': "linear-gradient(150deg, rgba(255,141,92,1) 0%, rgba(241,67,44,1) 13%, rgba(233,18,12,1) 23%, rgba(230,0,0,1) 26%, rgba(215,3,3,1) 34%, rgba(174,14,14,1) 51%, rgba(159,19,19,1) 60%, rgba(96,19,19,1) 100%)",
          'gradient-button-dark': "linear-gradient(45deg, rgba(30,30,30,1) 0%, rgba(31,29,29,1) 42%, rgba(38,28,28,1) 58%, rgba(50,26,26,1) 69%, rgba(67,24,24,1) 77%, rgba(101,19,19,1) 85%, rgba(111,17,17,1) 88%, rgba(141,13,13,1) 93%, rgba(188,6,6,1) 97%, rgba(230,0,0,1) 100%)",
          'gradient-card-dark': "linear-gradient(295deg, rgba(255,141,92,1) 0%, rgba(241,67,44,1) 12%, rgba(233,18,12,1) 23%, rgba(230,0,0,1) 28%, rgba(215,3,3,1) 37%, rgba(174,14,14,1) 51%, rgba(159,19,19,1) 75%, rgba(96,19,19,1) 100%)",
          'gradient-card-light': "linear-gradient(315deg, rgba(255,141,92,1) 0%, rgba(241,67,44,1) 5%, rgba(233,18,12,1) 12%, rgba(230,0,0,1) 18%, rgba(215,3,3,1) 25%, rgba(174,14,14,1) 45%, rgba(159,19,19,1) 70%)",
          'gradient-card-darkest': "linear-gradient(225deg, rgba(30,30,30,1) 0%, rgba(31,29,29,1) 42%, rgba(38,28,28,1) 58%, rgba(50,26,26,1) 69%, rgba(67,24,24,1) 77%, rgba(89,20,20,1) 85%, rgba(101,19,19,1) 88%, rgba(111,17,17,1) 90%, rgba(141,13,13,1) 93%, rgba(188,6,6,1) 97%, rgba(230,0,0,1) 100%)",
          'gradient-footer-lightest': "linear-gradient(225deg, rgba(255,141,92,1) 0%, rgba(241,67,44,1) 13%, rgba(233,18,12,1) 23%, rgba(230,0,0,1) 26%, rgba(215,3,3,1) 34%, rgba(174,14,14,1) 51%, rgba(159,19,19,1) 60%, rgba(96,19,19,1) 100%)",
          'gradient-footer-lightest-revert': "linear-gradient(120deg, rgba(255,141,92,1) 0%, rgba(241,67,44,1) 13%, rgba(233,18,12,1) 23%, rgba(230,0,0,1) 26%, rgba(215,3,3,1) 34%, rgba(174,14,14,1) 51%, rgba(159,19,19,1) 60%, rgba(96,19,19,1) 100%)",
        },
        boxShadow: {
          'custom': '0px 4px 7px rgba(3, 7, 18, 0.04), 0px 15px 28px rgba(3, 7, 18, 0.08)',
        },
      },
    },
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
      themes: ["light"],
    },
  };
  export default config;
