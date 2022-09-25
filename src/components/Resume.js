import React from 'react';
import styled from 'styled-components';
import { neveColors } from '../library/colors';

const Resume = () => {
	return (
		<Container>
			<Title>Pluralsight <DateRange>Jul 2021 - <Present>Present</Present></DateRange></Title>
			<Title>A Cloud Guru <DateRange>Jan 2020 - Jul 2021</DateRange></Title>
			<Title>Linux Academy <DateRange>Jul 2019 - Jan 2020</DateRange></Title>
			<Title>Klowd <DateRange>Mar 2015 - Jul 2019</DateRange></Title>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: ${neveColors.darkBlue};
`;

const Title = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	font-size: 1rem;
	color: ${neveColors.white};
	font-family: 'Roboto', sans-serif;
`;

const DateRange = styled.p`
	font-size: 1rem;
	margin: 15px 10px;
	color: ${neveColors.lightBlue};
	font-family: 'Roboto', sans-serif;

	@media (max-width: 768px) {
		margin: 10px 7px;
	}
`;

const Present = styled.span`
	font-size: 1rem;
	color: ${neveColors.red};
`;

export { Resume };