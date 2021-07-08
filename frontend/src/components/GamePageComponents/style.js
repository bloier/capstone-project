import styled from "styled-components/macro";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-: #ebf4ff;
  position: relative;
`;
export const PositionCircleAndTimer = styled.div`
  position: absolute;
  height: 60px;
  width: 60px;
  left: 55px;
  right: 0px;
  top: 110px;
  bottom: 0px;
`;
export const Circle = styled.div`
  height: 60px;
  width: 60px;
  border-style: solid;
  border-width: 5px;
  border-radius: 50%;
  border-color: #41b18e;
`;
export const PositionPoints = styled.h3`
  position: absolute;
  height: 30px;
  width: 140px;
  top: 95px;
  left: 175px;
  color: #3b1010;
  margin: 2rem;
  font-weight: 400;
  font-size: 17px;
`;
export const Points = styled.span`
  background: #eacccc;
  width: 51px;
  height: 30px;
  padding: 5px 12px;
  line-height: 1;
  border-radius: 1rem;
  color: #3b1010;
`;
export const WordList = styled.section`
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
export const Input = styled.input`
  height: 35px;
  padding: 6px;
  font-size: 16px;
`;
export const PositionCrossMark = styled.div`
  position: absolute;
  left: 180px;
  top: 2px;
`;
export const PositionMessage = styled.div`
  position: absolute;
  top: 48px;
  left: 2px;
  overflow: visible;
  font-style: italic;
`;
export const CrossMark = styled.div`
   {
    -moz-animation: cssAnimation 0s ease-in 2s forwards;
    -webkit-animation: cssAnimation 0s ease-in 2s forwards;
    -o-animation: cssAnimation 0s ease-in 2s forwards;
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
export const Message = styled(CrossMark)``;
export const ShowButton = styled.div`
  width: 87px;
  height: 39px;
`;
export const StyledButton = styled.button`
  border-radius: 50em;
  border: 2px solid #0069ff;
  padding: 8px 14px;
  background-color: #0069ff;
  color: white;
  font-size: 16px;
  position: absolute;
  top: 500px;
`;
export const PositionHelpText = styled.div`
  position: absolute;
  left: 40px;
  right: 0px;
  top: 550px;
  bottom: 0px;
`;
