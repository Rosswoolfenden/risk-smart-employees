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
			borderWidth: {
                '1-5':              '1.5px',
                '2-5':              '2.5px',
            },
			fill: {
				'success':  '#2EBD5A',
			}

			
		}
	},
	themes: ["light", "dark", "cupcake"],
	plugins: [require('daisyui')],
}