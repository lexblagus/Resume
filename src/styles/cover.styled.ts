import styled from 'styled-components';
import config from './config';

// =============================================================================

export const TwoCols = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: ${config.layout.spacing.medium}mm;
	row-gap: ${config.layout.spacing.medium}mm;

	@media (max-width: ${config.layout.breakpoints.xs}) {
		grid-template-columns: 1fr;
	}
`;

// -----------------------------------------------------------------------------

export const TwoSpacedRows = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	row-gap: ${config.layout.spacing.medium}mm;
`;

// -----------------------------------------------------------------------------

export const About = styled.ol`
	background-color: ${config.colors.light};
	padding: ${config.layout.spacing.tiny}mm;
	margin: 0;
	list-style-type:none;
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.default}mm;
	border: 1px solid ${config.colors.dim};

	@media (max-width: ${config.layout.breakpoints.xs}) {
		width: fit-content;
		align-self: flex-end;
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
	row-gap: ${config.layout.spacing.medium}mm;

	& blockquote {
		margin: 0;
	}

	& cite {
		display: block;
		font-family: ${config.fonts.families.fancy};
		font-size: ${config.fonts.sizes.small}mm;
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
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: stretch;
	gap: 1px;
	/* height: fit-content; */
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.default}mm;
	overflow: hidden;
	border: 1px solid ${config.colors.dim};
	padding: 1px;

	& div {
		background-color: ${config.colors.light};
		padding: ${config.layout.spacing.micro}mm;
		display: flex;

		&:nth-child(-n+2) {
			font-weight: 600;
		}

		&:nth-child(2n) {
			align-items: center;
			justify-content: center;
		}
	}
`;
