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
					<p>
						{contents.about.map(content => (
							<li
								key={contentToKey(content)}
							>
								{content}
							</li>
						))}
					</p>
				</Page>
			</Paper>
			<Paper>
				<Page>
					<h3>Cover letter<br /></h3>
					<p><i>Hi!</i></p>
					<p>I am 45 years old and I am located in São Paulo - Brazil.</p>
					<p>I have more than 20 years of experience developing web applications (frontend and backend) for several different companies, both large enterprises as well as medium and small sized companies like web agencies, startups, consulting firms and others.</p>
					<p>I designed, coded, deployed and maintained web software for any kind of application you can imagine: production line control with large monitoring dashboards, financial services payment gateways and checkout, complex personal medical records editor, call center management data, countless CMS systems and websites and many other solutions.</p>
					<p>I’m passionate about creating impactful, efficient, and user-friendly software solutions. From the paper sketches with clients, coding the frontend and backend software, integrating the systems around it, modeling data in the database, configuring and maintaining the server infrastructure, I bring a strong technical foundation, an eye for design, and a hands-on approach to problem-solving in every project I undertake.</p>
					<p>I'm excited to bring my skills to a team where I can contribute meaningfully and continue learning.</p>
					<p><i>
						Thank you for considering me for your team!<br />
						I look forward to the opportunity to work together!
					</i></p>
				</Page>
			</Paper>
			<Paper>
				<Page>
					<h3>Technologies<br /></h3>
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
					<h3>Experience<br /></h3>
					{contents.experience.data.map(experience => (
						<Fragment key={contentToKey(experience.company)}>
							<h4 className='spaced'>{experience.company}<br /></h4>
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
								<h5>Attributions<br /></h5>
								<ul>
									{experience.attributions.map((attribution, index) => (
										<li key={contentToKey(attribution)}>{attribution}{index === experience.attributions.length - 1 ? '.' : ';'}</li>
									))}
								</ul>
							</>)}
							<h5>Achievements<br /></h5>
							<ul>
								{experience.achievements.map((achievement, index) => (
									<li key={contentToKey(achievement)}>{achievement}{index === experience.achievements.length - 1 ? '.' : ';'}</li>
								))}
							</ul>
							<h5>Technologies<br /></h5>
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
