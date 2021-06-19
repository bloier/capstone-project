import styled from "styled-components/macro";

export default function WordOfTheDay() {
    return (
        <Card>
            <CardTitle cardtitle>
                Wort des Tages
                <Line />
            </CardTitle>
            <CardWord>
                dediziert
                <Line />
            </CardWord>
            <p>
                Bedeutet "jemandem gewidmet" oder "zugehörig". Wird häufig mit dezidiert
                (entschieden) verwechselt.
            </p>
        </Card>
    );
}

const Card = styled.div`
  margin-left: 13px;
  margin-right: 13px;
  padding: 25px;
  background: #C9C9C9;
  color: #000;
  border-radius: 20px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
`;
const CardTitle = styled.h2`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  align-items: center;
`;
const CardWord = styled.h3`
  font-size: 24px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 15px;
`;
const Line = styled.div`
  border: 1px solid #7094c7;
  margin-top: 8px;
  width: 265px;
`;