/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundColor: {
				'skyblue-1': '#7dbcea',
				'skyblue-2': '#108ee9'
			}
		},
	},
	plugins: [],
}

