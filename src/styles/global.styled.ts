import 'normalize.css';
import { createGlobalStyle } from 'styled-components';
import fonts from '../fonts';
import config from './config';

const GlobalStyle = createGlobalStyle`
${fonts}

html, body, #root {
	display: inline-block;
	min-width: 100%;
}

body {
	font-family: ${config.fonts.families.body};
	font-size: ${config.fonts.sizes.default}mm;
}

@media screen {
	body {
		background-color: ${config.background.color};
	}
}
`;

export default GlobalStyle;