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


export const yearsFromNow = (inputYear: number): number => {
	const currentYear = new Date().getFullYear();
	return currentYear - inputYear;
};
