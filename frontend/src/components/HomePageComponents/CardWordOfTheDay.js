import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export default function CardWordOfTheDay() {
  return (
    <Card>
      <CardWord>dediziert</CardWord>
      <Line />
      <Definition>
        Bedeutet "jemandem gewidmet" oder "zugehörig". Wird häufig mit dezidiert
        (entschieden) verwechselt.
      </Definition>
      <Line />
      <CardButton>
        <Link to="/wortdestages/beispiele" style={{ textDecoration: "none" }}>
          Verwendungsbeispiele
        </Link>
      </CardButton>
    </Card>
  );
}

const Card = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 22px;
  padding: 20px;
  background: #eacccc;
  color: #000;
  border-radius: 20px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardWord = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Definition = styled.p`
  text-align: center;
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
