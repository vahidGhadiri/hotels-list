module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      xs: "8px",
      s: "12px",
      m: "16px",
      l: "20px",
      xl: "24px",
      full: "50%",
      none: "0px",
    },
    boxShadow: {
      "elevation-1": "0px 5px 8px 0px rgba(0, 0, 0, 0.06)",
      "elevation-2": "0px 4px 8px 0px rgba(0, 0, 0, 0.15)",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        secondary: "#342A25",
        primary: "#FF702A",
        neutral: "#726963",
        white: "#FFFFFF",
        gray: "#EFE5E0",
      },
      fontSize: {
        "heading-3": ["30px", { lineHeight: "40px", fontWeight: "700" }],
        "heading-4": ["22px", { lineHeight: "38px", fontWeight: "700" }],
        "heading-5": ["18px", { lineHeight: "32px", fontWeight: "700" }],
        "heading-6": ["16px", { lineHeight: "28px", fontWeight: "700" }],
        "body-1": ["16px", { lineHeight: "28px", fontWeight: "600" }],
        "body-2": ["16px", { lineHeight: "26px", fontWeight: "400" }],
        "body-3": ["14px", { lineHeight: "26px", fontWeight: "600" }],
        "body-4": ["14px", { lineHeight: "26px", fontWeight: "400" }],
        "caption-1": ["12px", { lineHeight: "28px", fontWeight: "600" }],
        "caption-2": ["12px", { lineHeight: "28px", fontWeight: "400" }],
        "caption-3": ["10px", { lineHeight: "28px", fontWeight: "600" }],
      },
      spacing: {
        "header-height": "44px",
      },
      contrast: {
        900: "9",
      },
      bottom: {
        "safe-area": "env(safe-area-inset-bottom)",
      },
      height: {
        "safe-area-top": "env(safe-area-inset-top)",
        "screen-1/4": "25vh",
        "screen-1/2": "50vh",
        "screen-2/3": "66.6vh",
        "screen-3/4": "75vh",
      },
      animation: {
        "swipe-down": "swipe-down 0.3s ease-out both",
        "swipe-up": "swipe-up 0.3s ease-out both",
        "spin-fast": "spin .7s linear infinite",
        "spin-slow": "spin 2s linear infinite",
        "fade-in": "fade-in 0.5s",
        "slide-in": "slideIn 0.5s ease-in-out",
        "slide-out": "slideOut 0.5s ease-in-out",
      },
      keyframes: {
        "swipe-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "swipe-down": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(100%)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-out": {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-100%)", opacity: "0" },
        },
      },
      width: {
        "fit-content": "fit-content",
      },
    },
  },
};
