import styled from "styled-components/macro";
import mainLogo from "../../resources/mainLogo.png";

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoSmall src={mainLogo} alt="wordsguru" />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;
const LogoSmall = styled.img`
  height: 40%;
  width: 40%;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 35px;
  text-align: left;
  vertical-align: top;
  horizontal-align: left;
`;
