import type { Config } from "tailwindcss";

const withAlpha = (cssVar: string) =>
  `rgb(var(${cssVar}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        background: withAlpha("--rgb-background"),
        foreground: withAlpha("--rgb-foreground"),
        surface: withAlpha("--rgb-surface"),
        card: withAlpha("--rgb-card"),
        muted: withAlpha("--rgb-muted"),
        primary: {
          DEFAULT: withAlpha("--rgb-primary"),
          hover: "#256fce",
        },
        secondary: withAlpha("--rgb-secondary"),
        accent: {
          DEFAULT: withAlpha("--rgb-primary"),
          hover: "#256fce",
          muted: "rgb(47 128 237 / 0.35)",
        },
        border: "var(--color-border)",
        danger: withAlpha("--rgb-danger"),
        success: withAlpha("--rgb-success"),
      },
      fontFamily: {
        /* Unbounded — основной шрифт сайта */
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        /* Pixeloid Mono — меню, ЗАЯВКА, ОТПРАВИТЬ */
        pixel: ["var(--font-pixel)", "var(--font-sans)", "monospace"],
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        card: "var(--radius-md)",
        pill: "var(--radius-pill)",
      },
      boxShadow: {
        header: "0 8px 28px rgba(0, 0, 0, 0.45)",
        card: "0 12px 40px rgba(0, 0, 0, 0.35)",
        soft: "0 8px 24px rgba(0, 0, 0, 0.28)",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "marquee-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-6px)" },
          "40%": { transform: "translateX(6px)" },
          "60%": { transform: "translateX(-4px)" },
          "80%": { transform: "translateX(4px)" },
        },
        "success-pulse": {
          "0%": { boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.55)" },
          "100%": { boxShadow: "0 0 0 12px rgba(34, 197, 94, 0)" },
        },
      },
      animation: {
        "marquee-left": "marquee-left 40s linear infinite",
        "marquee-right": "marquee-right 40s linear infinite",
        shake: "shake 0.45s ease-in-out",
        "success-pulse": "success-pulse 0.7s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
