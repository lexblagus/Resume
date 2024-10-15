import logo from '../images/logo.svg';
import { contents } from '../constants/contents';
import { PageNumber, CurrentPage, TotalPages, H2, Light, H3, Dim, H4 } from '../styles/etc.styled';
import { Paper, Page, Top, Logo, Header, Contents, Bottom } from '../styles/structure.styled';
import { LastExperiences, SpacedRows, Summary } from '../styles/experience.styled';
import { getTotalPages, hashString, monthAbbr } from '../utils/aux';
import config from '../styles/config';

// =============================================================================

const RelevantExperience = () => {
	return (
		contents.experience.distribution.relevant.map(index => {
			const experience = contents.experience.data[index];
			return (
				<Paper key={hashString(experience.company)}>
					<Page>
						{/* ------------------------------------------------------------------------ */}
						<Top>
							<Logo
								src={logo}
								alt="Logo comopsed of an lowercase letter b within a black square"
							/>
							<Header>
								{index === 0 && (
									<H2>
										<Light>Professional</Light>
										{' '}experience
									</H2>
								)}
							</Header>
						</Top>
						{/* ------------------------------------------------------------------------ */}
						<Contents className={index === 0 ? 'topSpaced' : ''}>
							<H3><span className="slashes">//</span> {experience.company}</H3>
							<Summary>
								<li>
									<b>Period:</b>
									{' '}
									{monthAbbr(experience.period.start[0])}/{experience.period.start[1]}
									{' ▹ '}
									{monthAbbr(experience.period.end[0])}/{experience.period.end[1]}
									{' '}
									<Dim>({experience.period.amount})</Dim>
								</li>
								<li><b>Title:</b>{' '}{experience.title}</li>
								<li><b>Sector:</b>{' '}{experience.sector}</li>
								{experience.about && (
									<li><b>About:</b>{' '}{experience.about}</li>
								)}
								{experience.clients.length > 0 && (
									<li><b>Clients:</b>{' '}{experience.clients.join(', ')}.</li>
								)}
							</Summary>

							<SpacedRows>
								{experience.attributions.length > 0 && (
									<div>
										<H4>Attributions</H4>
										<LastExperiences className='attributions'>
											{experience.attributions.map((attribution, index) => (
												<li key={hashString(attribution)}>{attribution}{index === experience.attributions.length - 1 ? '.' : ';'}</li>
											))}
										</LastExperiences>
									</div>
								)}
								{experience.achievements.length > 0 && (
									<div>
										<H4>Achievements</H4>
										<LastExperiences className='achievements'>
											{experience.achievements.map((achievement, index) => (
												<li key={hashString(achievement)}>{achievement}{index === experience.achievements.length - 1 ? '.' : ';'}</li>
											))}
										</LastExperiences>
									</div>
								)}
								{experience.technologies.length > 0 && (
									<div>
										<H4>Technologies</H4>
										<LastExperiences className='technologies'>
											{experience.technologies.map((technology, index) => (
												<li key={hashString(technology)}>{technology}{index === experience.technologies.length - 1 ? '.' : ';'}</li>
											))}
										</LastExperiences>
									</div>
								)}
							</SpacedRows>
						</Contents>
						{/* ------------------------------------------------------------------------ */}
						<Bottom>
							<PageNumber>
								<CurrentPage>
									{contents.experience.distribution.pre + index + 1}
									<TotalPages>/{getTotalPages(contents)}</TotalPages>
								</CurrentPage>
							</PageNumber>
						</Bottom>
						{/* ------------------------------------------------------------------------ */}
					</Page>
				</Paper>
			);
		})
	);
}

export default RelevantExperience
