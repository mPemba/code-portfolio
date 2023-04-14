import React from 'react';
import styled from 'styled-components';
import { colors } from '../library/colors';
import { data } from '../library/info/resume';

const Resume = () => {
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