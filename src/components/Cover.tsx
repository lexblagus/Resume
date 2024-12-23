import { Fragment } from 'react/jsx-runtime';
import logo from '../images/logo.svg';
import { contentToKey, getTotalPages, yearsFromNow } from '../utils/aux';
import { contents } from '../constants/contents';
import { Bottom, Contents, Header, Logo, Page, Paper, Top } from '../styles/structure.styled';
import { TwoCols, TwoSpacedRows, About, Testemonials, Abilities } from '../styles/cover.styled';
import { TagLine, Light, H1, TagLineSpaced, Mild, Unwrapable, PageNumber, CurrentPage, TotalPages, Small } from '../styles/etc.styled';

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
								{contents.about.map((content, index) => (
									<li
										key={contentToKey(content)}
										style={{
											marginBottom: index === 3 ? '1em' : '0',
										}}
									>
										{content}
									</li>
								))}
							</About>
							<Testemonials>
								{contents.testemonials.map(testemonial => (
									<blockquote key={contentToKey(testemonial.cite)}>
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
							<div>technology</div>
							<div>years</div>
							{contents.abilities.map(ability => (<Fragment key={contentToKey(ability)}>
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
