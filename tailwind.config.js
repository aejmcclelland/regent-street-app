/** @type {import('tailwindcss').Config} */
export const content = [
	'./app/**/*.{js,ts,jsx,tsx}',
	'./pages/**/*.{js,ts,jsx,tsx}',
	'./components/**/*.{js,ts,jsx,tsx}',
	'./src/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
	extend: {
		fontFamily: {
			poppins: ['var(--font-poppins)', 'serif'],
		},
		fontWeight: {
			poppinsBold: '700', // ✅ Custom bold class for Poppins
		},
	},
};
export const plugins = [require('@tailwindcss/typography')];
