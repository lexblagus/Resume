import { getYearsBetween } from "../utils/aux";

// =============================================================================

export const LOREM_IPSUM = `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Â 
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium.
Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Marquee selectus non provisio incongruous feline nolo contendre Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum.
Defacto lingo est igpay atinlay. Marquee selectus non provisio incongruous feline nolo contendre. Gratuitous octopus niacin, sodium glutimate. Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito. Epsum factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium sic ad nauseum. Souvlaki ignitus carborundum e pluribus unum. Defacto lingo est igpay atinlay. Gratuitous octopus niacin, sodium glutimate.
Quote meon an estimate et non interruptus stadium. Sic tempus fugit esperanto hiccup estrogen. Glorious baklava ex librus hup hey ad infinitum. Non sequitur condominium facile et geranium incognito.
Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc., li tot Europa usa li sam vocabularium. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilitÂ· de un nov lingua franca: on refusa continuar payar custosi traductores. It solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles.
Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental: in fact, it va esser Occidental. A un Angleso it va semblar un simplificat Angles, quam un skeptic Cambridge amico dit me que Occidental es.`;

// -----------------------------------------------------------------------------

export const BASELINE = `We’re going to go on. Cells.
They were all put together at a time. Cells.
Millions and billions of them. Cells.
Were you ever arrested? Cells.
Did you spend much time in the cell? Cells.
Have you ever been in an instituion? Cells.
Do they keep you in a cell? Cells.
When you’re not performing your duties do they keep you in a little box? Cells.
(…)
Did you buy a present for the person you love? Within cells interlinked.
Why don’t you say that three times? Within cells interlinked. Within cells interlinked. Within cells interlinked.
(…)
A system of cells.
Within cells interlinked.`;

// -----------------------------------------------------------------------------

export const contents = {
	testemonials: [
		{
			cite: <>He has been determined during the whole process, giving creative solutions for the challenges of the work.</>,
			person: <>Alexandre Nakasato</>,
			title: <>founder of <b>Nicsware</b></>,
		},
		{
			cite: <>Lex is a great professional, has a great technical knowledge, great person to work in groups and has great communication skills. Recommend to the highest levels of projects.</>,
			person: <>Raquel Oliveira</>,
			title: <>services operation manager, <b>IBM</b></>,
		},
		{
			cite: <>Lex is a creative person who works hard to get tasks done on time, and many times earlier than requested. His teamwork and clear personality allow a great atmosphere around and makes easy the job's getting done.</>,
			person: <>Raul Dandolini</>,
			title: <>senior system integration consultant, <b>Neoris</b></>,
		},
	],
	abilities: [
		{ name: 'HTML', year: 1998 },
		{ name: 'CSS & SCSS', year: 1998 },
		{ name: 'Javascript & ES6', year: 2000 },
		{ name: 'React, JSX & Redux', year: 2016 },
		{ name: '…', year: 2024 - 45 },
		...LOREM_IPSUM.split(/[,.kwxyz]/gim).slice(0, 14).map(word => ({
			name: word,
			year: Math.floor(Math.random() * (2023 - 1994 + 1)) + 1994,
		}))
	],
	experience: {
		relevant: 2,
		data: [
			/* {
				company: '',
				period: {
					start: [0, 0],
					end: [0, 0],
				},
				title: '',
				sector: '',
				about: '',
				attributions: [],
				achievements: [],
				technologies: [],
			}, */
			{
				company: 'Applied Blockchain',
				period: {
					start: [1, 2022],
					end: [4, 2024],
				},
				title: 'Fullstack Senior Web Developer',
				sector: 'blockchain technology',
				about: 'Applied Blockchain operates in the blockchain technology sector, specializing in delivering solutions across various industries. They focus on sectors such as DeFi (Decentralized Finance), Web3, cryptocurrency, and financial services, among others. They also work with industries like energy, supply chain, telecommunications, healthcare, and retail, helping organizations leverage blockchain to optimize value exchange and data management​.',
				clients: [
					'Shell',
					'Mishcon del Reya',
					'UppFirst',
				],
				// <!> THIS IS FROM PAGSEGURO!! REWRITE!!!
				attributions: [
					'Work with designers to implement puxel perfect layouts;',
					'Mostly FE DAPP;',
					'Precision;',
				],
				achievements: [
					'Mishcon del Reya / Green Falcon;',
					'UppFirst (https://uppfirst.com/);',
					'Shell: CSVs upload and download etc;',
					'website',
				],
				technologies: [
					'Blockchain/Crypto/DAPP (MetaMask, Web3);',
					'React',
					'Typescript',
					'SQL',
					'Webflow',
					'MUI',
					'TypeORM',
					'Next',
					'Vite',
					'Styled',
					'Jest',
					'Playwright',
				],
			},
			{
				company: 'PagSeguro',
				period: {
					start: [10, 2016],
					end: [1, 2022],
				},
				title: 'Senior frontend software engineer',
				sector: 'financial services',
				about: 'PagSeguro offers innovative solutions in financial services and means of payment, automating the purchase, sale and wiring process in a simple and secure manner.',
				clients: [],
				attributions: [
					'Coding using the latest technologies and frameworks with high quality standards;',
					'Developing web solutons tight together with backend developers;',
					'Deploying and sustaining applications in the cloud;',
					'Working in partership with product owners to plan and construct solutions;',
					'Planing and executing roadmaps with the team using agile methods such as Scrum and Kanban;',
					'Pair coding, reviewing and tutoring new team members;',
					'Planning and contributing to UIX teams to create easy-to-use and visually impacting solutions;',
					'Refactoring and supporting monolithic legacy systems.',
				],
				achievements: [
					'Developed new features at recurring payment service, creating user interfaces for creation and management for payments subscriptions using Apache Velocity;',
					'Designed the backoffice management system for customer segmentation fees and taxes;',
					'Built a payment link service using NodeJS and React with the company\'s internal framework;',
					'Planned, designed, coded, deployed and maintained a new sandbox website and several developer experience solutions;',
					'Added new payment methods at the high audience legacy monolithic online checkout;',
					'Created a synchronized websockets pooling solution for instant payment status integrated with internal APIs;',
				],
				technologies: [
					'HTML5, JSX, Handlebars, Apache Velocity Template Language (VTL);',
					'CSS, SCSS, BEM;',
					'Javascript: React, Redux, NodeJS, ES6, JSON, jQuery;',
					'NodeJS: ExpressJS for BFF (backend for frontend) and RESTfull API development;',
					'TDD: test-driven development with Jest, Mocha, Chai, Sinon;',
					'Package builders: Webpack, NextJS, Gulp;',
					'Git, Atlassian Stash/BitBucket;',
					'DevOps: Jenkins, GoCD, Apache Mesos, Docker;',
					'AWS: ECS, EC2, DynamoDB;',
					'Telemetrics: Splunk, NewRelic;',
					'Patterns and methodologies: domain-driven design, Kanban, agile.',
				],
			},
		].map(experience => ({
			...experience,
			period: {
				years: getYearsBetween(
					experience.period.start[0],
					experience.period.start[1],
					experience.period.end[0],
					experience.period.end[1],
				),
				...experience.period,
			},
		})).map(experience => ({
			...experience,
			period: {
				greaterThanYears: !Number.isInteger(experience.period.years),
				...experience.period,
			},
		})),
	},
};
