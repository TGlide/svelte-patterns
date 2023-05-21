/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Overpass', 'sans-serif']
			}
		}
	},

	plugins: []
};

module.exports = config;
