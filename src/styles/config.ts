export default {
	colors: {
		foreground: 'black',
		background: 'white',
		accent: 'black',
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
			*/
			main: "'IBM Plex Sans', sans-serif",
			alternate: "'Bodoni Moda', serif",
		},
		sizes: {
			default: 4,
			pageNumber: 5,
			totalPages: 3,
		},
	},
	background: {
		color: 'hsla(0, 0%, 85%, 1)',
		margin: 2.5, // mm
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