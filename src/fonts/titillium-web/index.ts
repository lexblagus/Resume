import imports from './imports';

const families: string[] = ['Titillium Web'];

const styles: string[] = [
	'Roman', // Regular / Normal
	'Italic'
];

const weights: {value: number; name: string; }[] = [
	// {value: 100, name: 'Thin'},
	{value: 200, name: 'ExtraLight'}, // UltraLight
	{value: 300, name: 'Light'},
	// {value: 350, name: 'Book'}, // SemiLight
	{value: 400, name: 'Regular'}, // Regular / Plain
	// {value: 450, name: 'Text'},
	// {value: 500, name: 'Medium'},
	{value: 600, name: 'SemiBold'}, // DemiBold
	{value: 700, name: 'Bold'},
	// {value: 800, name: 'ExtraBold'}, // UltraBold
	{value: 900, name: 'Black'}, // Heavy
	// {value: 950, name: 'ExtraBlack'}, // UltraBlack
	// {value: 1000, name: 'ExtraBlack'},
	// {value: 1100, name: 'UltraBlack'},
];

const sources: {format: string; extension: string; }[] = [
	{ extension: 'ttf',   format: 'truetype',                   },
	// { extension: 'woff2', format: 'woff2',                      },
	// { extension: 'otf',   format: 'opentype',                   },
	// { extension: 'eot',   format: 'embedded-opentype',          },
	// { extension: 'woff',  format: 'woff',                       },
	// { extension: 'pfa',   format: 'postscript-type1-ascii',     },
	// { extension: 'pfb',   format: 'postscript-type1-binary',    },
	// { extension: 'svg',   format: 'svg-font',                   },
	// { extension: 'bdf',   format: 'bitmap-distribution-format', },
	// { extension: 'pcf',   format: 'portable-compiled-format',   },
	// { extension: 'sfd',   format: 'spline-font-database',       },
];

export default families.map(family => 
	styles.map(style => 
		weights.map(weight => 
			({
				family,
				style: style === 'Roman' ? 'normal' : 'italic',
				weight: weight.value,
				sources: sources.map(source => ({
					url: imports[`${family} ${weight.name} ${style} ${source.extension}`],
					format: source.format,
				}))
			})
		)
	)
).flat(3).filter(font => !(font.style === 'italic' && font.weight === 900));
