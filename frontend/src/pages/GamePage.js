import styled from "styled-components/macro";
import Logo from "../components/HomePageComponents/Logo";
import useLetters from "../hooks/useLetters";
import useWords from "../hooks/useWords";
import { useEffect, useState } from "react";

export default function GamePage() {
  const { letters } = useLetters();
  const [word, setWord] = useState("");
  const { doesWordExist, allTypedInWords, addWordToWordsList } = useWords();
  const [error, setError] = useState(false);
  const [typedAlready, setTypedAlready] = useState(false);

  useEffect(() => {
    if (letters) {
      setWord(letters);
    }
  }, [letters]);

  const handleSubmit = (event) => {
    setError(false);
    setTypedAlready(false);
    event.preventDefault();
    if (allTypedInWords.includes(word)) {
      setTypedAlready(true);
    } else if (!allTypedInWords.includes(word)) {
      doesWordExist(word).then((exists) => {
        if (exists) {
          addWordToWordsList(word);
        } else {
          setError(true);
        }
      });
    }
    setWord(letters);
  };

  return (
    <Wrapper>
      <Logo />
      <WordList>
        <ul style={{ listStyleType: "none" }}>
          {allTypedInWords.map((word, index) => (
            <li key={index}>{word}</li>
          ))}
        </ul>
      </WordList>
      <div style={{ position: "relative", height: "85px", width: "260px" }}>
        <form
          onSubmit={handleSubmit}
          style={{ position: "absolute", left: "38px" }}
        >
          <Input
            type="text"
            value={word}
            onChange={(event) => setWord(event.target.value)}
          />
        </form>
        <PositionCrossMark>
          {error && (
            <CrossMark style={{ fontSize: "25px" }}>&#10060;</CrossMark>
          )}
        </PositionCrossMark>
        <PositionMessage>
          {typedAlready && (
            <Message
              style={{ fontSize: "14px", color: "#000", overflow: "visible" }}
            >
              Dieses Wort hast du bereits eingegeben.
            </Message>
          )}
        </PositionMessage>
      </div>
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
  position: relative;
`;
const WordList = styled.section`
  margin-top: 120px;
  margin-bottom: 0px;
  width: 280px;
  height: 200px;
  padding: 5px;
  background-color: white;
  border: 1px solid gray;
  border-radius: 3px;
  box-shadow: 1px 1px 1px 0 lightgray inset;
  column-count: 2;
  column-width: 50%;
  column-fill: auto;
  overflow: auto;
`;
const Input = styled.input`
  height: 35px;
  padding: 6px;
  font-size: 16px;
`;
const PositionCrossMark = styled.div`
  position: absolute;
  left: 180px;
  right: 0px;
  top: 2px;
  bottom: 0px;
`;
const PositionMessage = styled.div`
  position: absolute;
  left: 2px;
  right: 0px;
  top: 48px;
  bottom: 0px;
  overflow: visible;
  font-style: italic;
`;
const CrossMark = styled.div`
   {
    -moz-animation: cssAnimation 0s ease-in 2s forwards;
    /* Firefox */
    -webkit-animation: cssAnimation 0s ease-in 2s forwards;
    /* Safari and Chrome */
    -o-animation: cssAnimation 0s ease-in 2s forwards;
    /* Opera */
    animation: cssAnimation 0s ease-in 2s forwards;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
  @keyframes cssAnimation {
    to {
      width: 0;
      height: 0;
      overflow: hidden;
    }
  }
  @-webkit-keyframes cssAnimation {
    to {
      width: 0;
      height: 0;
      visibility: hidden;
    }
  }
`;
const Message = styled(CrossMark)``;
