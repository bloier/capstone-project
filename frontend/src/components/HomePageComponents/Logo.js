import styled from "styled-components/macro";
import mainLogo from "../../resources/images/mainLogo.png";

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoSmall src={mainLogo} alt="wordsguru" />
    </LogoWrapper>
  );
}

const LogoWrapper = styled.div``;
const LogoSmall = styled.img`
  height: 40%;
  width: 40%;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 35px;
  vertical-align: top;
`;
