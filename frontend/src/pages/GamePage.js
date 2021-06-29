import styled from "styled-components/macro";
import Logo from "../components/HomePageComponents/Logo";
import useLetters from "../hooks/useLetters";
import { useEffect, useState } from "react";
import useWords from "../hooks/useWords";

export default function GamePage() {
  const { letters } = useLetters();
  const [word, setWord] = useState("");
  const { allTypedInWords, addWordToWordsList } = useWords();

  useEffect(() => {
    if (letters) {
      setWord(letters);
    }
  }, [letters]);

  const handleSubmit = (event) => {
    event.preventDefault();
    addWordToWordsList(word);
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
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={word}
          onChange={(event) => setWord(event.target.value)}
        />
      </form>
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
  column-width:50%;
  column-fill: auto;
  overflow: auto;
`;
const Input = styled.input`
height: 35px;
padding: 6px;
font-size: 16px;
`