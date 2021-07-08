import styled from "styled-components/macro";
import CardWordOfTheDay from "../components/HomePageComponents/CardWordOfTheDay";
import GameBox from "../components/HomePageComponents/GameBox";
import Logo from "../components/HomePageComponents/Logo";

export default function HomePage() {
  return (
    <Wrapper>
      <Logo />
      <Headline>Wort des Tages</Headline>
      <CardWordOfTheDay />
      <Headline>Sprachspiele</Headline>
      <GameBox />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-: #ebf4ff;
`;
const Headline = styled.h2`
  font-weight: 400;
  font-size: 22px;
  font-family: Dancingscript, cursive;
  color: #000;
  margin-top: 14px;
  margin-bottom: 10px;
`;
