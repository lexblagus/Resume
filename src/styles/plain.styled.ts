import styled from 'styled-components';
import config from './config';
import { bulletAttributions } from '../constants/contents';

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

	@media screen {
		border: solid 1px ${config.page.borderColor};
		background-color: ${config.colors.background};
		box-shadow: 0 0 ${config.background.margin / 2}mm hsla(0, 0%, 0%, 0.5);
		border-radius: ${config.layout.borderRadius};
	}
	@media print {
		page-break-after: always;
	}
`;

export const Page = styled.div`
	@media print {
	}
	h1, h2, h3, h4, h5, h6 {
		margin: 0;
	}
	ol, ul {
		margin: 0;
		padding: 0;
	}
	li {
		list-style-type: none;
		list-style-position:inside;
		content: '${bulletAttributions}';

	}
	h1 {
		font-size: 2em;
		font-weight: 100;
		color: hsl(0, 0%, 0%);*/
		& b {
			font-weight: 700;
		}
	}
	h2 {
		font-size: 1.8em;
		font-weight: 200;
		color: hsl(0, 0%, 10%);
	}
	h3 {
		font-size: 1.6em;
		font-weight: 300;
		color: hsl(0, 0%, 20%);
		border-bottom: 2px solid hsl(0, 0%, 20%);
		margin-bottom: 1em;
	}
	h4 {
		font-size: 1.4em;
		font-weight: 400;
		color: hsl(0, 0%, 30%);
		margin-bottom: 0.5em;
		border-bottom: 1px solid hsl(0, 0%, 75%);

		&.spaced {
			margin-top: 2em;
			&:first-of-type {
				/* margin-top: 0; */
			}
		}
	}
	h5 {
		font-size: 1.2em;
		font-weight: 500;
		color: hsl(0, 0%, 40%);
		margin-top: 0.5em;
	}
	h6{
		font-size: 1em;
		font-weight: 600;
		color: hsl(0, 0%, 50%);
		text-transform: uppercase;
	}
`;

export const Experience = styled.div`
	@media print {
		page-break-after: always;
	}
`;

export const IndexedList = styled.ul`
	list-style-type: none;

	& li {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		align-items: baseline;
		column-gap: 0.5em;

		& div:nth-child(1) {
		}
		& div:nth-child(2) {
			flex-grow: 1;
			border-bottom: 1px dotted hsl(0, 0%, 75%);
			height: 0.85em;
		}
		& div:nth-child(3) {
		}
	}

`;
