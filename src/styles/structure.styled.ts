import styled from 'styled-components';
import config from '../styles/config';
import { TwoCols } from './cover.styled';

// =============================================================================

export const Background = styled.div`
	@media screen {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		gap: ${config.background.margin}mm;
		padding: ${config.background.margin}mm;
	}
`;

// -----------------------------------------------------------------------------

export const Paper = styled.div`
	max-width: ${config.page.width}mm;
	min-height: ${config.page.height}mm;
	padding: ${config.page.margin}mm;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;

	@media screen {
		border: solid 1px ${config.page.borderColor};
		background-color: ${config.colors.background};
		box-shadow: 0 0 ${config.background.margin / 2}mm hsla(0, 0%, 0%, 0.5);
		border-radius: ${config.layout.borderRadius};
	}
	@media print {
		height: ${config.page.height}mm; /* fixed page height */
		overflow: hidden;
	}
`;

// -----------------------------------------------------------------------------

export const Page = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;
	flex-grow: 1;
`;

// -----------------------------------------------------------------------------

export const Top = styled.div`
	display: grid;
	grid-template-columns: ${config.elements.logo}mm 1fr;
	gap: ${config.layout.spacing.medium}mm;
	height: ${config.elements.logo}mm;
`;

// -----------------------------------------------------------------------------

export const Logo = styled.img`
	width: ${config.elements.logo}mm;
`;

// -----------------------------------------------------------------------------

export const Header = styled.div`
	display: flex;
	align-items: flex-end;
`;

// -----------------------------------------------------------------------------

export const Contents = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: ${(config.elements.logo + config.layout.spacing.medium)}mm;
	margin-top: ${config.layout.spacing.micro}mm;
	overflow: hidden;

	@media (max-width: ${config.layout.breakpoints.xs}) {
		margin-left: 0;
	}

	&.topSpaced {
		margin-top: ${config.layout.spacing.small}mm;
	}

	${TwoCols} {
		flex-grow: 1;
		flex-shrink: 1;
		overflow: hidden;
	}
`;

// -----------------------------------------------------------------------------

export const Bottom = styled.div`
	display: flex;
	height: ${config.footer.height}mm;
	margin-top: ${config.layout.spacing.medium}mm;
	justify-content: flex-end;
	font-size: 0.8em;
`;

// =============================================================================

