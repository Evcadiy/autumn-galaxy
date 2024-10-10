/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}", "./src/styles/utils.css"],
  theme: {
    extend: {
      // Font size
      fontSize: {},
      // Font families
      fontFamily: {
        sans: ["Open Sans", "Inter"],
        gilroy: ["Gilroy", "sans-serif"],
        gilroyBold: ["Gilroy Bold", "sans-serif"],
        woodford: ['"Woodford Bourne Pro"', "serif"],
        cormorantSC: ["Cormorant SC", "serif"],
        bignoodletitling: ["BigNoodleTitling", "serif"],
        ethnocentricrg: ["Ethnocentric Rg", "serif"]
      },
      // Colors
      colors: {
        background: {
          primary: "var(--color-background-primary)"
        },
        header: {
          link: "var(--color-header-link)",
          linkActive: "var(--color-header-link-active)"
        },
        footer: {
          link: "var(--color-footer-link)"
        }
      },
      // Breakpoints for media queries
      screens: {
        xs: "478px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1900px"
      }
    },
    plugins: []
  }
}
