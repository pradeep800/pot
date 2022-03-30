module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        red: ["Red Hat Mono"],
      },
      animation: {
        spinner: "spinner 0.6s linear 0.3s infinite normal forwards",
      },
      keyframes: {
        spinner: {
          "0%": {
            color: "bg-blue-200",
          },
          "50%": {
            color: "bg-blue-400",
          },
          "100%": {
            color: "bg-blue-100",
          },
        },
      },
    },
  },
  plugins: [],
};
