import type { Config } from 'tailwindcss';

export default {
	content: [
		'./app/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./pages/**/*.{ts,tsx}'
	],
	theme: {
		extend: {
			colors: {
				sage: '#A3B18A',
				mint: '#DAD7CD',
				copper: '#B56533',
				ink: '#1f2a24'
			},
			borderRadius: {
				'xl': '14px',
				'lg': '10px'
			},
			boxShadow: {
				'spa': '0 10px 30px rgba(31,42,36,0.08)'
			},
			fontFamily: {
				sans: ['Manrope', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
				serif: ['"Playfair Display"', 'Georgia', 'serif']
			}
		}
	},
	plugins: []
} satisfies Config;








