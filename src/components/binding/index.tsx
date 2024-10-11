import { Fragment } from 'react/jsx-runtime';
import logo from '../../images/logo.svg';
import { calculateAge, yearsFromNow } from '../../utils/aux';
import {
	Background,
	Page,
	Top,
	Header,
	Logo,
	Paper,
	Contents,
	Bottom,
	PageNumber,
	CurrentPage,
	TotalPages,
	Light,
	TagLine,
	H1, TwoCols,
	TagLineSpaced,
	About,
	TwoSpacedRows,
	Unwrapable,
	Abilities,
	Testemonials,
	Mild
} from './styled';
import { LOREM_IPSUM } from '../../constants/contents';

// =============================================================================

const Binding = () => {
	return (
		<Background >
			<Paper>
				<Page >
					{/* ------------------------------------------------------------------------ */}
					<Top >
						<Logo
							src={logo}
							alt="Logo comopsed of an lowercase letter b within a black square"
						/>
						<Header >
							<TagLine>
								//{' '}
								<Light>professional</Light>{' '}
								resume
							</TagLine>
						</Header>
					</Top>
					{/* ------------------------------------------------------------------------ */}
					<Contents >
						<H1><Light>alexander</Light> blagus</H1>
						<TagLineSpaced>
							// <Light>senior</Light>{' '}
							web developer
							<br />
							// <Light>frontend &amp; backend <Mild>(fullstack)</Mild></Light>
						</TagLineSpaced>
						<TwoCols>
							<TwoSpacedRows>
								<About>
									<li>+55 (11) <Unwrapable><b>985227084</b></Unwrapable></li>
									<li><a href="mailto:lex@blag.us"><Unwrapable><b>lex@</b>blag.us</Unwrapable></a></li>
									<li><a href="https://blag.us/">https://<b><Unwrapable>blag.us</Unwrapable></b>/</a></li>
									<li><br /></li>
									<li><b>{calculateAge('1978-11-12')}</b> years old</li>
									<li>lives in <Unwrapable><b>São Paulo</b>, Brazil</Unwrapable></li>
									<li>in <Unwrapable><b>Vila Madalena</b></Unwrapable>, <Unwrapable>ZIP 05451-010</Unwrapable></li>
									<li><b>Portuguese</b> as <Unwrapable>native language</Unwrapable></li>
									<li><Unwrapable>fluent in</Unwrapable> <b>English</b></li>
									<li><Unwrapable>availability for</Unwrapable> <b>travel</b></li>
								</About>
								<Testemonials>
									{/* <blockquote>
										<cite>I am what I am</cite>
										<footer>
											<div className="person">Lex,</div>
											<div className="title">myself</div>
										</footer>
									</blockquote> */}
									{[
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
									].map(testemonial => (<blockquote>
										<cite>{testemonial.cite}</cite>
										<footer>
											<div className="person">{testemonial.person},</div>
											<div className="title">{testemonial.title}</div>
										</footer>
									</blockquote>))}
								</Testemonials>
							</TwoSpacedRows>
							<Abilities>
								<div>technology/tool</div>
								<div>years</div>
								{[
									{ name: 'HTML', year: 1998 },
									{ name: 'CSS & SCSS', year: 1998 },
									{ name: 'Javascript & ES6', year: 2000 },
									{ name: 'React, JSX & Redux', year: 2016 },
									{ name: '…', year: 2024 - 45 },
									...LOREM_IPSUM.split(/[,.kwxyz]/gim).slice(0, 25).map(word => ({
										name: word,
										year: Math.floor(Math.random() * (2023 - 1994 + 1)) + 1994,
									}))
								].map(ability => (<Fragment key={ability.name}>
									<div>{ability.name}</div>
									<div>{yearsFromNow(ability.year)}</div>
								</Fragment>))}
							</Abilities>
						</TwoCols>
					</Contents>
					{/* ------------------------------------------------------------------------ */}
					<Bottom >
						<PageNumber >
							<CurrentPage>
								1
								<TotalPages>/1</TotalPages>
							</CurrentPage>
						</PageNumber>
					</Bottom>
					{/* ------------------------------------------------------------------------ */}
				</Page>
			</Paper>
		</Background>
	)
}

export default Binding
