/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
  	fontFamily: {
  		sans: ['DM Sans', 'sans-serif']
  	},
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        projectGray: {
          1: "#313234",
          2: "#1E1E20",
          3: "#1A1A1A",
        },
        projectBlue: {
          1: "#11B0C8",
          2: "#42B4CA"
        },
        projectGreen: {
          1: "BFDE42"
        }
      }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
