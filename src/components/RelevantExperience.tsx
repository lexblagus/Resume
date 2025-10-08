import logo from '../images/logo.svg';
import { contents } from '../constants/contents';
import { PageNumber, CurrentPage, TotalPages, H2, Light, H3, Dim, H4 } from '../styles/etc.styled';
import { Paper, Page, Top, Logo, Header, Contents, Bottom } from '../styles/structure.styled';
import { Experience, SpacedRows, Summary } from '../styles/experience.styled';
import { contentToKey, getTotalPages, joinElements, monthAbbr } from '../utils/aux';
import { Fragment } from 'react/jsx-runtime';

// =============================================================================

const RelevantExperience = () => {
	return contents.experience.distribution.relevant.map((pastIndexes, i) => (
		<Paper key={contentToKey(pastIndexes)}>
			<Page>
				{/* ------------------------------------------------------------------------ */}
				<Top>
					<Logo
						src={logo}
						alt="Logo composed of an lowercase letter b within a black square"
					/>
					<Header>
						{i === 0 && (
							<H2>
								<Light>Professional</Light>
								{' '}experiences
							</H2>
						)}
					</Header>
				</Top>
				{/* ------------------------------------------------------------------------ */}
				<Contents>
					{pastIndexes.map(index => {
						const experience = contents.experience.data[index];
						return (
							<Fragment key={contentToKey(experience.company)}>
								{/* <H3><span className="slashes">//</span> {experience.company}</H3> */}
								<Summary>
									<H3><span className="slashes">//</span> {experience.company}</H3>
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
										<li>
											<b>Clients:</b>{' '}{joinElements(experience.clients)}
										</li>
									)}
								</Summary>
								<SpacedRows>
									{experience.attributions.length > 0 && (
										<div>
											<H4>Attributions</H4>
											<Experience className='attributions'>
												{experience.attributions.map((attribution, index) => (
													<li key={contentToKey(attribution)}>{attribution}{index === experience.attributions.length - 1 ? '.' : ';'}</li>
												))}
											</Experience>
										</div>
									)}
									{experience.achievements.length > 0 && (
										<div>
											<H4>Achievements</H4>
											<Experience className='achievements'>
												{experience.achievements.map((achievement, index) => (
													<li key={contentToKey(achievement)}>{achievement}{index === experience.achievements.length - 1 ? '.' : ';'}</li>
												))}
											</Experience>
										</div>
									)}
									{experience.technologies.length > 0 && (
										<div>
											<H4>Technologies</H4>
											<Experience className='technologies'>
												{experience.technologies.map((technology, index) => (
													<li key={contentToKey(technology)}>{technology}{index === experience.technologies.length - 1 ? '.' : ';'}</li>
												))}
											</Experience>
										</div>
									)}
								</SpacedRows>
							</Fragment>
						);
					})}
				</Contents>
				{/* ------------------------------------------------------------------------ */}
				<Bottom>
					<PageNumber>
						<CurrentPage>
							{contents.experience.distribution.pre + i + 1}
							<TotalPages>/{getTotalPages(contents)}</TotalPages>
						</CurrentPage>
					</PageNumber>
				</Bottom>
				{/* ------------------------------------------------------------------------ */}
			</Page>
		</Paper>
	));
}

export default RelevantExperience
