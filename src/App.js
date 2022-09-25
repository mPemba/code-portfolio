import React from 'react';
import styled from 'styled-components';
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

const Main = styled.div`
  width: 100%;
  height: 100%;
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
  padding: 44px;

  @media (max-width: 768px) {
    width: 90%;
    height: 90%;
  }

  @media (max-width: 480px) {
    padding: 22px;
  }
`;

const Name = styled.h1`
  font-size: 4em;
  margin: 0px;
  color: ${neveColors.white};s

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const Title = styled.h4`
  width: fit-content;
  font-size: 1.5rem;
  margin: 15px 0px;
  color: ${neveColors.white};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
