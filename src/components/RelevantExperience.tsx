import logo from '../images/logo.svg';
import { contents } from '../constants/contents';
import { PageNumber, CurrentPage, TotalPages, H2, Light, H3, Dim, H4 } from '../styles/etc.styled';
import { Paper, Page, Top, Logo, Header, Contents, Bottom } from '../styles/structure.styled';
import { LastExperiences, SpacedRows, Summary } from '../styles/experience.styled';
import { getYearsBetween, hashString, monthAbbr } from '../utils/aux';
import config from '../styles/config';

// =============================================================================

const RelevantExperience = () => {
	return (
		contents.experience.data.slice(0, contents.experience.relevant).map((experience, index) => (
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
								<Dim>
									({experience.period.greaterThanYears && (<>&gt;</>)}
									{Math.floor(experience.period.years)}
									{' '}
									years)
								</Dim>
							</li>
							<li><b>Title:</b>{' '}{experience.title}</li>
							<li><b>Sector:</b>{' '}{experience.sector}</li>
							<li><b>About:</b>{' '}{experience.about}</li>
							{experience.clients.length > 0 && (
								<li><b>Clients:</b>{' '}{experience.clients.join(', ')}.</li>
							)}
						</Summary>

						<SpacedRows>
							<div>
								<H4>Attributions</H4>
								<LastExperiences className='attributions'>
									{experience.attributions.map(attribution => (
										<li key={hashString(attribution)}>{attribution}</li>
									))}
								</LastExperiences>
							</div>
							<div>
								<H4>Achievements</H4>
								<LastExperiences className='achievements'>
									{experience.achievements.map(achievement => (
										<li key={hashString(achievement)}>{achievement}</li>
									))}
								</LastExperiences>
							</div>
							<div>
								<H4>Technologies</H4>
								<LastExperiences className='technologies'>
									{experience.technologies.map(technology => (
										<li key={hashString(technology)}>{technology}</li>
									))}
								</LastExperiences>
							</div>
						</SpacedRows>

					</Contents>
					{/* ------------------------------------------------------------------------ */}
					<Bottom>
						<PageNumber>
							<CurrentPage>
								{2 + index}
								<TotalPages>/{config.page.total}</TotalPages>
							</CurrentPage>
						</PageNumber>
					</Bottom>
					{/* ------------------------------------------------------------------------ */}
				</Page>
			</Paper>
		))
	);
}

export default RelevantExperience
