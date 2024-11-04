/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/component/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a", "950": "#172554" }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "blue-linear-gradient": "linear-gradient(96deg, #76D9FC 1.94%, #0061E3 98.4%);",
      },
      width: {
        "15": "75px",
        "107": "1072",
      },
      textColor: {
        "second-color": "#76D9FC",
        "link-color": "#6b7280",
      },
      backgroundColor: {
        "dark-alternate": "#131619",
        "white-alternate": "#FAF9F6",
        "blue-card": "#3DBDEB",
      },
      height: {
        "76": "300px",
      },
      borderColor: {
        "sky-1": "#76D9FC",
      }
    },
  },
  plugins: [],
};
