import React from "react";
import styled from "styled-components";
import { colors } from "../library/colors";
import { data } from "../library/info/resume";

const Resume = () => {
  return (
    <Column>
      {data.map((item, index) => (
        <Item key={index}>
          <Company>{item.company}</Company>
          {item.company === "Spoonful of Comfort" ? (
            <DateRange>
              2023 - <Present>Present</Present>
            </DateRange>
          ) : (
            <DateRange>{item.dateRange}</DateRange>
          )}
          <Description>{item.description}</Description>
        </Item>
      ))}
    </Column>
  );
};

const Column = styled.div`
  width: fit-content;
  height: 100%;
  display: flex;
  margin: 30px 0px 0px 100px;
  flex-direction: column;
  background: ${colors.background};

  @media (max-width: 768px) {
    width: 77%;
  }
`;

const Item = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-bottom: 29px;
`;

const Company = styled.span`
  font-size: 14px;
  color: ${colors.text};
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 500;
`;

const DateRange = styled.p`
  font-size: 12px;
  margin: 6px 0;
  color: ${colors.text};
  font-family: "Hanken Grotesk", sans-serif;
  font-weight: 300;
`;

const Present = styled.span`
  font-size: 14px;
  color: ${colors.blue};
  font-family: "Hanken Grotesk", sans-serif;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 0px;
  font-family: "Hanken Grotesk", sans-serif;
`;

export { Resume };
