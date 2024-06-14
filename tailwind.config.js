/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      // Define custom fonts
      sans: ["Montserrat", "sans-serif"],
      serif: ["Poppins", "serif"],
      mono: ["Menlo", "monospace"],
    },
    container: {
      center: true, // Center the content horizontally
      padding: {
        // Use rem values for padding
        DEFAULT: "1.25rem",
        sm: "1.25rem",
        md: "1.25rem",
        lg: "1.5rem",
        xl: "1.75rem",
        "2xl": "2rem",
      },
      screens: {
        md: "51.25rem",
      },
    },
    colors: {
      primary: "#020617",
      secondary: "#1e293b",
      heading: "#f8fafc",
      body: "#94a3b8",
      accent: "#1d4ed8",
    },
    spacing: {
      "2xs": "0.5rem", // 8px
      xs: "0.75rem", // 12px
      sm: "1rem", // 16px
      md: "1.25rem", // 20px
      lg: "1.5rem", // 24px
      xl: "1.75rem", // 28px
      "2xl": "2rem", // 32px
      "3xl": "36px", // 42px
      navbar1: "3.75rem",
    },
    extend: {
      fontSize: {
        "2xs": "0.75rem", // 12px
      },
    },
  },
  plugins: [],
};
