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
      },
      width: {
        "121": "121px",
        "167": "167px",
        "475": "475px",
        "526": "526px",
        "687": "687px",
        "1000": "1000px",
        "1360": "1360px",
      },
      height: {
        "38": "38px",
        "49": "49px",
        "72": "72px",
        "99": "99px",
        "192": "192px",
        "250": "250px",
        "1040": "1040px",
        
      },
    },
  },
  plugins: [],
};
export default config;
