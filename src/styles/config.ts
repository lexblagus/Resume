export default {
	colors: {
		foreground: 'black',
		background: 'white',
		accent: 'black',
		dim: 'hsla(0, 0%, 50%, 1)',
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
			titles: "'Rajdhani', sans-serif",
			alternate: "'Bodoni Moda', serif",
		},
		sizes: {
			default: 4, // mm
			medium: 5, // mm
			small: 3, // mm
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
		columnGap : 10, // mm
	},
	logo: 25, // mm
	footerHeight: 10, // mm
};