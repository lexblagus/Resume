import { Abbr, Unwrapable } from "../styles/etc.styled";
import { amountOfTime, calculateAge } from "../utils/aux";

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
	about: [
		<>+55 (11) <Unwrapable><b>985227084</b></Unwrapable></>,
		<><a href="mailto:lex@blag.us"><Unwrapable><b>lex@</b>blag.us</Unwrapable></a></>,
		<><a href="https://blag.us/">https://<b><Unwrapable>blag.us</Unwrapable></b>/</a></>,
		<><br /></>,
		<><b>{calculateAge('1978-11-12')}</b> years old</>,
		<><b>{calculateAge('1999-04-12')}</b> years of work experience</>,
		<>lives in <Unwrapable><b>São Paulo</b>, Brazil</Unwrapable></>,
		<>in <Unwrapable><b>Vila Madalena</b></Unwrapable>, <Unwrapable><Abbr>ZIP</Abbr> 05451-010</Unwrapable></>,
		<><b>Portuguese</b> as <Unwrapable>native language</Unwrapable></>,
		<><Unwrapable>fluent in</Unwrapable> <b>English</b></>,
		<><Unwrapable>availability for</Unwrapable> <b>travel</b></>,
	],
	testemonials: [
		{
			cite: <>He has been determined during the whole process, giving creative solutions for the challenges of the work</>,
			person: <>Alexandre Nakasato</>,
			title: <>founder of <b>Nicsware</b></>,
		},
		{
			cite: <>Lex is a great professional, has a great technical knowledge, great person to work in groups and has great communication skills. Recommend to the highest levels of projects</>,
			person: <>Raquel Oliveira</>,
			title: <>services operation manager, <b>IBM</b></>,
		},
		{
			cite: <>Lex is a creative person who works hard to get tasks done on time, and many times earlier than requested. His teamwork and clear personality allow a great atmosphere around and makes easy the job's getting done</>,
			person: <>Raul Dandolini</>,
			title: <>senior system integration consultant, <b>Neoris</b></>,
		},
	],
	abilities: [
		{ "name": "HTML, xHTML, MD, SVG, XML, …", "year": 1999 },
		{ "name": "CSS, SCSS, … (pre-processors)", "year": 1999 },
		{ "name": "Javascript & ES6", "year": 2001 },
		{ "name": "Typescript", "year": 2022 },
		{ "name": "React & JSX", "year": 2019 },
		{ "name": "NodeJS & ExpressJS", "year": 2013 },
		{ "name": "HTTP & RESTful APIs", "year": 2013 },
		{ "name": "WebSockets", "year": 2020 },
		{ "name": "Redux", "year": 2019 },
		{ "name": "NextJS, Webpack, Gulp (package builders)", "year": 2017 },
		{ "name": "jQuery", "year": 2005 },
		{ "name": "DAPP (blockchain, MetaMask, Web3.js, Ganache, …)", "year": 2022 },
		{ "name": "Styled components, Material UI", "year": 2022 },
		{ "name": "Oracle", "year": 2002 },
		{ "name": "Microsoft SQL Server, MySQL, PostgreSQL, …", "year": 2005 },
		{ "name": "Neo4J & Cypher", "year": 2013 },
		{ "name": "E2E: Playwright, …", "year": 2023 },
		{ "name": "Unitary: Jest, Mocha, …", "year": 2017 }, // Chai, Sinon
		{ "name": "Git & SVN", "year": 2005 },
		{ "name": "Monorepo PNPM", "year": 2022 },
		{ "name": "Jenkins/GoCD", "year": 2017 },
		{ "name": "AWS: ECS, EC2, DynamoDB, Lambda, …", "year": 2013 },
		{ "name": "Telemetrics: Splunk, NewRelic", "year": 2019 },
		{ "name": "Bash", "year": 2015 },
		{ "name": "Linux / MacOS", "year": 2011 },
		{ "name": "Windows Server", "year": 2002 },
		{ "name": "Adobe Photoshop, Illustrator, InDesign, …", "year": 1997 },
		// { "name": "Apache & Nginx", "year": 2001 },
		// { "name": "Microsoft .Net C#", "year": 2006 },
		// { "name": "PHP", "year": 2004 },
		// { "name": "Excel / Spreadsheets", "year": 2002 }
	],
	experience: {
		distribution: {
			pre: 1, // cover and technologies
			relevant: 
				// [0,1,2,3,4,5,6,7,8,9],
				[0, 1],
			past: [
				// [0,1,2,3,4,5,6,7,8,9],
				[2, 3],
				[4, 5, 6],
				[7, 8, 9]
			],
		},
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
				clients: [],
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
				about: 'Specialized in delivering solutions across various industries, like energy, supply chain, telecommunications, healthcare, and retail, helping organizations leverage blockchain to optimize value exchange and data management. They focus on sectors such as DeFi (Decentralized Finance), Web3, cryptocurrency, and financial services, among others',
				clients: [
					<>Shell</>,
					<>Mishcon del Reya</>,
					<>UppFirst</>,
				],
				attributions: [
					<>Coding of <Abbr>dapps</Abbr> (decentralized applications) mostly in <Abbr>FE</Abbr>, implementing features, integrating blockchain ecosystem and optimizing features like wallet integration, <Abbr>NFT</Abbr> rendering etc</>,
					<>Be mindfull of  the rendering and precise calculation of cryptocurrency values and long data like tokens using the several digits (satoshis/gweis)</>,
					<>Work with designers to implement pixel perfect detailed layouts</>,
					<>Working with professionals from all aroud the globe, from different backgrounds and cultures and also in different timezones</>,
					<>Technical presentetions to customer showing current progress, helping with questions, making suggestions and discussing next steps</>,
				],
				achievements: [
					<>Creation of a <Abbr>DAPP</Abbr> for a custom cryptocurrency related to green causes, with features like minting, airdrop, balances, claim, block counting, coin swap and <Abbr>NFT</Abbr> claiming. Also created the admin application for managing the crypto currency</>,
					<>Development of an e-commerce for physical product tighted to <Abbr>NFT</Abbr> with claiming and reselling, giving full consideration to responsivess and proper rendering of thoroughly elaborated application layout</>,
					<>Added new features and maintained the confiability of a realtime, mission-critical worldwide tradding exchange application for products of the massive energy sector. Among several activities, added features like CSV parsing for upload/download (feeding the application source data), fixed several bugs in the data exchange stream, improved layout and added product date expiry controls bypass</>,
					<>Recreated the company's static website using a WYSIWYG web based application for better team colaboration (content editing) keeping the aesthetics just as previously designed</>,
				],
				technologies: [
					<>React</>,
					<>Typescript</>,
					<>MUI</>,
					<>MetaMask</>,
					<>Web3.js</>,
					<>Metamask wallet</>,
					<>Phantom wallet</>,
					<>Truffle suite</>,
					<>Ganache</>,
					<>BigNumber</>,
					<>SQL</>,
					<>TypeORM</>,
					<>Webflow</>,
					<>Next</>,
					<>Vite</>,
					<>Styled</>,
					<>Jest</>,
					<>Playwright</>,
					<>Microstf SQL Server</>,
					<>Monorepo using PNPM</>,
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
				about: 'PagSeguro offers innovative solutions in financial services and means of payment, automating the purchase, sale and wiring process in a simple and secure manner',
				clients: [],
				attributions: [
					<>Coding using the latest technologies and frameworks with high quality standards</>,
					<>Developing web solutons tight together with backend developers</>,
					<>Deploying and sustaining applications in the cloud</>,
					<>Working in partership with product owners to plan and construct solutions</>,
					<>Planing and executing roadmaps with the team using agile methods such as Scrum and Kanban</>,
					<>Pair coding, reviewing and tutoring new team members</>,
					<>Planning and contributing to <Abbr>UIX</Abbr> teams to create easy-to-use and visually impacting solutions</>,
					<>Refactoring and supporting monolithic legacy systems</>,
				],
				achievements: [
					<>Developed new features at recurring payment service, creating user interfaces for creation and management for payments subscriptions using Apache Velocity</>,
					<>Designed the backoffice management system for customer segmentation fees and taxes</>,
					<>Built a payment link service using NodeJS and React with the company\'s internal framework</>,
					<>Planned, designed, coded, deployed and maintained a new sandbox website and several developer experience solutions</>,
					<>Added new payment methods at the high audience legacy monolithic online checkout</>,
					<>Created a synchronized websockets pooling solution for instant payment status integrated with internal APIs</>,
				],
				technologies: [
					<>HTML5, JSX, Handlebars, Apache Velocity Template Language (VTL)</>,
					<>CSS, SCSS, BEM</>,
					<>Javascript: React, Redux, NodeJS, ES6, JSON, jQuery</>,
					<>NodeJS: ExpressJS for BFF (backend for frontend) and RESTfull API development</>,
					<>TDD: test-driven development with Jest, Mocha, Chai, Sinon</>,
					<>Package builders: Webpack, NextJS, Gulp</>,
					<>Git, Atlassian Stash/BitBucket</>,
					<>DevOps: Jenkins, GoCD, Apache Mesos, Docker</>,
					<>AWS: ECS, EC2, DynamoDB</>,
					<>Telemetrics: Splunk, NewRelic</>,
					<>Patterns and methodologies: domain-driven design, Kanban, agile</>,
				],
			},
			{
				company: 'x128',
				period: {
					start: [10, 2014],
					end: [9, 2016],
				},
				title: 'CEO and founder',
				sector: 'Software design and consulting',
				about: '',
				clients: [
					<>Olé Studio</>,
					<>ClickBebe</>,
					<>Alumicentro</>,
					<>Polycom</>,
					<>Promoção Relâmpago Passagens</>,
					<>Mercovino/Brindisi</>,
					<>Changepoint</>,
					<>Itaú</>,
					<>Akua</>,
					<>Ornitorrinco</>,
					<>ReachLocal</>,
					<>Agilizeware</>,
				],
				attributions: [],
				achievements: [
					<>Integrated and customized a content management system (<Abbr>CMS</Abbr>), product catalog and payment checkout, chat rooms with high-audience and auto-scalable infrastructure, user forums, self-service announcements editor for buying and selling goods</>,
					<>Built a customer relationship management (<Abbr>CMS</Abbr>) and enterprise resource planning (<Abbr>ERP</Abbr>) for a metallurgic goods reseller</>,
					<>Developed a data mining tool to search for airline tickets best prices</>,
					<>Built, deployed and maintained several e-commerce websites for different publics: fashion, beverage, pregnant/lactating woman and many others</>,
					<>Integrated a governance software for Itaú bank using the canadian governance solution ChangePoint</>,
				],
				technologies: [
					<>NodeJS</>,
					<>PHP</>,
					<>Microsoft .Net with C# using SVN</>,
					<>Ruby on Rails</>,
					<>MySQL</>,
					<>Wordpress with Woocommerce (providing plugin integration, creation and customization)</>,
					<>AWS ECS with auto-scaling</>,
					<>Git and GitLab</>,
					<>Changepoint governance software</>,
				],
			},
			{
				company: 'Nicsware',
				period: {
					start: [7, 2003],
					end: [7, 2004],
				},
				title: 'Software architect',
				sector: 'Healthcare software startup',
				about: '',
				clients: [],
				attributions: [],
				achievements: [
					<>Developed a medical record software with flexible form editor, clinical schedule, extensible patient contacts record system; with sharing features between physicians protected via <Abbr>ACL</Abbr></>,
					<>Built a framework with web server in Javascript/NodeJS using graphical database Neo4J as data storage; all communication pipelines in JSON and responsive layout</>,
					<>Created a business plan including financial planning, marketing strategy and selling support materials</>,
				],
				technologies: [
					<>HTML</>,
					<>CSS</>,
					<>jQuery</>,
					<>NodeJS</>,
					<>Neo4J graphical database</>,
					<>AWS</>,
				],
			},
			{
				company: 'Neoris',
				period: {
					start: [6, 2011],
					end: [7, 2013],
				},
				title: 'Senior system integration consultant',
				sector: 'Software consulting services',
				about: '',
				clients: [
					<>Usiminas</>,
					<>Vale</>,
					<>Gerdau</>,
					<>Videolar</>,
					<>Eternit</>,
				],
				attributions: [],
				achievements: [
					<>Developed software for production lines for large factories with special focus in <Abbr>OEE</Abbr> (overall equipment efficency): charts showing the machinery maintenance stop summary and staff production performance</>,
					<>Upgraded the routing layout of the videowall, a panel measuring 16.6×9.3 meters atthe control center that monitors 24×7 allthe processes of a large-scale siderurgical plant</>,
					<>Created <Abbr>HDTV</Abbr> dashboards for the port operations tower that controlls the ship’s parking, load and unload</>,
				],
				technologies: [
					<>SAP MII</>,
					<>Javascript</>,
					<>.Net C#</>,
					<>HTML</>,
					<>CSS</>,
					<>XML</>,
					<>XSLT</>,
					<>XSD</>,
					<>xPath</>,
				],
			},
			{
				company: 'Telefonica',
				period: {
					start: [8, 2008],
					end: [4, 2011],
				},
				title: 'Software architect',
				sector: 'Large scale telecomunications',
				about: '',
				clients: [],
				attributions: [],
				achievements: [
					<>Created a portal with several applications connected to a great deal of data sources for managing installation and repair in telecommunications landlines of corporate customers</>,
					<>Integrated several databases (Oracle, Microsoft SQL Server, MySQL, …) for online analytical processing (<Abbr>OLAP</Abbr>)</>,
					<>Built a <Abbr>PHP</Abbr> framework using <Abbr>MVC</Abbr> pattern with a <Abbr>UIX</Abbr> interactive styleguide</>,
				],
				technologies: [
					<>HTML</>,
					<>CSS</>,
					<>Javascript</>,
					<>jQuery</>,
					<>JSON</>,
					<>Microsoft SQL Server</>,
					<>Oracle</>,
					<>MySQL</>,
					<>PostgreSQL</>,
					<>Windows Server management</>,
				],
			},
			{
				company: 'FastCash',
				period: {
					start: [9, 2006],
					end: [8, 2008],
				},
				title: 'Software architect and tech lead',
				sector: 'Virtual currency platform for micro finances',
				about: '',
				clients: [],
				attributions: [],
				achievements: [
					<>Developed a micro payment gateway system for all payment options available in Brazil, alongside its conciliation logic and digital product delivery: pincodes or electronic credit in partner systems</>,
					<>Coded deep processual changes in the e-commerce platform, like product composition, checkout process and physical with virtual stock management</>,
					<>Created an extranet platform for integrated business partners to existing cloud systems for sales and management of digital goods</>,
				],
				technologies: [
					<>Microsoft ASP & IIS</>,
					<>Automated bots using Microsoft RDC</>,
					<>HTML & CSS</>,
					<>Microsoft SQL Server</>,
					<>Microsoft .Net</>,
					<>Windows Server management</>,
				],
			},
			{
				company: 'IBM',
				period: {
					start: [8, 2005],
					end: [7, 2006],
				},
				title: 'Quality assurance specialist',
				sector: 'Technology services and hardware',
				about: '',
				clients: [],
				attributions: [],
				achievements: [
					<>quality assurance on the website IBM.com (all americas) and intranet W3 (USA)</>,
					<>deployed a skill mapping tool to gather staff abilities and their allocation in projects</>,
				],
				technologies: [
					<>HTML & CSS</>,
					<>Javascript & AJAX</>,
					<>PHP</>,
					<>WebKing</>,
				],
			},
			{
				company: 'IBEX',
				period: {
					start: [11, 2004],
					end: [8, 2005],
				},
				title: 'Frontend developer and UIX designer',
				sector: 'Digital agency',
				about: '',
				clients: [
					<>Telefonica</>,
					<>Gerdau</>,
					<>Bridgestone/Firestone</>,
					<>Alliance consultoria</>,
				],
				attributions: [],
				achievements: [
					<>Rebuilt the game framework for corporate incentive campaigns with greater modularity, such as skins, score by time or accuracy and many other features</>,
					<>Built a <Abbr>CMS</Abbr> for user-customizable websites</>,
					<>Worked on visual identity for products</>,
				],
				technologies: [
					<>HTML & CSS</>,
					<>Javascript</>,
					<>PostgreSQL</>,
					<>Adobe Flash using AFLEX (AJAX for Flash)</>,
				],
			},
			{
				company: 'Santander',
				period: {
					start: [6, 2003],
					end: [11, 2004],
				},
				title: 'Software architect',
				sector: 'Worldwide banking and financial services',
				about: '',
				clients: [],
				attributions: [],
				achievements: [
					<>Developed a web application for a diversity of financial dashboards, all deeply customizable</>,
					<>Prototyped a continental intranet with financial reports, news, documents, photos and more</>,
					<>Created several management tools, like task status, meeting schedule, document repository, webchat, …</>,
				],
				technologies: [
					<>HTML & CSS</>,
					<>Javascript</>,
					<>Microsoft ASP & IIS</>,
					<>Excel integration</>,
				],
			},
		].map(experience => ({
			...experience,
			period: {
				amount: amountOfTime(
					experience.period.start[0],
					experience.period.start[1],
					experience.period.end[0],
					experience.period.end[1],
				),
				...experience.period,
			},
		})),
	},
};

// -----------------------------------------------------------------------------

export type Contents = typeof contents;

