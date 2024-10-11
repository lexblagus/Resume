export default {
	colors: {
		foreground: 'black',
		background: 'white',
		accent: 'black',
		dim: 'hsla(0, 0%, 50%, 1)',
		quote: 'hsla(0, 0%, 75%, 1)',
		light: 'hsla(0, 0%, 90%, 1)',
		link: '#005E9E',
	},
	fonts: {
		families: {
			/*
			'Bodoni Moda'
			'IBM Plex Sans'
			'IBM Plex Sans Condensed'
			'IBM Plex Mono'
			'IBM Plex Serif'
			'Roboto'
			'Titillium Web'
			'Rajdhani'
			*/
			body: "'IBM Plex Sans', sans-serif",
			secondary: "'Rajdhani', sans-serif",
			fancy: "'Bodoni Moda', serif",
		},
		sizes: {
			default: 4.5, // mm
			medium: 6, // mm
			small: 3.75, // mm
			huge: 25, // mm
		},
	},
	background: {
		color: 'hsla(0, 0%, 85%, 1)',
		margin: 5, // mm
	},
	page: {
		width: 210, // mm
		height: 297, // mm
		margin: 10, // mm
		borderColor: 'hsla(0, 0%, 50%, 1)',
		backgroundColor: 'white',
	},
	layout: {
		spacingTiny : 1, // mm
		spacingSmall : 2.5, // mm
		spacingMedium : 10, // mm
		breakpoints: {
			xs : '600px',
		},
	},
	logo: 25, // mm
	footerHeight: 10, // mm
};
