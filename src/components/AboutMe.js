import React from "react";
import styled from "styled-components";
import { colors } from "../library/colors";
import saltLake from "../library/img/slc.jpeg";

const AboutMe = () => {
  return (
    <>
      <AboutMeHeader>About Me</AboutMeHeader>
      <Links>
        <Link
          href="https://www.linkedin.com/in/mikesayer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src="/linkedin.svg" alt="linkedin" />
        </Link>
        <Link
          href="https://github.com/mPemba"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Logo src="/github.svg" alt="github" />
        </Link>
      </Links>
      <About>
        Based in Salt Lake City, I&rsquo;m currently building web applications
        at Spoonful of Comfort. When I&rsquo;m not coding, you&rsquo;ll find me
        on the trails of City Creek Canyon or making music in my home studio.{" "}
      </About>
      <SaltLake src={saltLake} alt="Salt Lake City" />
    </>
  );
};

const Links = styled.div`
  display: flex;
  gap: 20px;
  width: 20%;
  margin: 10px 0px 0px 100px;
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

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 0px 10px;
`;

const AboutMeHeader = styled.h2`
  font-size: 28px;
  line-height: 44px;
  color: ${colors.text};
  margin: 100px 0px 0px 100px;
`;

const About = styled.p`
  width: 30%;
  font-size: 14px;
  line-height: 20px;
  margin: 25px 0px 200px 100px;
  font-family: "Hanken Grotesk", sans-serif;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

const SaltLake = styled.img`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export { AboutMe };
