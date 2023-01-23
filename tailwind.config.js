/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        alkatip_t:"'ALKATIP_Tor', 'serif'",
        alkatip_tt:"'ALKATIP_Tor_Tom', 'serif'",
        alkatip_Ui:"'ALKATIP_Ui', 'serif'",
        Ukijtitle:"'Ukijtitle', 'serif'",
        Ukijtztr:"'Ukijtztr', 'serif'",
      }
    },
  },
  plugins: [],
}
