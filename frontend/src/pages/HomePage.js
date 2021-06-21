import styled from "styled-components/macro";
import CardWordOfTheDay from "../components/HomePageComponents/CardWordOfTheDay";
import Logo from "../components/HomePageComponents/Logo";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Wrapper>
      <Logo />
      <Headline>Wort des Tages</Headline>
      <CardWordOfTheDay />
      <GamesList>
        <Headline>Sprachspiele</Headline>
        <button><Link to="/games/wordflow">Wordflow spielen</Link></button>
      </GamesList>
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
  color: #000;
  font-size: 22px;
  margin-top: 14px;
  margin-bottom: 14px;
`;
const GamesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 45px;
  width: 345px;
  height: 300px;
`;

