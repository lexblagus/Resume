import { css } from "styled-components";

export const calculateAge = (birthdate: string): number => {
	const today = new Date();
	const birthDate = new Date(birthdate);

	let age = today.getFullYear() - birthDate.getFullYear();
	const monthDifference = today.getMonth() - birthDate.getMonth();

	if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}

	return age;
};

// -----------------------------------------------------------------------------

export const yearsFromNow = (inputYear: number): number => {
	const currentYear = new Date().getFullYear();
	return currentYear - inputYear;
};

// -----------------------------------------------------------------------------

export const getYearsBetween = (startMonth: number, startYear: number, endMonth: number, endYear: number): number => {
	const startDate = new Date(startYear, startMonth - 1);
	const endDate = new Date(endYear, endMonth - 1);
	const diffInMs = endDate.getTime() - startDate.getTime();
	const msInYear = 1000 * 60 * 60 * 24 * 365.25;
	return diffInMs / msInYear;
};

// -----------------------------------------------------------------------------

export const monthAbbr = (month: number): string => {
	switch (month) {
		case 1: {
			return 'jan';
		}
		case 2: {
			return 'feb';
		}
		case 3: {
			return 'mar';
		}
		case 4: {
			return 'apr';
		}
		case 5: {
			return 'may';
		}
		case 6: {
			return 'jun';
		}
		case 7: {
			return 'jul';
		}
		case 8: {
			return 'aug';
		}
		case 9: {
			return 'sep';
		}
		case 10: {
			return 'oct';
		}
		case 11: {
			return 'nov';
		}
		case 12: {
			return 'dec';
		}
	}
	return '';
}

// -----------------------------------------------------------------------------

export const hashString = (str: string): number => {
	let hash = 0;
	for (let i = 0; i < str.length; i++) {
		const char = str.charCodeAt(i);
		hash = (hash << 5) - hash + char;
		hash |= 0;
	}
	return hash;
};

// -----------------------------------------------------------------------------

export const debugLayout = () => {
	const width = 210 - 1;
	const height = 297 -1;
	const unit = 'mm';
	const color1 = 'hsla(0, 0%, 75%, 0.25)';
	const color2 = 'hsla(0, 0%, 25%, 0.25)';
	const steps = 4;  // Number of steps for the gradient

	const generateGradient = (direction: string, size: number) => {
		let gradient = `repeating-linear-gradient(to ${direction},`;
		for (let i = 0; i < steps; i++) {
			const pos1 = i * size;
			const pos2 = (i + 1) * size;
			const color = i % 2 === 0 ? color1 : color2;
			gradient += `
				${color} ${pos1}${unit},
				${color} ${pos2}${unit}${i < steps - 1 ? ',' : ''}`;
		}
		gradient += ')';
		return gradient;
	};

	return css`
		background-image: ${generateGradient('bottom', height)}, ${generateGradient('right', width)};
	`;
};
