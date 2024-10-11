import styled from 'styled-components';
import config from '../../styles/config';

// =============================================================================

export const Background = styled.div`
	@media screen {
		display: flex;
		flex-direction: column;
		align-items: center;
		row-gap: ${config.background.margin}mm;
		padding: ${config.background.margin}mm;
	}
`;

// -----------------------------------------------------------------------------

export const Paper = styled.div`
	@media screen {
		border: solid 1px ${config.page.borderColor};
		background-color: ${config.colors.background};
		box-shadow: 0 0 ${config.background.margin / 2}mm hsla(0, 0%, 0%, 0.5);
		border-radius: 3px;
	}
	min-width: 120mm;
	max-width: ${config.page.width}mm;
	height: ${config.page.height}mm;
	padding: ${config.page.margin}mm;
`;

// -----------------------------------------------------------------------------

export const Page = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;
	overflow: hidden;
	height: 100%;
`;

// -----------------------------------------------------------------------------

export const Top = styled.div`
	display: grid;
	grid-template-columns: ${config.logo}mm 1fr;
	column-gap: ${config.layout.spacingMedium}mm;
	height: ${config.logo}mm;
`;

// -----------------------------------------------------------------------------

export const Logo = styled.img`
	width: ${config.logo}mm;
`;

// -----------------------------------------------------------------------------

export const Header = styled.div`
	display: flex;
	align-items: flex-end;
`;

// -----------------------------------------------------------------------------

export const TwoCols = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: ${config.layout.spacingMedium}mm;
	row-gap: ${config.layout.spacingMedium}mm;

	@media (max-width: ${config.layout.breakpoints.xs}) {
		grid-template-columns: 1fr;
	}
`;

// -----------------------------------------------------------------------------

export const Contents = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: ${(config.logo + config.layout.spacingMedium)}mm;
	margin-top: ${config.layout.spacingSmall}mm;
	overflow: hidden;

	@media (max-width: ${config.layout.breakpoints.xs}) {
		margin-left: 0;
	}

	${TwoCols} {
		flex-grow: 1;
	}
`;

// -----------------------------------------------------------------------------

export const TwoSpacedRows = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	row-gap: ${config.layout.spacingMedium}mm;
`;

// -----------------------------------------------------------------------------

export const About = styled.ol`
	background-color: ${config.colors.light};
	padding: ${config.layout.spacingSmall}mm;
	margin: 0;
	list-style-type:none;
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.default}mm;

	@media (max-width: ${config.layout.breakpoints.xs}) {
		width: fit-content;
	}

	& > li {}

	& b {
		font-weight: 600;
	}
`;

// -----------------------------------------------------------------------------

export const Testemonials = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: ${config.layout.spacingMedium}mm;

	& blockquote {
		margin: 0;
	}

	& cite {
		font-family: ${config.fonts.families.fancy};
		font-size: ${config.fonts.sizes.default}mm;
		font-style: italic;
		font-weight: 400;
		text-align: justify;

		&:before, &:after{
			color: ${config.colors.quote};
			font-size: 1.5em;
			vertical-align: middle;
			line-height: 0;
		}
		&:before{
			content: "❝ ";
		}
		&:after{
			content: "❞";
		}
	}
	& footer {
		font-family: ${config.fonts.families.secondary};
		color: ${config.colors.dim};
		text-align: right;
		font-weight: 300;
		line-height: 1;

		& .person {
			margin-top: 0.25em;
			&:before{
				content: "— ";
			}
		}
		& .title {
			font-size: ${config.fonts.sizes.small}mm;
			font-weight: 400;
		}

		& b {
			font-weight: 700;
		}
	}
`;

// -----------------------------------------------------------------------------

export const Abilities = styled.div`
`;

// -----------------------------------------------------------------------------

export const Bottom = styled.div`
	margin-top: ${config.layout.spacingMedium}mm;
	height: ${config.footerHeight}mm;
	display: flex;
	justify-content: flex-end;
	font-size: 0.8em;
`;

// -----------------------------------------------------------------------------

export const PageNumber = styled.div`
	@media print {
		background-color: ${config.colors.background};
		color: ${config.colors.accent};
		border: 1px solid ${config.colors.accent};
	}
	min-width: ${config.footerHeight}mm;
	background-color: ${config.colors.accent};
	color: ${config.colors.background};
	display: flex;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	padding: 0 2.5mm;
	box-sizing: border-box;
`;

// =============================================================================

export const TagLine = styled.div`
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.medium}mm;
	font-weight: 700;
`;

export const TagLineSpaced = styled(TagLine)`
	margin-top: 0.75em;
	margin-bottom: ${config.layout.spacingMedium}mm;
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

// -----------------------------------------------------------------------------

export const Unwrapable = styled.span`
	white-space: nowrap;
`;

// -----------------------------------------------------------------------------

export const Dim = styled.span`
	color: ${config.colors.dim};
`;

// -----------------------------------------------------------------------------

export const H1 = styled.h1`
	font-family: ${config.fonts.families.fancy};
	font-size: ${config.fonts.sizes.huge}mm;
	font-style: italic;
	font-weight: 800;
	letter-spacing: -0.9mm;
	word-spacing: -0.25em;
	line-height: 0.8;
	margin: 0;

	${Light} {
		font-weight: 400;
		letter-spacing: -1mm;
	}
`;

// -----------------------------------------------------------------------------

export const CurrentPage = styled.div`
	font-size: ${config.fonts.sizes.medium}mm;
`;

// -----------------------------------------------------------------------------

export const TotalPages = styled.span`
	font-size: ${config.fonts.sizes.small}mm;
`;
