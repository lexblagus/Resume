import 'normalize.css';
import { createGlobalStyle } from 'styled-components';
import fonts from '../fonts';
import config from './config';

// =============================================================================

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

	a,
	a:link,
	a:visited,
	a:active,
	a:hover{
		color:${config.colors.link};
	}
	a,
	a:link,
	a:visited{
		text-decoration:none;
	}
	a:active,
	a:hover{
		text-decoration:underline;
	}

	@page {
		size: A4 portrait;
	}
`;

export default GlobalStyle;
