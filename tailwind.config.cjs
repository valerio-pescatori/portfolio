import { flavors } from '@catppuccin/palette';
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['SourceCodePro'],
		},
		extend: {
			gridTemplateRows: {
				'home-grid': '100px 50px 1fr',
			},
		},
	},
	plugins: [require('@catppuccin/tailwindcss')],
	safelist: [...Object.keys(flavors)],
};
