import {
	bulletAchievements,
	bulletAttributions,
	bulletTechnologies,
	contents,
} from "./contents";
import {
	Background,
	Board,
	BoardBody,
	IndexedList,
	Page,
	Paper,
	Section,
	Experience,
	About,
} from "./styles/body.styled";
import {
	Abbr,
	Dim,
	Emphasis,
	H1,
	H3,
	H4,
	H5,
	Light,
	Mild,
	TagLine,
	Tiny,
	Unwrapable,
} from "./styles/etc.styled";
import {
	contentToKey,
	joinElements,
	monthName,
	splitLetterSpacing,
	yearsFromNow,
} from "./utils";

// =============================================================================

const sections = [
	<>
		<TagLine style={{ marginLeft: "15mm" }}>
			<Light>professional</Light> resume
		</TagLine>
		<H1 style={{ fontSize: "48.25mm", lineHeight: "0.630" }}>
			<Unwrapable>
				<Light>
					{splitLetterSpacing("lexa", [
						"-4mm",
						"-3mm",
						"-4.5mm",
						"-6.5mm",
					])}
				</Light>{" "}
				{splitLetterSpacing("blagus", [
					"-2.5mm",
					"-2.5mm",
					"-4.5mm",
					"-2mm",
					"-2.5mm",
					"0",
				])}
			</Unwrapable>
		</H1>
		<TagLine className="rightAligned" style={{ marginTop: "4mm" }}>
			<Unwrapable>
				senior <Light>web</Light> developer
			</Unwrapable>
			<br />
			<Unwrapable>
				frontend <Light>&amp;</Light> backend
				<br />
				<Mild>
					<Light>(</Light> fullstack <Light>)</Light>
				</Mild>
			</Unwrapable>
		</TagLine>
		<About>
			<Board className="smallBlock">
				<BoardBody>
					<ol>
						{contents.about.map((content, index) => (
							<li
								key={contentToKey(content)}
								style={{
									marginBottom: index === 3 ? "1em" : "0",
									textAlign: index > 3 ? "right" : "initial",
								}}
							>
								{content}
							</li>
						))}
					</ol>
				</BoardBody>
			</Board>
		</About>
	</>,
	<div>
		<Board className="">
			<H3 className="in-board">Technologies</H3>
			<BoardBody>
				<IndexedList>
					{contents.abilities.map((ability) => (
						<li key={contentToKey(ability)}>
							<div>{ability.name}</div>
							<div></div>
							<div>
								<b>
									<i>{yearsFromNow(ability.year)}</i>
								</b>{" "}
								<i>
									<Dim>
										<Tiny>
											{yearsFromNow(ability.year) === 1
												? "year"
												: "years"}
										</Tiny>
									</Dim>
								</i>
							</div>
						</li>
					))}
				</IndexedList>
			</BoardBody>
		</Board>
	</div>,
	<>
		<H3 className="in-section">Experience</H3>
		{contents.experience.data.map((experience) => (
			<Experience key={contentToKey(experience.company)}>
				<H4>{experience.company}</H4>
				<ul>
					{experience.clients.length > 0 && (
						<li>
							<Abbr>clients:</Abbr>{" "}
							<b>
								{joinElements(
									experience.clients.map((client) => (
										<Emphasis>{client}</Emphasis>
									)),
									undefined,
									""
								)}
							</b>
						</li>
					)}
					<li>
						<Abbr>
							<Tiny>title:</Tiny>
						</Abbr>{" "}
						<b>{experience.title}</b>
					</li>
					<li>
						<Abbr>
							<Tiny>
								<Light>period:</Light>
							</Tiny>
						</Abbr>{" "}
						{monthName(experience.period.start[0])}/
						{experience.period.start[1]} <Light>to</Light>{" "}
						{monthName(experience.period.end[0])}/
						{experience.period.end[1]}{" "}
						<Dim>({experience.period.amount})</Dim>
					</li>
					<li>
						<Abbr>
							<Tiny>
								<Light>sector:</Light>
							</Tiny>
						</Abbr>{" "}
						{experience.sector}
					</li>
					{experience.about && (
						<li>
							<Abbr>
								<Tiny>
									<Light>about:</Light>
								</Tiny>
							</Abbr>{" "}
							{experience.about}
						</li>
					)}
				</ul>
				{experience.attributions &&
					experience.attributions.length > 0 && (
						<>
							<H5>Attributions</H5>
							<ul>
								{experience.attributions.map(
									(attribution, index) => (
										<li key={contentToKey(attribution)}>
											{bulletAttributions} {attribution}
											{index ===
											experience.attributions.length - 1
												? "."
												: ";"}
										</li>
									)
								)}
							</ul>
						</>
					)}
				<H5>Achievements</H5>
				<ul>
					{experience.achievements.map((achievement, index) => (
						<li key={contentToKey(achievement)}>
							{bulletAchievements} {achievement}
							{index === experience.achievements.length - 1
								? "."
								: ";"}
						</li>
					))}
				</ul>
				<H5>Technologies</H5>
				<ul>
					{experience.technologies.map((technology, index) => (
						<li key={contentToKey(technology)}>
							{bulletTechnologies} {technology}
							{index === experience.technologies.length - 1
								? "."
								: ";"}
						</li>
					))}
				</ul>
			</Experience>
		))}
	</>,
];

// =============================================================================

const Body = () => {
	return (
		<>
			<Background>
				<Paper>
					<Page>
						{sections.map((section) => (
							<Section key={contentToKey(section)}>
								{section}
							</Section>
						))}
					</Page>
				</Paper>
			</Background>
		</>
	);
};

export default Body;
