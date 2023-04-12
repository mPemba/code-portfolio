import React from 'react';
import styled from 'styled-components';
import { colors } from './library/colors';
import { Resume } from './components/Resume';

const App = () => {
  return (
    <Main>
      <Content>
        <Name>MICHAEL</Name>
        <Name>SAYER</Name>
        <Title>software engineer</Title>
        <Resume />
        <AboutMeHeader>ABOUT ME</AboutMeHeader>
        <Links>
          <Link href="https://www.linkedin.com/in/mikesayer/" target="_blank" rel="noopener noreferrer">
            <Logo src="/linkedin.svg" alt="linkedin" />
          </Link>
          <Link href="https://github.com/mPemba" target="_blank" rel="noopener noreferrer">
            <Logo src="/github.svg"  alt="github" />
          </Link>
        </Links>
        <AboutMe>
          Currently living in Salt Lake City. I enjoy building things with people I love. I also enjoy <span><MusicLink href="https://www.michaeljsayer.com/" target="_blank" rel="noopener noreferrer"s>making music.</MusicLink></span>
        </AboutMe>
      </Content>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: fit-content;
  background: ${colors.background};
`;

const Content = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  background: ${colors.background};
  padding-top: 100px;
`;

const Name = styled.h1`
  font-size: 40px;
  margin: 0px 0px 0px 100px;
  color: ${colors.text};

  @media (max-width: 480px) {
    width: 50%;
    margin: 0px 0px 0px 80px;
  }
`;

const Title = styled.h4`
  width: fit-content;
  font-size: 16px;
  font-family: 'Hanken Grotesk', sans-serif;
  font-weight: 400;
  margin: 15px 0px 30px 100px;
  color: ${colors.text};

  @media (max-width: 480px) {
    width: 50%;
    margin: 15px 0px 30px 80px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  width: 20%;
  margin: 10px 0px 0px 180px;

  @media (max-width: 768px) {
    margin: 10px 0px 0px 150px;
  }

  @media (max-width: 480px) {
    width: 50%;
    margin: 10px 0px 0px 80px;
  }
`;

const Link = styled.a`
    width: 25px;
    height: 25px;
    margin: 10px 0px;
    color: ${colors.text};
    padding: 13px;
    border-radius: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
		cursor: pointer;
    text-decoration: none;
    underline: none;
    background: ${colors.background};

    &:hover {
				transform: scale(1.1);
    }
`;

const MusicLink = styled.a`
	cursor: pointer;
	color: ${colors.text};
	background: ${colors.background};
	font-family: 'Hanken Grotesk', sans-serif;

	&:hover {
			color: ${colors.blue};
	}
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px 10px;
`;

const AboutMeHeader = styled(Name)`
  margin: 100px 0px 0px 180px;

  @media (max-width: 768px) {
    margin: 100px 0px 0px 150px;
  }

  @media (max-width: 480px) {
    width: 50%;
    margin: 100px 0px 0px 80px;
  }
`;

const AboutMe = styled.p`
  width: 20%;
  font-size: 14px;
  margin: 50px 0px 200px 260px;
  font-family: 'Hanken Grotesk', sans-serif;

  @media (max-width: 768px) {
    margin: 50px 0px 200px 180px;
  }

	@media (max-width: 600px) {
		width: 35%;
    margin: 50px 0px 200px 150px;
  }

  @media (max-width: 480px) {
    width: 50%;
    margin: 50px 0px 200px 80px;
  }
`;

export default App;
