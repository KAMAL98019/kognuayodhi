import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      "2xsmall": "320px",
      xsmall: "512px",
      small: "1024px",
      medium: "1280px",
      large: "1440px",
      xlarge: "1680px",
      "2xlarge": "1920px",
      'sm-max': {'max': '639px'},
      'sm-min': {'min': '640px', 'max':'767px'},
      'md-max':{'max':'768px'},
      'md-min':{'min':'769px'},
      'smxsmall':{'max':'384px'},
      'desktop':{'min':'992px'},
    },
  },
 

  plugins: [],
};
export default config;
