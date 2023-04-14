import React from 'react';
import styled from 'styled-components';
import { colors } from './library/colors';
import { Resume } from './components/Resume';
import { AboutMe } from './components/AboutMe';

const App = () => {
  return (
    <Main>
      <Content>
        <Name>
          MICHAEL
          <br/>
          SAYER
        </Name>
        <Title>software engineer</Title>
        <Resume />
        <AboutMe />
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
  line-height: 44px;
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
  margin: 15px 0px 40px 100px;
  color: ${colors.text};

  @media (max-width: 480px) {
    width: 50%;
    margin: 15px 0px 40px 80px;
  }
`;

export default App;
