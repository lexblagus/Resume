import styled from 'styled-components';
import config from '../../styles/config';

// =============================================================================

export const Background = styled('div')(() => ({
	'@media screen': {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		rowGap: `${config.background.margin}mm`,
		padding: `${config.background.margin}mm`,
	},
}));

// -----------------------------------------------------------------------------

export const Paper = styled('div')(() => ({
	'@media screen': {
		border: `solid 1px ${config.page.borderColor}`,
		backgroundColor: config.colors.background,
		boxShadow: `0 0 ${config.background.margin / 2}mm hsla(0, 0%, 0%, 0.5)`,
		borderRadius: '3px',
	},
	width: `${config.page.width}mm`,
	height: `${config.page.height}mm`,
	padding: `${config.page.margin}mm`,
}));

// -----------------------------------------------------------------------------

export const Page = styled('div')(() => ({
	display: 'grid',
	gridTemplateRows: `auto 1fr auto`,
	overflow: 'hidden',
	height: '100%',
}));

// -----------------------------------------------------------------------------

export const Top = styled('div')(() => ({
	display: 'grid',
	gridTemplateColumns: `${config.logo}mm 1fr`,
	columnGap: `${config.layout.columnGap}mm`,
	height: `${config.logo}mm`,
}));

// -----------------------------------------------------------------------------

export const Logo = styled('img')(() => ({
	width: `${config.logo}mm`,
}));

// -----------------------------------------------------------------------------

export const Header = styled('div')(() => ({
	display: 'flex',
	alignItems: 'flex-end',
}));

// -----------------------------------------------------------------------------

export const Contents = styled('div')(() => ({
    marginLeft: `${(config.logo + config.layout.columnGap)}mm`,
    overflow: 'hidden',
}));

// -----------------------------------------------------------------------------

export const Bottom = styled('div')(() => ({
	marginTop: `${config.layout.columnGap}mm`,
	height: `${config.footerHeight}mm`,
	display: 'flex',
	justifyContent: 'flex-end',
	fontSize: '0.8em',
}));

// -----------------------------------------------------------------------------

export const PageNumber = styled('div')(() => ({
	'@media print': {
		backgroundColor: config.colors.background,
		color: config.colors.accent,
		border: `1px solid ${config.colors.accent}`
	},
	minWidth: `${config.footerHeight}mm`,
	backgroundColor: config.colors.accent,
	color: config.colors.background,
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	overflow: 'hidden',
	padding: '0 2.5mm',
	boxSizing: 'border-box',
}));

// -----------------------------------------------------------------------------

export const CurrentPage = styled('div')(() => ({
	fontSize: `${config.fonts.sizes.pageNumber}mm`,
}));

// -----------------------------------------------------------------------------

export const TotalPages = styled('span')(() => ({
	fontSize: `${config.fonts.sizes.totalPages}mm`,
}));
