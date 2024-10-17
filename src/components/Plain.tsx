import { contents } from "../constants/contents"
import { Background, IndexedList, Page, Paper } from "../styles/plain.styled"
import { contentToKey, joinElements, monthAbbr, yearsFromNow } from "../utils/aux"
import { Dim } from "../styles/etc.styled"
import { Fragment } from "react/jsx-runtime"

// =============================================================================

const Plain = () => {
	return (
		<Background>
			<Paper>
				<Page>
					<h1>Professional resume: <b>Alexander Blagus</b></h1>
					<h2>senior web developer: <Dim>front end &amp; backend (fullstack)</Dim></h2>
					{/*
					<h3>Basic information</h3>
					<h4>Experience company</h4>
					<h5>Heading Five</h5>
					<h6>Heading Six</h6>
					*/}
					<p>
						{contents.about.map(content => (
							<li
								key={contentToKey(content)}
							>
								{content}
							</li>
						))}
					</p>
					<h3>Technologies</h3>
					<IndexedList>
						{contents.abilities.map(ability => (
							<li key={contentToKey(ability)}>
									<div>{ability.name}:</div>
									<div>&nbsp;</div>
									<div>
										<b><i>
											{yearsFromNow(ability.year)}
											{' '}
											{yearsFromNow(ability.year) === 1 ? 'year' : 'years'}
										</i></b>
									</div>
							</li>
						))}
					</IndexedList>
					</Page>
			</Paper>
			<Paper>
				<Page>
					<h3>Experience</h3>
					{contents.experience.data.map(experience => (
						<Fragment key={contentToKey(experience.company)}>
							<h4 className='spaced'>{experience.company}</h4>
							<ul>
								<li>
									<b>Period:</b>
									{' '}
									{monthAbbr(experience.period.start[0])}/{experience.period.start[1]}
									{' '}to{' '}
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
							</ul>
							{experience.attributions && experience.attributions.length > 0 && (<>
								<h5>Attributions</h5>
								<ul>
									{experience.attributions.map((attribution, index) => (
										<li key={contentToKey(attribution)}>{attribution}{index === experience.attributions.length - 1 ? '.' : ';'}</li>
									))}
								</ul>
							</>)}
							<h5>Achievements</h5>
							<ul>
								{experience.achievements.map((achievement, index) => (
									<li key={contentToKey(achievement)}>{achievement}{index === experience.achievements.length - 1 ? '.' : ';'}</li>
								))}
							</ul>
							<h5>Technologies</h5>
							<ul>
								{experience.technologies.map((technology, index) => (
									<li key={contentToKey(technology)}>{technology}{index === experience.technologies.length - 1 ? '.' : ';'}</li>
								))}
							</ul>
							
						</Fragment>
					))}
				</Page>
			</Paper>
		</Background>
	)
}

export default Plain
