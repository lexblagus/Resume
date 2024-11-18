import 'normalize.css';
import { createGlobalStyle } from 'styled-components';
import fonts from '../fonts';
import config from './config';

// =============================================================================

const GlobalStyle = createGlobalStyle`
	${fonts}

	html, body, #root {
		/* display: inline-block; *//*  disabled so page break can work  */
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

	@media print {
		@page {
			size: A4 portrait;
			margin: 0;
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

`;

export default GlobalStyle;
