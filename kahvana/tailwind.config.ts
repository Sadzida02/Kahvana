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
        "kahvanaPink":"#FF3179",
      },
      width: {
        "167":"167px",
        "526":"526px",
        "687":"687px",
      },
      height: {
        "49": "49px",
        "72": "72px",
        "192": "192px",
        
      },
    },
  },
  plugins: [],
};
export default config;
