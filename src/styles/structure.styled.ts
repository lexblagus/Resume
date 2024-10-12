import styled from 'styled-components';
import config from '../styles/config';
import { TwoCols } from './cover.styled';

// =============================================================================

export const Background = styled.div`
	@media screen {
		display: flex;
		/* flex-direction: column; */
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
	@media screen {
		border: solid 1px ${config.page.borderColor};
		background-color: ${config.colors.background};
		box-shadow: 0 0 ${config.background.margin / 2}mm hsla(0, 0%, 0%, 0.5);
		border-radius: 3px;
	}
	max-width: ${config.page.width}mm;
	height: ${config.page.height}mm; /* fixed page height */
	padding: ${config.page.margin}mm;
	box-sizing: border-box;
`;

// -----------------------------------------------------------------------------

export const Page = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;
	height: 100%;
`;

// -----------------------------------------------------------------------------

export const Top = styled.div`
	display: grid;
	grid-template-columns: ${config.logo}mm 1fr;
	column-gap: ${config.layout.spacing.medium}mm;
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
	/* justify-content: flex-end; */
`;

// -----------------------------------------------------------------------------

export const Contents = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: ${(config.logo + config.layout.spacing.medium)}mm;
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
	margin-top: ${config.layout.spacing.medium}mm;
	height: ${config.footer.height}mm;
	display: flex;
	justify-content: flex-end;
	font-size: 0.8em;
`;

// =============================================================================

