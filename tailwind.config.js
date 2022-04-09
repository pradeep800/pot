module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        red: ["Red Hat Mono"],
        cool: ["Rubik Bubbles"],
      },
      animation: {
        uptodown: "uptodown 1.6s ease-out  normal forwards",
        joint: "joint 1.6s ease  normal forwards",
        joint2: "joint2 1.6s ease  normal forwards",
        joint3: "joint3 1.6s ease  normal forwards",
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
            top: "10px",
          },
          "75%": {
            top: "25px",
          },
          "100%": {
            top: "80px",
          },
        },
        joint: {
          "0%": {
            left: "0%",
            opacity: 0,
          },
          "50%": {
            left: "5%",
          },
          "75%": {
            left: "10%",
          },
          "100%": {
            left: "15%",
          },
        },
        joint2: {
          "0%": {
            left: "0%",
            opacity: 0,
          },
          "50%": {
            left: "10%",
          },
          "75%": {
            left: "20%",
          },
          "100%": {
            left: "30%",
          },
        },
        joint3: {
          "0%": {
            left: "0%",
            opacity: 0,
          },
          "50%": {
            left: "10%",
          },
          "75%": {
            left: "25%",
          },
          "100%": {
            left: "40%",
          },
        },
      },
    },
  },
  plugins: [],
};
