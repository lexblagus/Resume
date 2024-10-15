import ReactDOMServer from 'react-dom/server';
import { Fragment } from 'react/jsx-runtime';
import logo from '../images/logo.svg';
import { calculateAge, getTotalPages, hashString, yearsFromNow } from '../utils/aux';
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
						<Unwrapable>
							//{' '}
							<Light>senior</Light>{' '}
							web developer
						</Unwrapable>
						{' '}
						<Unwrapable>
							<Small>
								<Light>
									frontend &amp; backend{' '}
									<Mild>(fullstack)</Mild>
								</Light>
							</Small>
						</Unwrapable>

					</TagLineSpaced>
					<TwoCols>
						<TwoSpacedRows>
							<About>
								{contents.about.map(content => (
									<li key={hashString(ReactDOMServer.renderToString(content))}>{content}</li>
								))}
							</About>
							<Testemonials>
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
							<TotalPages>/{getTotalPages(contents)}</TotalPages>
						</CurrentPage>
					</PageNumber>
				</Bottom>}
				{/* ------------------------------------------------------------------------ */}
			</Page>
		</Paper>
	)
}

export default Cover
