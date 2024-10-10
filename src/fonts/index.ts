import BodoniModa from './bodoni-moda';
import IBMPlexSans from './plex/sans';
import IBMPlexSansCondensed from './plex/condensed';
import IBMPlexSerif from './plex/serif';
import IBMPlexMono from './plex/mono';
import Roboto from './roboto';
import TitilliumWeb from './titillium-web';

const fontFaces = [
	...BodoniModa,
	...IBMPlexSans,
	...IBMPlexSansCondensed,
	...IBMPlexSerif,
	...IBMPlexMono,
	...Roboto,
	...TitilliumWeb,
].map(font => `
@font-face {
  font-display: swap;
  font-family: '${font.family}';
  font-style: ${font.style};
  font-weight: ${font.weight};
  src: ${font.sources.map(source => `
    url('${source.url}') format('${source.format}')`).join(',')};
}`).join('');

console.log('fontFaces', fontFaces);

export default fontFaces;
