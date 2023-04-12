import React from 'react';
import styled from 'styled-components';
import { colors } from '../library/colors';

const Resume = () => {
	return (
		<Container>
			<Column>
				<Item>
					<Company>PLURALSIGHT</Company>
					<DateRange>
						2021 - <Present>Present</Present>
					</DateRange>
					<Description>
						Currently building full stack applications for content production and tooling.
					</Description>
				</Item>
				<Item>
					<Company>A CLOUD GURU</Company>
					<DateRange>2020 - 2021</DateRange>
					<Description>
						Worked on the One Platform Assessments team and helped build the quiz and exam student experiences. Also helped build the B2B checkout experience.
					</Description>
				</Item>
				<Item>
					<Company>LINUX ACADEMY</Company>
					<DateRange>2019 - 2020</DateRange>
					<Description>
						Rebuilt an internal app called CloudCraft for content production. Also helped maintain the commuity engagement experience.
					</Description>
				</Item>
				<Item>
					<Company>FREEMAN</Company>
					<DateRange>2017 - 2019</DateRange>
					<Description>
						Running shows using our presentation software.
						Helped build an event data system for the company.
						Lead Engineer on Cumulus, an application for event management at hotels.
					</Description>
				</Item>
				<Item>
					<Company>KLOWD</Company>
					<DateRange>2015 - 2019</DateRange>
					<Description>
						Maintaining and building features for SlideKlowd, a presentation application in the browser.
					</Description>
				</Item>
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
	margin: 15px 0px 0px 0px;
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
	margin: 5px 0px;
	font-family: 'Hanken Grotesk', sans-serif;
`;

export { Resume };