import styled from "styled-components/macro";
import CardWordOfTheDay from "../components/HomePageComponents/CardWordOfTheDay";
import Logo from "../components/HomePageComponents/Logo";

export default function HomePage() {
    return (
        <Wrapper>
            <Logo />
            <CardWordOfTheDay />
        </Wrapper>
    );
}

const Wrapper = styled.body`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-: #ebf4ff;
`;