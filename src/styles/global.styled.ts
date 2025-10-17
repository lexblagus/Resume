import "normalize.css";
import { createGlobalStyle } from "styled-components";
import fonts from "../fonts";
import config from "./config";

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

	ol,
	ul {
		margin: 0;
		padding: 0;
	}
	li {
		list-style-type: none;
		list-style-position: inside;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
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

	@media screen {
		body {
			background-color: ${config.background.color};
		}
	}

	@media print {
		@page {
			/* size: A4 portrait; */
			size: ${config.page.width}mm ${config.page.height}mm;
			margin: 0;
		}
		* {
			print-color-adjust: exact;
			-webkit-print-color-adjust: exact;
		}
	}
`;

export default GlobalStyle;
