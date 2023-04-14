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
						<Logo src="/github.svg"  alt="github" />
				</Link>
			</Links>
			<About>
				Currently living in Salt Lake City. I enjoy building things with people I love. I also enjoy <span><MusicLink href="https://www.michaeljsayer.com/" target="_blank" rel="noopener noreferrer"s>making music.</MusicLink></span>
			</About>
		</>
	);
};

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

const AboutMeHeader = styled.h2`
  font-size: 40px;
  line-height: 44px;
  color: ${colors.text};
  margin: 100px 0px 0px 180px;

  @media (max-width: 768px) {
    margin: 100px 0px 0px 150px;
  }

  @media (max-width: 480px) {
    width: 50%;
    margin: 100px 0px 0px 80px;
  }
`;

const About = styled.p`
  width: 20%;
  font-size: 14px;
  line-height: 20px;
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


export { AboutMe };