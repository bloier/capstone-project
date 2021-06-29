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
      <Headline>Sprachspiele</Headline>
      <GameBoxOne>
        <button>
          <Link to="/games/wordflow" style={{ textDecoration: "none" }}>
            Wordflow spielen
          </Link>
        </button>
      </GameBoxOne>
      <GameBoxTwo>
        <button>
          <Link to="/games/xyz" style={{ textDecoration: "none" }}>
            Xyz spielen
          </Link>
        </button>
      </GameBoxTwo>
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
  font-size: 20px;
  margin-top: 14px;
  margin-bottom: 14px;
`;
const GameBoxOne = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  width: 345px;
  height: 110px;
  padding: 20px;
  background: #9ab3f5;
  color: #000;
  border-radius: 20px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const GameBoxTwo = styled(GameBoxOne)`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 15px;
  width: 345px;
  height: 110px;
  padding: 20px;
  background: #becef9;
  color: #000;
  border-radius: 20px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
