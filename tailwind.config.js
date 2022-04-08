module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        red: ["Red Hat Mono"],
      },
      animation: {
        uptodown: "uptodown 1s ease-out  normal forwards",
      },
      keyframes: {
        uptodown: {
          "0%": {
            top: "0px",
          },
          "50%": {
            top: "40px",
          },
          "75%": {
            top: "60px",
          },
          "100%": {
            top: "80px",
          },
        },
      },
    },
  },
  plugins: [],
};
