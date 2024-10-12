import logo from '../images/logo.svg';
import { PageNumber, CurrentPage, TotalPages, H2, Light, H3, Dim, H4, Small } from '../styles/etc.styled';
import { Paper, Page, Top, Logo, Header, Contents, Bottom } from '../styles/structure.styled';
import config from '../styles/config';
import { contents, LOREM_IPSUM } from '../constants/contents';
import { LastExperiences, SpacedRows, SummaryLabel, TwoCols } from '../styles/experience.styled';
import { Fragment } from 'react/jsx-runtime';
import { getTotalPages, hashString, monthAbbr } from '../utils/aux';

// =============================================================================

const PastExperience = () => {
	return contents.experience.distribution.past.map((pastIndexes, i) => (
		<Paper key={pastIndexes.join('.')}>
			<Page>
				{/* ------------------------------------------------------------------------ */}
				<Top>
					<Logo
						src={logo}
						alt="Logo comopsed of an lowercase letter b within a black square"
					/>
					<Header>
						{i === 0 && (
							<H2>
								<Light>Past</Light>
								{' '}experiences
							</H2>
						)}
					</Header>
				</Top>
				{/* ------------------------------------------------------------------------ */}
				<Contents>
					<TwoCols>
						{pastIndexes.map(index => {
							const experience = contents.experience.data[index];
							return (

								<Fragment key={hashString(experience.company)}>
									<div>
										<SummaryLabel>
											<div>
												<H3>{experience.company}</H3>
												{experience.sector}
											</div>
											<div><b>{experience.title}</b></div>
											<div>
												{monthAbbr(experience.period.start[0])}/{experience.period.start[1]}
												{' ▹ '}
												{monthAbbr(experience.period.end[0])}/{experience.period.end[1]}
												<br />
												<Dim>({experience.period.amount})</Dim>
											</div>

										</SummaryLabel>
									</div>
									<div>
										<SpacedRows className='tiny'>
											<LastExperiences className='achievements'>
												{experience.achievements.map((achievement, idx) => (
													<li key={hashString(achievement)}>
														<Small>
															{achievement}
															{idx === experience.achievements.length - 1 ? '.' : ';'}
														</Small>
													</li>
												))}
											</LastExperiences>
											<LastExperiences className='technologies'>
												<li className='single'>
													<Small>
														<b>Technologies: </b>
														{experience.technologies.join(', ')}.
													</Small>
												</li>
											</LastExperiences>
											{experience.clients.length > 0 && (
												<LastExperiences className='clients'>
													<li className='single'>
														<Small>
															<b>Clients: </b>
															{experience.clients.join(', ')}.
														</Small>
													</li>
												</LastExperiences>
											)}
										</SpacedRows>

									</div>
								</Fragment>


							);
						})}
					</TwoCols>
				</Contents>
				{/* ------------------------------------------------------------------------ */}
				<Bottom>
					<PageNumber>
						<CurrentPage>
							{1 + contents.experience.distribution.relevant.length + i + 1}
							<TotalPages>/{getTotalPages(contents)}</TotalPages>
						</CurrentPage>
					</PageNumber>
				</Bottom>
				{/* ------------------------------------------------------------------------ */}
			</Page>
		</Paper>
	));
}

export default PastExperience
