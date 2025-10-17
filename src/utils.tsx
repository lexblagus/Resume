import { Fragment } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { Contents } from "./contents";
import type { Property } from "csstype";
import type { ReactNode } from "react";

// =============================================================================

export const calculateAge = (birthdate: string): number => {
	const today = new Date();
	const birthDate = new Date(birthdate);

	let age = today.getFullYear() - birthDate.getFullYear();
	const monthDifference = today.getMonth() - birthDate.getMonth();

	if (
		monthDifference < 0 ||
		(monthDifference === 0 && today.getDate() < birthDate.getDate())
	) {
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
	endYear: number
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
	endYear: number
): string => {
	const months = calculateMonths(startMonth, startYear, endMonth, endYear);
	if (months < 12) {
		return `${months} months`;
	}
	const suffix = Math.floor(months / 12) <= 1 ? "year" : "years";
	if (Number.isInteger(months / 12)) {
		return `${months / 12} ${suffix}`;
	}
	return `>${Math.floor(months / 12)} ${suffix}`;
};

// -----------------------------------------------------------------------------

export const monthName = (month: number): string => {
	switch (month) {
		case 1: {
			return "January";
		}
		case 2: {
			return "February";
		}
		case 3: {
			return "March";
		}
		case 4: {
			return "April";
		}
		case 5: {
			return "May";
		}
		case 6: {
			return "June";
		}
		case 7: {
			return "July";
		}
		case 8: {
			return "August";
		}
		case 9: {
			return "September";
		}
		case 10: {
			return "October";
		}
		case 11: {
			return "November";
		}
		case 12: {
			return "December";
		}
	}
	return "";
};

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

export const contentToKey = (
	content: object | Array<string | number> | ReactNode
) => hashString(ReactDOMServer.renderToString(JSON.stringify(content)));

// -----------------------------------------------------------------------------

export const getTotalPages = (contents: Contents) =>
	contents.experience.distribution.pre +
	contents.experience.distribution.relevant.length +
	contents.experience.distribution.past.length;

// -----------------------------------------------------------------------------

type JoinElements = (
	contents: ReactNode[],
	separator: ReactNode,
	finish: ReactNode
) => ReactNode;

export const joinElements: JoinElements = (
	contents,
	separator = ", ",
	finish = "."
): JSX.Element => (
	<>
		{contents.map((item, index) => (
			<Fragment key={contentToKey(item)}>
				{item}
				{index + 1 < contents.length ? separator : finish}
			</Fragment>
		))}
	</>
);

// -----------------------------------------------------------------------------

export const splitLetterSpacing = (
	text: string,
	spacings: Property.LetterSpacing[]
): JSX.Element => (
	<>
		{text.split("").map((letter, index) => (
			<span
				key={contentToKey([letter, index])}
				style={{ letterSpacing: spacings[index] }}
			>
				{letter}
			</span>
		))}
	</>
);
