import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export default function CardWordOfTheDay() {
  return (
    <Card>
      <CardWord>
        dediziert
        <Line />
      </CardWord>
      <p>
        Bedeutet "jemandem gewidmet" oder "zugehörig". Wird häufig mit dezidiert
        (entschieden) verwechselt.
        <Line />
      </p>
      <CardButton component={Link} to={"/search"}>
        Verwendungsbeispiele
      </CardButton>
    </Card>
  );
}

const Card = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  padding: 20px;
  background: #c9c9c9;
  color: #000;
  border-radius: 20px;
  font-family: sans-serif;
`;
const CardWord = styled.h3`
  font-size: 24px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const CardButton = styled.button`
  margin: auto;
  width: 50%;
`;
const Line = styled.div`
  border: 1px solid #7094c7;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 265px;
`;
