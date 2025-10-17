import styled from "styled-components";
import config from "./config";

// =============================================================================

export const Background = styled.div`
	@media screen {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
		gap: ${config.background.margin}mm;
		padding: ${config.background.margin}mm;
		font-family: ${config.fonts.families.body};
	}
`;

export const Paper = styled.div`
	padding: ${config.page.margin}mm;
	flex-grow: 1;
	max-width: ${config.page.width}mm;
	height: ${config.page.height}mm;

	@media screen {
		border: solid 1px ${config.page.borderColor};
		background-color: ${config.colors.background};
		box-shadow: 0 0 ${config.background.margin / 2}mm hsla(0, 0%, 0%, 0.5);
		border-radius: ${config.layout.borderRadius};
	}
	@media print {
		min-width: ${config.page.width}mm;
	}
`;

export const Page = styled.div``;

export const Section = styled.section`
	margin-bottom: ${config.page.margin}mm;
`;

export const Board = styled.div`
	margin: 0;
	background-color: ${config.colors.light};
	border: 1px solid ${config.colors.dim};
	outline: 1px solid ${config.colors.background};
	outline-offset: -2px;
	border-radius: ${config.layout.borderRadius};

	&.smallBlock {
		display: inline-block;
	}

	&.half {
		width: 50%;
	}
`;

export const BoardBody = styled.div`
	padding: ${config.layout.spacing.tiny}mm;
`;

export const IndexedList = styled.ul`
	& li {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: baseline;
		column-gap: 0.25em;

		& div:nth-child(1) {
		}
		& div:nth-child(2) {
			flex-grow: 1;
			border-bottom: 1px dotted ${config.colors.dim};
			height: 0.85em;
			min-width: 2em;
		}
		& div:nth-child(3) {
		}
	}
`;

export const About = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-top: ${config.page.margin}mm;
`;

export const Experience = styled.div`
	margin-top: ${config.page.margin}mm;
`;
