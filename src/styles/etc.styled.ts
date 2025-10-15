import styled from 'styled-components';
import config from './config';

// =============================================================================

export const TagLine = styled.div`
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.medium}mm;
	font-weight: 700;
	text-shadow: ${[...Array(3)].map((_, i) => `0 0 ${i + 1}px hsla(0, 0%, 100%, 1)`).join(',')};
`;

export const TagLineSpaced = styled(TagLine)`
	margin-top: 3.5mm;
	margin-bottom: ${config.layout.spacing.medium}mm;
	line-height: 0.75em;
`;

// -----------------------------------------------------------------------------

export const Light = styled.span`
	font-weight: 400;
	color: ${config.colors.dim};
`;

export const Mild = styled.span`
	color: ${config.colors.foreground};
	font-weight: 300;
`;

export const Unwrapable = styled.span`
	white-space: nowrap;
`;

export const Dim = styled.span`
	color: ${config.colors.dim};
`;

export const Small = styled.span`
	font-size: ${config.fonts.sizes.small}mm;
`;

export const Tiny = styled.span`
	font-size: ${config.fonts.sizes.tiny}mm;
`;

export const Abbr = styled.span`
	font-size: 0.8em;
	text-transform: uppercase;
`;

// -----------------------------------------------------------------------------

export const H1 = styled.h1`
	font-family: ${config.fonts.families.fancy};
	font-size: ${config.fonts.sizes.huge}mm;
	font-style: italic;
	font-weight: 800;
	line-height: 0.8;
	margin: 0;
	word-spacing: -9mm;

	${Light} {
		font-weight: 400;
		color: ${config.colors.dark};
	}
`;

// -----------------------------------------------------------------------------

export const H2 = styled.h2`
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.large}mm;
	margin: 0;
	flex-grow: 1;

	@media print {
		color: ${config.colors.foreground};
		background-color: ${config.colors.background};
	}

`;

// -----------------------------------------------------------------------------

export const H3 = styled.h3`
	font-family: ${config.fonts.families.fancy};
	font-style: italic;
	font-weight: 800;
	font-size: ${config.fonts.sizes.large}mm;
	line-height: 1;
	letter-spacing: -0.4mm;
	word-spacing: 0.1em;
	color: ${config.colors.foreground};
	margin: 0;

	&:not(:first-child) {
		margin-top: ${config.layout.spacing.medium}mm;
	}

	& > .slashes{
		font-family: ${config.fonts.families.secondary};
		font-size: 1.175em;
		font-weight: 700;
		color: ${config.colors.dim};
	}
`;

// -----------------------------------------------------------------------------

export const H4 = styled.h4`
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.default}mm;
	color: ${config.colors.foreground};
	margin: 0;
	border-bottom: 1px solid ${config.colors.dim};
`;

// -----------------------------------------------------------------------------

export const PageNumber = styled.div`
	/* @media print {
		background-color: ${config.colors.background};
		color: ${config.colors.accent};
		border: 1px solid ${config.colors.accent};
	} */
	height: ${config.footer.height}mm;
	min-width: ${config.footer.height}mm;
	background-color: ${config.colors.accent};
	color: ${config.colors.background};
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	padding: 0 2.5mm;
	margin-top: ${config.layout.spacing.tiny}mm;
	box-sizing: border-box;
	font-family: ${config.fonts.families.secondary};
`;

// -----------------------------------------------------------------------------

export const CurrentPage = styled.div`
	font-size: ${config.fonts.sizes.medium}mm;
`;

// -----------------------------------------------------------------------------

export const TotalPages = styled.span`
	font-size: ${config.fonts.sizes.small}mm;
`;

// -----------------------------------------------------------------------------

export const ScreenOnly = styled.div`
	@media screen {
		display: initial;
	}
	@media print {
		display: none;
	}
`;

export const PrintOnly = styled.div`
	@media screen {
		display: none;
	}
	@media print {
		display: initial;
	}
`;
