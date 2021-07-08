import {
  Wrapper, PositionCircleAndTimer, Circle, PositionPoints, Points, WordList, Input, PositionCrossMark,
  PositionMessage, CrossMark, Message, ShowButton, StyledButton, PositionHelpText
} from "../components/GamePageComponents/style";
import Logo from "../components/HomePageComponents/Logo";
import useLetters from "../hooks/useLetters";
import useWords from "../hooks/useWords";
import usePoints from "../hooks/usePoints";
import { useEffect, useState } from "react";

export default function GamePage() {
  const { letters } = useLetters();
  const [word, setWord] = useState("");
  const { points, doesWordExist, allTypedInWords, addWordAndGetPoints } = useWords();
  const [error, setError] = useState(false);
  const [typedAlready, setTypedAlready] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const { reset } = usePoints();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (letters) {
      setWord(letters);
    }
  }, [letters]);

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
          addWordAndGetPoints(word);
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

  function hideButton() {
    setShow(false);
  }

  return (
    <Wrapper>
      <Logo />
      <PositionCircleAndTimer>
        <Circle id="circle" style={changeCircleColor()} />
        <div style={{ position: "absolute", bottom: "21px", left: "14px" }}>
          0:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </PositionCircleAndTimer>
      <PositionPoints>
        Punkte: <Points>{points}</Points>
      </PositionPoints>
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
      <ShowButton>
        {" "}
        {show && (
          <StyledButton
            onClick={() => {
              setIsRunning(true);
              reset();
              hideButton();
            }}
          >
            Spielen
          </StyledButton>
        )}
      </ShowButton>
      <PositionHelpText>
        <div style={{ fontSize: "38px" }}>&#x3F;</div>
        <p style={{ position: "absolute", bottom: "76px", left: "35px" }}>
          Tippe Wörter ein, die mit den oben angezeigten Buchstaben beginnen.
        </p>
      </PositionHelpText>
    </Wrapper>
  );
}
