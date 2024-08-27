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
        "kahvanaPink": "#FF3179",
        "almostWhite": "#F4F4F9",
        "lightGray": "#BCBCBC",
      },
      width: {
        "1": "1px",
        "75":"75px",
        "100": "100px",
        "150": "150px",
        "200": "200px",
        "250": "250px",
        "280": "280px",
        "302": "302px",
        "342": "342px",
        "304": "304px",
        "121": "121px",
        "167": "167px",
        "475": "475px",
        "526": "526px",
        "539": "539px",
        "687": "687px",
        "1000": "1000px",
        "1360": "1360px",
        "1440": "1440px",

      },
      height: {
        "1": "1px",
        "38": "38px",
        "49": "49px",
        "72": "72px",
        "75":"75px",
        "99": "99px",
        "100": "100px",
        "131": "131px",
        "150": "150px",
        "200": "200px",
        
        "192": "192px",
        "250": "250px",
        "650":  "650px",
        "700":  "700px",
        "804":"804px",
        "809":"809px",
        "810":"810px",
        "1024": "1024px",
        "1040": "1040px",

        
      },

      fontSize:{
        "36px":"36px"

      },
    },
  },
  plugins: [],
};
export default config;
