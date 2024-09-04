/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 8px 32px 0px rgba(158, 12, 255, 0.32)",
        custom2: `0px 0px 35.5px 0px rgba(55, 0, 92, 0.70)`,
        custom3: '0px 0px 39.5px 1px rgba(101, 57, 244, 0.45)'
      },
      variants: {
        extend: {
          boxShadow: ["group-hover"],
        },
      },
      screens: {
        xs: "375px",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        accent: "var(--color-accent)",
        "background-primary": "var(--color-background-primary)",
        "background-secondary": "var(--color-background-secondary)",
        "background-input": "var(--color-background-input)",
        surface: "var(--color-surface)",
        onPrimary: "var(--color-on-primary)",
        onSecondary: "var(--color-on-secondary)",
        onAccent: "var(--color-on-accent)",
        onBackground: "var(--color-on-background)",
        onSurface: "var(--color-on-surface)",
        colorText: "var(--color-text)",
        colorTextLight: "var(--color-text-light)",
        "border-dashed": "var(--color-border-dashed)",
        outlined: "var(--color-outlined)",
        success: "var(--color-success)",
        "success-background": "var(--color-success-background)",
        "success-outlined": "var(--color-success-outlined)",
        headerbg: "#0A0A11",
        headerBt: "#ADB5BD",
        headerBorder: "#696969",
        white: "#FFFFFF",
        bgMiniCard: "#0D0E1C",
        textMiniCard: "#9195A6",
        border: "#2A2B37",
      },
      fontFamily: {
        main: "Inter",
        Jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
  },

  plugins: [],
};
