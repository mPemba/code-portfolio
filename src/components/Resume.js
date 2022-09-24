import styled from 'styled-components';
import { neveColors } from '../library/colors';

const Resume = () => {
    return (
        <Container>
            <Title>Pluralsight <DateRange>Jul 2021 - Present</DateRange></Title>
            <Title>A Cloud Guru <DateRange>Jan 2020 - Jul 2021</DateRange></Title>
            <Title>Linux Academy <DateRange>Jul 2019 - Jan 2020</DateRange></Title>
            <Title>Freeman (Klowd) <DateRange>Jan 2016 - Jul 2019</DateRange></Title>
        </Container>
    );
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	box-shadow: -10px -10px 30px 0px #ffffff, 10px 10px 30px 0px #1d0dca17;
	border-radius: 54px;
	padding: 44px;
	margin-top: 44px;
	background: ${neveColors.white};
`;

const Title = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	font-size: 1.5rem;
	margin: 20px 0px;
	color: ${neveColors.darkBlue};
`;

const DateRange = styled.p`
	font-size: 1rem;
	margin: 0px 0px 0px 20px;
	color: ${neveColors.red};
`;


export { Resume };