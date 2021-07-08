import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import wordcloud from "../../resources/images/wordcloud.png";
import books from "../../resources/images/books.png";

export default function GameBox() {
  return (
    <div>
      <GameBoxOne>
        <WordcloudImage src={wordcloud} alt="wortwolke" />
        <StyledButtonOne>
          <Link
            to="/games/wordflow"
            style={{ textDecoration: "none", color: "black" }}
          >
            Wordflow spielen
          </Link>
        </StyledButtonOne>
        <DescriptionOne>Wortgewandtheit verbessern</DescriptionOne>
      </GameBoxOne>
      <GameBoxTwo>
        <BooksImage src={books} alt="wortwolke" />
        <StyledButtonTwo>
          <Link
            to="/games/xyz"
            style={{ textDecoration: "none", color: "#202020" }}
          >
            Redig spielen
          </Link>
        </StyledButtonTwo>
        <DescriptionTwo>Vokabeltrainer</DescriptionTwo>
      </GameBoxTwo>
    </div>
  );
}

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
  position: relative;
`;
const WordcloudImage = styled.img`
  position: absolute;
  top: 22px;
  left: 16px;
  right: 50px;
`;
const DescriptionOne = styled.p`
  position: absolute;
  top: 25px;
  left: 137px;
  font-size: 15px;
`;
const StyledButtonOne = styled.button`
  position: relative;
  top: 32px;
  left: 150px;
  border-radius: 50em;
  border: 2px solid #5e5eff;
  padding: 7px;
`;
const GameBoxTwo = styled(GameBoxOne)`
  margin-top: 15px;
  background: #becef9;
`;
const BooksImage = styled(WordcloudImage)`
  width: 103px;
  height: 65px;
  bottom: 25px;
`;
const DescriptionTwo = styled(DescriptionOne)`
  left: 180px;
  color: #202020;
`;
const StyledButtonTwo = styled(StyledButtonOne)`
  left: 160px;
  border: 2px solid #8585ff;
  color: #3a3b3c;
`;
