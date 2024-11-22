import styled from 'styled-components';
import config from './config';
import { H3 } from './etc.styled';
import { bulletAchievements, bulletAttributions, bulletClients, bulletTechnologies } from '../constants/contents';

// =============================================================================

export const Summary = styled.ol`
	background-color: ${config.colors.light};
	border: 1px solid ${config.colors.dim};
	padding: ${config.layout.spacing.tiny}mm;
	margin: ${config.layout.spacing.small}mm 0 ${config.layout.spacing.small}mm;
	list-style-type: none;
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.small}mm;
	border-radius: ${config.layout.borderRadius};

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

	&.tiny {
		row-gap: ${config.layout.spacing.tiny}mm;
	}
`;

// -----------------------------------------------------------------------------

export const PastExperiences = styled.div`
	margin-bottom: ${config.layout.spacing.medium}mm;
`;

// -----------------------------------------------------------------------------

export const Experience = styled.ol`
	margin: 0;
	padding-left: 0;
	list-style-type: none;
	display: grid;
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.small}mm;

	& > li {
		&:before {
			display: inline-block;
			margin: 0 0.25em 0 0;
			padding: 0;
			color: ${config.colors.dim};
		}
	}
	& > li.single {
		&:before {
			color: ${config.colors.foreground};
		}
	}
	
	&.attributions  > li:before {
		/* content: '●'; */
		content: '${bulletAttributions}';
	}
	&.achievements  > li:before {
		content: '${bulletAchievements}';
		/* font-size: 0.65em; */
		/* vertical-align: middle; */
	}
	&.technologies  > li:before {
		content: '${bulletTechnologies}';
	}
	&.clients  > li:before {
		content: '${bulletClients}';
	}
`;

// -----------------------------------------------------------------------------

export const TwoCols = styled.div`
	display: grid;
	grid-template-columns: auto 1fr;
	row-gap: ${config.layout.spacing.medium}mm;
	column-gap: ${config.layout.spacing.tiny}mm;
`;

// -----------------------------------------------------------------------------

export const SummaryLabel = styled.div`
	width: ${config.elements.smallBox}mm;
	min-height: ${config.elements.smallBox}mm;
	box-sizing: border-box;
	background-color: ${config.colors.light};
	border: 1px solid ${config.colors.dim};
	padding: ${config.layout.spacing.tiny}mm;
	font-family: ${config.fonts.families.secondary};
	font-size: ${config.fonts.sizes.small}mm;
	overflow: hidden;
	border-radius: ${config.layout.borderRadius};

	${H3} {
		font-size: ${config.fonts.sizes.medium}mm;
		font-weight: 600;
	}
`;

// -----------------------------------------------------------------------------

