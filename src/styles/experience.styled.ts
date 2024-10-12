import styled from 'styled-components';
import config from './config';

// =============================================================================

export const Summary = styled.ol`
	background-color: ${config.colors.light};
	border: 1px solid ${config.colors.dim};
	padding: ${config.layout.spacing.tiny}mm;
	margin: ${config.layout.spacing.small}mm 0 ${config.layout.spacing.small}mm;
	list-style-type: none;
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.small}mm;

	& > li {
		margin-top: ${config.layout.spacing.micro}mm;
		&:first-child {
			margin-top: 0;
		}
	}

	& b {
		font-weight: 700;
	}
`;

// -----------------------------------------------------------------------------

export const SpacedRows = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: ${config.layout.spacing.small}mm;
`;
// -----------------------------------------------------------------------------

export const LastExperiences = styled.ol`
	margin: 0;
	padding-left: 0;
	list-style-type: none;
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.default}mm;

	& > li {
		&:before {
			display: inline-block;
			margin: 0 0.25em 0 0;
			padding: 0;
			color: ${config.colors.dim};
		}
	}
	
	&.attributions  > li:before {
		content: '●';
	}
	&.achievements  > li:before {
		content: '▲';
		font-size: 0.6em;
	}
	&.technologies  > li:before {
		content: '■';
		/* font-size: 1.1em; */
	}
	&.clients  > li:before {
		content: '◆';
	}
`;
