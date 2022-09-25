import React from 'react';
import styled, { keyframes } from 'styled-components';
import { neveColors } from './library/colors';
import { Resume } from './components/Resume';

const App = () => {
  return (
    <Main>
      <Content>
        <Name>Michael Sayer</Name>
        <Title>Software Engineer</Title>
        <Links>
          <Link href="https://www.linkedin.com/in/mikesayer/" target="_blank" rel="noopener noreferrer">
            <Logo src="/linkedin.svg" alt="linkedin" />
          </Link>
          <Link href="https://github.com/mPemba" target="_blank" rel="noopener noreferrer">
            <Logo src="/github.svg"  alt="github" />
          </Link>
        </Links>
        <Resume />
      </Content>
    </Main>
  );
}

const TitleAnimation = keyframes`
  0% {
    background-size: 100%;
  }
  80% {
    background-size: 650%;
  }
  100% {
    background-size: 650%;
  }
`;

const TitleAnimationReverse = keyframes`
  0% {
    background-size: 650%;
  }
  40% {
    background-size: 650%;
  }
  100% {
    background-size: 100%;
  }
`;

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${neveColors.darkBlue};
`;

const Content = styled.div`
  width: 72%;
  height: 72%;
  display: flex;
  flex-direction: column;
  background: ${neveColors.darkBlue};
  border-radius: 54px;
  padding: 44px;
`;

const Name = styled.h1`
  font-size: 4em;
  margin: 0px;
  background-color: ${neveColors.darkBlue};
  background-size: 100%;
  background-repeat: repeat;
  background-image: linear-gradient(
    45deg,
    ${neveColors.white} 16.666%, 
    ${neveColors.lightBlue} 16.666%, 
    ${neveColors.lightBlue} 33.333%, 
    ${neveColors.red} 33.333%, 
    ${neveColors.red} 50%, 
    ${neveColors.white} 50%, 
    ${neveColors.white} 66.666%, 
    ${neveColors.lightBlue} 66.666%, 
    ${neveColors.lightBlue} 83.333%, 
    ${neveColors.red} 83.333%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  animation: ${TitleAnimationReverse} 2.75s ease forwards;
  &:hover {
    animation: ${TitleAnimation} 1.5s ease-in forwards;
  }
`;

const Title = styled.h4`
  font-size: 1.5rem;
  margin: 10px 0px;
  color: ${neveColors.white};
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  width: 20%;
`;

const Link = styled.a`
    width: 25px;
    height: 25px;
    box-shadow: -2px -2px 6px 0px #2f3a52, 2px 2px 2px 0px #00000017;
    margin: 10px 0px;
    color: ${neveColors.white};
    transition: all 0.2s ease;
    transition-property: background, box-shadow;
    padding: 13px;
    border-radius: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
		cursor: pointer;
    text-decoration: none;
    underline: none;
    background: ${neveColors.darkBlue};

    &:hover {
        color: ${neveColors.lightBlue};
        box-shadow: -6px -6px 10px 0px #2f3a52, 6px 6px 10px 0px #00000017;
    }
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px 10px;
`;

export default App;
