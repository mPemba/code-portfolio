import styled, { keyframes } from 'styled-components';
import { neveColors } from './library/colors';
import { Resume } from './components/Resume';

function App() {
  return (
    <Main>
      <Content>
        <Name>Michael Sayer</Name>
        <Title>Software Engineer</Title>
        <Links>
          <Link href="https://www.linkedin.com/in/mikesayer/">linkedin</Link>
          <Link href="https://github.com/mPemba">github</Link>
        </Links>
        <Resume />
      </Content>
    </Main>
  );
}

// const breatheAnimation = keyframes`
// 0%{background-position:0% 50%}
// 50%{background-position:100% 50%}
// 100%{background-position:0% 50%}
// `;

// background-size: 300% 300%; 
// background-image: linear-gradient(
//   -45deg, 
//   rgba(154, 66, 77, 1) 0%,
//   rgba(114, 168, 224, 1) 25%, 
//   rgba(42, 57, 72, 1) 51%, 
//   rgba(199, 203, 205, 1) 100%
// );
// animation-name: ${breatheAnimation};
// animation-duration: 20s;
// animation-iteration-count: infinite;


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
  background: ${neveColors.white};
`;

const Content = styled.div`
  width: 72%;
  height: 72%;
  display: flex;
  flex-direction: column;
  background: ${neveColors.white};
  border-radius: 54px;
  padding: 44px;
  box-shadow: -10px -10px 30px 0px #ffffff, 10px 10px 30px 0px #1d0dca17;
`;

const Name = styled.h1`
  font-size: 6em;
  margin: 0px;

  background-color: ${neveColors.darkBlue};

  background-image: linear-gradient(
    45deg,
    ${neveColors.darkBlue} 16.666%, 
    ${neveColors.lightBlue} 16.666%, 
    ${neveColors.lightBlue} 33.333%, 
    ${neveColors.red} 33.333%, 
    ${neveColors.red} 50%, 
    ${neveColors.darkBlue} 50%, 
    ${neveColors.darkBlue} 66.666%, 
    ${neveColors.lightBlue} 66.666%, 
    ${neveColors.lightBlue} 83.333%, 
    ${neveColors.red} 83.333%);

  background-size: 100%;
  background-repeat: repeat;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 

  animation: ${TitleAnimationReverse} 0.75s ease forwards;
  &:hover {
    animation: ${TitleAnimation} 0.5s ease-in forwards;
  }
`;

const Title = styled.h4`
  font-size: 1.5rem;
  margin: 20px 0px;
  color: ${neveColors.darkGrey};
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

const Link = styled.a`
    width: 100px;
    height: auto;
    box-shadow: -10px -10px 30px 0px #ffffff, 10px 10px 30px 0px #1d0dca17;
    font-size: 1rem;
    font-weight: 600;
    margin: 20px 0px;
    color: ${neveColors.darkBlue};
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
    
    &:hover {
        color: ${neveColors.lightBlue};
        box-shadow: -15px -15px 30px 0px #ffffff, 15px 15px 30px 0px #1d0dca17;
    }
`;

export default App;
