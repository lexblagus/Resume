import { css } from 'styled-components';

import BodoniModa from './bodoni-moda';
import IBMPlexSans from './plex/sans';
import IBMPlexSansCondensed from './plex/condensed';
import IBMPlexSerif from './plex/serif';
import IBMPlexMono from './plex/mono';
import Roboto from './roboto';
import TitilliumWeb from './titillium-web';
import Rajdhani from './rajdhani';

// =============================================================================

const fonts = [
	...BodoniModa,
	...IBMPlexSans,
	...IBMPlexSansCondensed,
	...IBMPlexSerif,
	...IBMPlexMono,
	...Roboto,
	...TitilliumWeb,
	...Rajdhani,
];

const fontFaces = fonts.map(
	font => css`
		@font-face {
			font-display: swap;
			font-family: '${font.family}';
			font-style: ${font.style};
			font-weight: ${font.weight};
			src: ${
				font.sources.map(
					source => css`
						url('${source.url}')
						format('${source.format}')
					`.join('')
				).join(',')
			};
		}
	`.join('')
).join('');

// console.log('fontFaces', fontFaces);

export default fontFaces;
