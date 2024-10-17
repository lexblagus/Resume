export default {
	colors: {
		foreground: 'black',
		background: 'white',
		accent: 'black',
		dim: 'hsla(0, 0%, 50%, 1)',
		quote: 'hsla(0, 0%, 75%, 1)',
		light: 'hsla(0, 0%, 90%, 1)',
		dark: 'hsla(0, 0%, 30%, 1)',
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
			body: "IBM Plex Sans, serif",
			secondary: "'Rajdhani', sans-serif",
			fancy: "'Bodoni Moda', serif",
		},
		sizes: {
			tiny: 3.5, // mm
			small: 4, // mm
			default: 4.5, // mm
			medium: 6, // mm
			large: 10, // mm
			huge: 21, // mm
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
		spacing: {
			micro: 1, // mm
			tiny : 2.5, // mm
			small : 5, // mm
			medium : 10, // mm	
		},
		breakpoints: {
			xs : '600px',
		},
		borderRadius: '2px',
	},
	elements: {
		logo: 20, // mm
		smallBox: 42.5, // mm
	},
	footer: {
		height: 10, // mm
	}
};
