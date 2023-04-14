import React from 'react';
import styled from 'styled-components';
import { colors } from '../library/colors';

const Resume = () => {
	const data = [
		{
			company: 'PLURALSIGHT',
			dateRange: '2021 - Present',
			description: 'Currently building full stack applications for content production and tooling.',
		},
		{
			company: 'A CLOUD GURU',
			dateRange: '2020 - 2021',
			description:
				'Worked on the One Platform Assessments team and helped build the quiz and exam student experiences. Also helped build the B2B checkout experience.',
		},
		{
			company: 'LINUX ACADEMY',
			dateRange: '2019 - 2020',
			description:
				'Rebuilt an internal app called CloudCraft for content production. Also helped maintain the commuity engagement experience.',
		},
		{
			company: 'FREEMAN',
			dateRange: '2017 - 2019',
			description:
				'Running shows using our presentation software. Helped build an event data system for the company. Lead Engineer on Cumulus, an application for event management at hotels.',
		},
		{
			company: 'KLOWD',
			dateRange: '2015 - 2017',
			description: 'Maintaining and building features for SlideKlowd, a presentation application in the browser.',
		},
	];

	return (
		<Container>
			<Column>
				{data.map((item, index) => (
					<Item key={index}>
						<Company>{item.company}</Company>
						{item.company === 'PLURALSIGHT' ? (<DateRange>2021 - <Present>Present</Present></DateRange>) : (<DateRange>{item.dateRange}</DateRange>)}
						<Description>{item.description}</Description>
					</Item>
				))}
			</Column>
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-end;
	background: ${colors.background};
`;

const Column = styled.div`
	width: 55%;
	display: flex;
	flex-direction: column;
	
	@media (max-width: 768px) {
		width: 65%;
	}

	@media (max-width: 480px) {
		width: 75%;
	}
`;

const Item = styled.div`
	width: 40%;
	display: flex;
	flex-direction: column;
	margin-bottom: 29px;

	@media (max-width: 768px) {
    width: 55%;
  }

	@media (max-width: 480px) {
		width: 75%;
	}
`;

const Company = styled.span`
	font-size: 14px;
	color: ${colors.text};
	font-family: 'Hanken Grotesk', sans-serif;
	font-weight: 600;
`;

const DateRange = styled.p`
	font-size: 14px;
	margin: 8px 0px 8px 0px;
	color: ${colors.text};
	font-family: 'Hanken Grotesk', sans-serif;
`;

const Present = styled.span`
	font-size: 14px;
	color: ${colors.blue};
	font-family: 'Hanken Grotesk', sans-serif;
`;

const Description = styled.p`
	font-size: 14px;
	margin: 0px;
	font-family: 'Hanken Grotesk', sans-serif;
`;

export { Resume };