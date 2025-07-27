import type { Config } from "tailwindcss";
import daisyui from "daisyui";

// @ts-expect-error: DaisyUI não tem tipos para temas
import themes from "daisyui/src/colors/themes";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
config.daisyui = {
  themes: [
    {
      light: {
        ...themes["[data-theme=light]"],
      },
      dark: {
        ...themes["[data-theme=dark]"],
      },
    },
  ],
};

export default config;
