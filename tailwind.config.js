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
			keyframes: {
				flash: {
					'0%, 20%': { opacity: '0' },
					'50%': { opacity: '10' },
					'75%': { opacity: '20' },
				},
				flash1: {
					'0%, 20%': { opacity: '0' },
					'50%': { opacity: '10' },
					'75%': { opacity: '20' },
				},
				flash2: {
					'0%, 20%': { opacity: '0' },
					'50%': { opacity: '10' },
					'75%': { opacity: '20' },
				},
				flash3: {
					'0%, 20%': { opacity: '0' },
					'50%': { opacity: '10' },
					'75%': { opacity: '20' },
				},
				flash4: {
					'0%, 20%': { opacity: '0' },
					'50%': { opacity: '10' },
					'75%': { opacity: '20' },
				},
				flash5: {
					'0%, 40%': { opacity: '0' },
					'50%': { opacity: '10' },
					'75%': { opacity: '20' },
				},
				flash6: {
					'0%, 20%': { opacity: '0' },
					'50%': { opacity: '10' },
					'75%': { opacity: '20' },
				},
				flash7: {
					'0%, 20%': { opacity: '0' },
					'50%': { opacity: '10' },
					'75%': { opacity: '20' },
				},
			},
			animation: {
				flash: 'flash 2s',
				flash1: 'flash1 2.5s ',
				flash2: 'flash2 3s ',
				flash3: 'flash3 3.5s ',
				flash4: 'flash4 4s ',
				flash5: 'flash5 4.5s ',
				flash6: 'flash5 5s ',
				flash7: 'flash5 5.5s ',
			},
		},
	},
	plugins: ['tailwindcss/nesting', 'postcss-nesting'],
}
