/* eslint-disable prettier/prettier */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	  ],
	theme: {
		extend: {
			backgroundColor: {
				primary: "#FAFAFA",
			},

			
		}
	},
	plugins: [require('daisyui')],
}