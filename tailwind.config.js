module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        red: ["Red Hat Mono"],
        cool: ["Rubik Bubbles"],
      },
      animation: {
        uptodown: "uptodown 1s ease-out  normal forwards",
        shadowChange: "shadowChange 2s ease-in alternate infinite",
      },
      keyframes: {
        shadowChange: {
          "0%": {
            boxShadow: "0px 0px 0px",
          },
          "50%": {
            boxShadow: "6px 8px 5px green.-6px -8px 15px green",
          },
          "75%": {
            boxShadow: "7px 9px 20px green,-7px -9px 20px green",
          },
          "100%": {
            boxShadow: "8px 10px 25px green,-8px -10px 25px green",
          },
        },
        uptodown: {
          "0%": {
            top: "0px",
            opacity: 0,
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
