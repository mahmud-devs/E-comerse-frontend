/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white_FFFFFF: "var(--white_FFFFFF)",
        black_363738: "var(--black_363738)",
        white_F5F5F5: "var(--white_F5F5F5)",
        white_FEFAF1: "var(--white_FEFAF1)",
        white_FAFAFA: "var(--white_FAFAFA)",
        textBlack_7D8184: "var(--textBlack_7D8184)",
        textBlack_000000: "var(--textBlack_000000)",
        red_DB4444: "var(--red_DB4444)",
        greenButton_00FF66: "var(--greenButton_00FF66)",
        redHover_E07575: "var(--redHover_E07575)",
        blueHover_A0BCE0: "var(--blueHover_A0BCE0)",
      },
    },
    fontFamily: {
      popins: "var(--popins)",
      inter: "var(--inter)",
    },
    container: {
      center: true,
      padding: {
        // DEFAULT: "1rem",
        // sm: "2rem",
        // lg: "4rem",
        // xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
