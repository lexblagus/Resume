import styled from "styled-components";
import config from "./config";

// =============================================================================

export const TagLine = styled.div`
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.medium}mm;
	font-weight: 700;
	text-shadow: ${[...Array(3)]
		.map((_, i) => `0 0 ${i + 1}px hsla(0, 0%, 100%, 1)`)
		.join(",")};
	line-height: 1;
	font-style: italic;

	&.topSpaced {
		margin-top: 1.5mm;
	}

	&.bottomSpaced {
		margin-bottom: ${config.layout.spacing.medium}mm;
	}

	&.bottomAdjusted {
		margin-bottom: 1mm;
	}

	&.rightAligned {
		text-align: right;
	}
`;

// -----------------------------------------------------------------------------

export const Strong = styled.strong`
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.default}mm;
	font-weight: 700;
	font-style: italic;
	color: ${config.colors.foreground};
`;

export const Dim = styled.span`
	color: ${config.colors.dim};
`;

export const Light = styled.span`
	font-weight: 400;
	color: ${config.colors.dim};
`;

export const Mild = styled.span`
	color: ${config.colors.foreground};
	font-weight: 400;
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

export const Emphasis = styled.span`
	display: inline-block;
	line-height: 0.8;
	background-color: ${config.colors.quote};
`;

export const Unwrapable = styled.span`
	white-space: nowrap;
`;

// -----------------------------------------------------------------------------

export const H1 = styled.h1`
	font-family: ${config.fonts.families.fancy};
	font-size: ${config.fonts.sizes.huge}mm;
	font-style: italic;
	font-weight: 800;
	margin: 0;
	word-spacing: -9mm;

	&.right {
		text-align: right;
	}

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
	color: ${config.colors.foreground};
	background-color: ${config.colors.background};
`;

// -----------------------------------------------------------------------------

export const H3 = styled.h3`
	font-family: ${config.fonts.families.secondary};

	&.in-board {
		margin-top: 0;
		margin-bottom: 0;
		padding: ${config.layout.spacing.tiny}mm;
		font-size: ${config.fonts.sizes.medium}mm;
		font-weight: 700;
		line-height: 0.8;
		font-style: italic;
		color: ${config.colors.foreground};
		background-color: ${config.colors.quote};
	}

	&.in-section {
		margin-top: ${config.page.margin}mm;
		margin-bottom: 0;
		font-weight: 400;
		font-size: ${config.fonts.sizes.large}mm;
		font-style: italic;
		line-height: 0.8;
		color: ${config.colors.foreground};
		border-bottom: 2px solid ${config.colors.dark};
	}
`;

// -----------------------------------------------------------------------------

export const H4 = styled.h4`
	display: inline-block;
	background-color: ${config.colors.quote};
	padding: 0;
	padding-right: 1mm;
	margin-top: 0;
	margin-bottom: 0.25em;
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.ample}mm;
	line-height: 0.9;
	font-weight: 900;
	font-style: italic;
	letter-spacing: -0.025em;
	color: ${config.colors.accent};
`;

// -----------------------------------------------------------------------------

export const H5 = styled.h5`
	display: inline-block;
	font-size: ${config.fonts.sizes.tiny}mm;
	font-weight: 400;
	background-color: ${config.colors.dark};
	color: ${config.colors.background};
	margin-top: 1em;
	margin-bottom: 0;
	text-transform: uppercase;
	padding: 0 0.5mm;
	line-height: 1;
	/* border-radius: ${config.layout.borderRadius}; */
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
