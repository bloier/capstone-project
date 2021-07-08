import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export default function CardWordOfTheDay() {
  return (
    <Card>
      <CardWord>„dediziert“</CardWord>
      <Line />
      <Definition>
        Bedeutet „jemandem gewidmet“ oder „zugehörig“. Wird häufig mit dezidiert
        (entschieden) verwechselt.
      </Definition>
      <Line />
      <CardButton>
        <Link
          to="/wortdestages/beispiele"
          style={{ textDecoration: "none", color: "black" }}
        >
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardWord = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #004ab3;
  margin-top: 3px;
  margin-bottom: 3px;
`;
const Definition = styled.p`
  text-align: center;
  font-size: 15px;
`;
const CardButton = styled.button`
  border-radius: 50em;
  border: 2px solid #7094c7;
  padding: 5px;
`;
const Line = styled.div`
  border: 1px solid #7094c7;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 265px;
`;
