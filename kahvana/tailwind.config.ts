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
        "139":"139px",
        "150": "150px",
        "200": "200px",
        "250": "250px",
        "280": "280px",
        "285": "285px",
        "302": "302px",
        "342": "342px",
        "304": "304px",
        "121": "121px",
        "167": "167px",
        "475": "475px",
        "526": "526px",
        "539": "539px",
<<<<<<< HEAD
        "552":"552px",
        "610":"610px",
        "650":"650px",  
        "700":"700px",
        "750": "750px",
=======
        "580": "580px",
        "620": "620px",
>>>>>>> d834215ad88dcaedf09512d7731a208a16bc9eee
        "687": "687px",
        "1000": "1000px",
        "1360": "1360px",
        "1440": "1440px",
        "1500": "1500px",
        "1550": "1550px",

      },
      height: {
<<<<<<< HEAD
        "0.5":"0.5px",
=======
        "1": "1px",
>>>>>>> d834215ad88dcaedf09512d7731a208a16bc9eee
        "38": "38px",
        "49": "49px",
        "58":"58px",
        "72": "72px",
        "75":"75px",
        "99": "99px",
        "100": "100px",
        "131": "131px",
        "140":"140px",
        "150": "150px",
        "200": "200px",
        
        "192": "192px",
        "250": "250px",
        "402": "402px",
        "502": "502px",
        "522": "522px",
            
        "650":  "650px",
        "700":  "700px",
        "804":"804px",
        "809":"809px",
        "810":"810px",
        "868":"868px",
        "1024": "1024px",
        "1040": "1040px",

        
      },

      fontSize:{
        "36px":"36px",
          "48px":"48px"

      },
<<<<<<< HEAD
      spacing:{
        "100":"400px",
        "200":"800px"

      },
      opacity: {
        '0.005': '0.005', // Dodajte opacity od 0,5%
      },
=======

      margin: {
        "100": "100px",
        "190": "190px",
        "305": "305px",
      }
>>>>>>> d834215ad88dcaedf09512d7731a208a16bc9eee
    },
  },
  plugins: [],
};
export default config;
