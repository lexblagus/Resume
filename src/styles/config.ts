export default {
	colors: {
		foreground: "black",
		background: "white",
		accent: "black",
		light: "hsla(0, 0%, 90%, 1)",
		quote: "hsla(0, 0%, 75%, 1)",
		dim: "hsla(0, 0%, 40%, 1)",
		dark: "hsla(0, 0%, 30%, 1)",
		link: "#005E9E",
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
			body: "'IBM Plex Sans Condensed', serif",
			secondary: "Rajdhani, sans-serif",
			fancy: "'Bodoni Moda', serif",
		},
		sizes: {
			// mm
			tiny: 3.5,
			small: 4,
			default: 4.5,
			medium: 6,
			ample: 8,
			large: 10,
			huge: 35.5,
		},
	},
	background: {
		color: "hsla(0, 0%, 85%, 1)",
		margin: 5, // mm
	},
	page: {
		width: 210, // mm
		// height: 297, // mm
		height: 1787, // mm
		margin: 10, // mm
		borderColor: "hsla(0, 0%, 50%, 1)",
		backgroundColor: "white",
	},
	layout: {
		spacing: {
			// mm
			micro: 1,
			tiny: 2.5,
			small: 5,
			medium: 10,
			large: 20,
		},
		breakpoints: {
			xs: "600px",
		},
		borderRadius: "3px",
	},
	elements: {
		logo: 20, // mm
		smallBox: 42.5, // mm
	},
	footer: {
		height: 10, // mm
	},
};
