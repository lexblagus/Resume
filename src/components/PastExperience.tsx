import logo from '../images/logo.svg';
import { PageNumber, CurrentPage, TotalPages, H2, Light, H3, Dim, Tiny } from '../styles/etc.styled';
import { Paper, Page, Top, Logo, Header, Contents, Bottom } from '../styles/structure.styled';
import { contents } from '../constants/contents';
import { PastExperiences, Experience, SummaryLabel, TwoCols } from '../styles/experience.styled';
import { contentToKey, getTotalPages, joinElements, monthAbbr } from '../utils/aux';

// =============================================================================

const PastExperience = () => {
	return contents.experience.distribution.past.map((pastIndexes, i) => (
		<Paper key={contentToKey(pastIndexes)}>
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
				<Contents className='topSpaced'>
					{pastIndexes.map(index => {
						const experience = contents.experience.data[index];
						return (
							<PastExperiences key={contentToKey(experience.company)}>
								<TwoCols>
									<div>
										<SummaryLabel>
											<div>
												<H3>{experience.company}</H3>
												<Tiny>{experience.sector}</Tiny>
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
										<Experience className='achievements'>
											{experience.achievements.map((achievement, idx) => (
												<li key={contentToKey(achievement)}>
													{achievement}
													{idx === experience.achievements.length - 1 ? '.' : ';'}
												</li>
											))}
										</Experience>
										<Experience className='technologies'>
											<li className='single'>
												<b>Technologies: </b>
												{joinElements(experience.technologies)}
											</li>
										</Experience>
										{experience.clients.length > 0 && (
											<Experience className='clients'>
												<li className='single'>
													<b>Clients: </b>
													{joinElements(experience.clients)}
												</li>
											</Experience>
										)}

									</div>
								</TwoCols>
							</PastExperiences>
						);
					})}
				</Contents>
				{/* ------------------------------------------------------------------------ */}
				<Bottom>
					<PageNumber>
						<CurrentPage>
							{contents.experience.distribution.pre + contents.experience.distribution.relevant.length + i + 1}
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
