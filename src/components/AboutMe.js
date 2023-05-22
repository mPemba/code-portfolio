import React from 'react';
import styled from 'styled-components';
import { colors } from '../library/colors';

const AboutMe = () => {
  return (
    <>
      <AboutMeHeader>ABOUT ME</AboutMeHeader>
      <Links>
        <Link href="https://www.linkedin.com/in/mikesayer/" target="_blank" rel="noopener noreferrer">
          <Logo src="/linkedin.svg" alt="linkedin" />
        </Link>
        <Link href="https://github.com/mPemba" target="_blank" rel="noopener noreferrer">
          <Logo src="/github.svg" alt="github" />
        </Link>
      </Links>
      <About>
        Residing in Salt Lake City, I find immense joy in collaborative creation with like-minded individuals.
        Building meaningful projects alongside cherished colleagues is a fulfilling endeavor that fuels my passion.
        Outside of the software realm, I indulge in the art of
        <span>
          <MusicLink href="https://www.michaeljsayer.com/" target="_blank" rel="noopener noreferrer">
            making music
          </MusicLink>
        </span>, which brings me great delight and serves as an outlet for my creativity.
      </About>
    </>
  );
};

const Links = styled.div`
  display: flex;
  gap: 20px;
  width: 20%;
  margin: 10px 0px 0px 100px;

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
  margin-left: 4px;

	&:hover {
			color: ${colors.blue};
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

  @media (max-width: 480px) {
    width: 50%;
    margin: 100px 0px 0px 80px;
  }
`;

const About = styled.p`
  width: 30%;
  font-size: 14px;
  line-height: 20px;
  margin: 25px 0px 200px 100px;
  font-family: 'Hanken Grotesk', sans-serif;

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 50%;
    margin: 25px 0px 200px 80px;
  }
`;


export { AboutMe };