import React from "react";
import styled from "styled-components";
import { colors } from "./library/colors";
import { Resume } from "./components/Resume";
import { AboutMe } from "./components/AboutMe";

const App = () => {
  return (
    <Content>
      <Name>Michael Sayer</Name>
      <Title>software engineer</Title>
      <Resume />
      <AboutMe />
    </Content>
  );
};

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
  color: ${colors.text};
  margin: 0px 0px 0px 100px;

  @media (max-width: 768px) {
    margin: 0px 0px 0px 50px;
  }
`;

const Title = styled.h2`
  width: fit-content;
  font-size: 16px;
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 400;
  color: ${colors.text};
  margin: 0px 0px 0px 100px;

  @media (max-width: 768px) {
    margin: 0px 0px 0px 50px;
  }
`;

export default App;
