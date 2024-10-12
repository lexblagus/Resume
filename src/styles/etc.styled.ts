import styled from 'styled-components';
import config from './config';

// =============================================================================

export const TagLine = styled.div`
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.medium}mm;
	font-weight: 700;
	/* text-align: right; */
`;

export const TagLineSpaced = styled(TagLine)`
	margin-top: 0.75em;
	margin-bottom: ${config.layout.spacing.medium}mm;
`;

// -----------------------------------------------------------------------------

export const Light = styled.span`
	font-weight: 300;
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

// -----------------------------------------------------------------------------

export const H1 = styled.h1`
	font-family: ${config.fonts.families.fancy};
	font-size: ${config.fonts.sizes.huge}mm;
	font-style: italic;
	font-weight: 800;
	letter-spacing: -1mm;
	word-spacing: -0.2em;
	line-height: 0.8;
	margin: 0;

	${Light} {
		font-weight: 400;
		letter-spacing: -2mm;
	}
`;

// -----------------------------------------------------------------------------

export const H2 = styled.h2`
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.large}mm;
	/* color: ${config.colors.background}; */
	/* background-color: ${config.colors.foreground}; */
	/* border-bottom: ${config.layout.spacing.micro}mm solid ${config.colors.foreground}; */
	/* padding: ${config.layout.spacing.tiny}mm; */
	margin: 0;
	flex-grow: 1;
	/* text-align: right; */

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
	letter-spacing: -0.4mm;
	word-spacing: 0.1em;
	color: ${config.colors.foreground};
	margin: 0;

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
	min-width: ${config.footer.height}mm;
	background-color: ${config.colors.accent};
	color: ${config.colors.background};
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	padding: 0 2.5mm;
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
