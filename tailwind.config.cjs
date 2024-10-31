import { flavors } from '@catppuccin/palette';
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['SourceCodePro'],
		},
		extend: {
			transitionDuration: {
				DEFAULT: '300ms',
			},
			gridTemplateRows: {
				'1fr': '1fr',
				'0fr': '0fr',
				'home-grid': '100px 50px 1fr',
			},
		},
	},
	plugins: [
		require('@catppuccin/tailwindcss'),
		({ addVariant }) => {
			addVariant('starting', '@starting-style');
		},
	],
	safelist: [...Object.keys(flavors)],
};
