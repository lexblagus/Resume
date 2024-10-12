import ReactDOMServer from 'react-dom/server';
import { Fragment } from 'react/jsx-runtime';
import logo from '../images/logo.svg';
import { calculateAge, hashString, yearsFromNow } from '../utils/aux';
import { contents } from '../constants/contents';
import { Bottom, Contents, Header, Logo, Page, Paper, Top } from '../styles/structure.styled';
import { TwoCols, TwoSpacedRows, About, Testemonials, Abilities } from '../styles/cover.styled';
import { TagLine, Light, H1, TagLineSpaced, Mild, Unwrapable, PageNumber, CurrentPage, TotalPages, Small } from '../styles/etc.styled';
import config from '../styles/config';

// =============================================================================

const Cover = () => {
	return (
		<Paper>
			<Page>
				{/* ------------------------------------------------------------------------ */}
				<Top>
					<Logo
						src={logo}
						alt="Logo comopsed of an lowercase letter b within a black square"
					/>
					<Header>
						<TagLine>
							//{' '}
							<Light>professional</Light>{' '}
							resume
						</TagLine>
					</Header>
				</Top>
				{/* ------------------------------------------------------------------------ */}
				<Contents>
					<H1><Light>alexander</Light> blagus</H1>
					<TagLineSpaced>
						// <Light>senior</Light>{' '}
						web developer
						<br />
						<Light>
							<Mild>//</Mild> frontend &amp; backend: <Mild>fullstack</Mild>
						</Light>
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
								{/*
								<blockquote>
									<cite>I am what I am</cite>
									<footer>
										<div className="person">Lex,</div>
										<div className="title">myself</div>
									</footer>
								</blockquote>
								*/}
								{contents.testemonials.map(testemonial => (
									<blockquote key={hashString(ReactDOMServer.renderToString(testemonial.cite))}>
										<cite>{testemonial.cite}</cite>
										<footer>
											<div className="person">{testemonial.person},</div>
											<div className="title">{testemonial.title}</div>
										</footer>
									</blockquote>
								))}
							</Testemonials>
						</TwoSpacedRows>
						<Abilities>
							<div>technology/tool</div>
							<div>years</div>
							{contents.abilities.map(ability => (<Fragment key={hashString(JSON.stringify(ability))}>
								<div>{ability.name}</div>
								<div>{yearsFromNow(ability.year)}</div>
							</Fragment>))}
						</Abilities>
					</TwoCols>
				</Contents>
				{/* ------------------------------------------------------------------------ */}
				{<Bottom>
					<PageNumber>
						<CurrentPage>
							1
							<TotalPages>/{config.page.total}</TotalPages>
						</CurrentPage>
					</PageNumber>
				</Bottom>}
				{/* ------------------------------------------------------------------------ */}
			</Page>
		</Paper>
	)
}

export default Cover
