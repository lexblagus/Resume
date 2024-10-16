import { Fragment } from 'react/jsx-runtime';
import ReactDOMServer from "react-dom/server";
import { Contents } from "../constants/contents";

// =============================================================================

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

export const calculateMonths = (
	startMonth: number,
	startYear: number,
	endMonth: number,
	endYear: number,
): number => {
	const totalMonthsStart = startYear * 12 + startMonth;
	const totalMonthsEnd = endYear * 12 + endMonth;
	return totalMonthsEnd - totalMonthsStart;
};

// -----------------------------------------------------------------------------

export const amountOfTime = (
	startMonth: number,
	startYear: number,
	endMonth: number,
	endYear: number,
): string => {
	const months = calculateMonths(startMonth, startYear, endMonth, endYear);
	if(months < 12){
		return `${months} months`;
	}
	const suffix = Math.floor(months / 12) <= 1 ? 'year': 'years'
	if(Number.isInteger(months / 12)){
		return `${months / 12} ${suffix}`;
	}
	return `>${Math.floor(months / 12)} ${suffix}`;
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

export const contentToKey = (content: Object | Array<string | number> | string | JSX.Element) => hashString(ReactDOMServer.renderToString(JSON.stringify(content)))

// -----------------------------------------------------------------------------

export const getTotalPages = (contents: Contents) => contents.experience.distribution.pre + contents.experience.distribution.relevant.length + contents.experience.distribution.past.length;

// -----------------------------------------------------------------------------

export const joinElements = (contents: (string | JSX.Element)[]): JSX.Element => (<Fragment>{
	contents.map((item, index) => (
		<Fragment key={contentToKey(item)}>
			{item}
			{index + 1 < contents.length ? (
				<>, </>
			) : (
				<>.</>
			)}
		</Fragment>
	))
}</Fragment>)
