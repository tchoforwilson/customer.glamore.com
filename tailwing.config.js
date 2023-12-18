// tailwind.config.js
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";

export const theme = {
  extend: {
    fontFamily: {
      sans: ["DM Sans", ..._fontFamily.sans],
    },
  },
};
