/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				Grotesk: ['Hanken Grotesk', 'sans-serif'],
				Mont: ['Montserrat', 'sans-serif'],
				Didot: ['GFS Didot', 'sans-serif'],
			},
			animation: {
				'spin-slow': 'spin 15s linear infinite',
			},
		},
	},
	plugins: ['tailwindcss/nesting', 'postcss-nesting'],
}
