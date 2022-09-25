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
	border-radius: 54px;
	background: ${neveColors.darkBlue};
`;

const Title = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	font-size: 1.5rem;
	color: ${neveColors.white};
`;

const DateRange = styled.p`
	font-size: 1rem;
	margin-left: 20px;
	color: ${neveColors.red};
`;


export { Resume };