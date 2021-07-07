import styled from "styled-components/macro";
import Logo from "../components/HomePageComponents/Logo";
import useLetters from "../hooks/useLetters";
import useWords from "../hooks/useWords";
import usePoints from "../hooks/usePoints";
import { useEffect, useState } from "react";

export default function GamePage() {
  const { letters } = useLetters();
  const [word, setWord] = useState("");
  const { doesWordExist, allTypedInWords, addWordToWordsList } = useWords();
  const [error, setError] = useState(false);
  const [typedAlready, setTypedAlready] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const { points, getPoints, reset } = usePoints();


  useEffect(() => {
    if (letters) {
      setWord(letters);
      getPoints()
    }
  }, [letters, points]);

  /** Click on button "Spielen" sets variable "isRunning" to true and activates timer with 30 seconds countdown **/
  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);


  /** The "handleSubmit" is effectively my game round.
   * After pressing "Enter" the typed in word is checked:
   * Was it already entered before? If not, API is checked
   * --> if word exists and the timer is still running, word then gets added to list,
   * points are increased and input field resets back to letters for the next word **/
  const handleSubmit = (event) => {
    setError(false);
    setTypedAlready(false);
    event.preventDefault();
    if (allTypedInWords.includes(word)) {
      setTypedAlready(true);
    } else if (!allTypedInWords.includes(word)) {
      doesWordExist(word).then((exists) => {
        if (exists && seconds > 0) {
          addWordToWordsList(word);
          getPoints();
        } else {
          setError(true);
        }
      });
    }
    setWord(letters);
  };

  function changeCircleColor() {
    if (seconds < 20) {
      document.getElementById("circle").style.borderColor = "#F0A821";
    }
    if (seconds < 6) {
      document.getElementById("circle").style.borderColor = "#FF1C02";
    }
  }

  return (
    <Wrapper>
      <Logo />
      <PositionCircleAndTimer>
        <Circle id="circle" style={changeCircleColor()}/>
        <div style={{ position: "absolute", bottom: "21px", left: "14px" }}>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </PositionCircleAndTimer>
      <PositionPoints>Punkte: <Points>{points}</Points></PositionPoints>
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
          id="wordform"
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
      <button onClick={() => (setIsRunning(true) && reset() && getPoints())}>Spielen</button>
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
const PositionCircleAndTimer = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  left: 55px;
  right: 0px;
  top: 110px;
  bottom: 0px;
`;
const Circle = styled.div`
  height: 60px;
  width: 60px;
  border-style: solid;
  border-width: 5px;
  border-radius: 50%;
  border-color: #41b18e;
`;
const PositionPoints = styled.h3`
  position: absolute;
  height: 30px;
  width: 140px;
  left: 175px;
  right: 0px;
  top: 95px;
  bottom: 0px;
  color: #3b1010;
  margin: 2rem;
  font-weight: 400;
  font-size: 17px;
`
const Points = styled.span`
  background: #ffe5cf;
  width: 51px;
  height: 30px;
  padding: 5px 12px;
  line-height: 1;
  -webkit-border-radius: 1rem;
  -moz-border-radius: 1rem;
  border-radius: 1rem;
  color: #3b1010;
`
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
