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
  height: 100%;
  width: 100%;
`;
const LogoSmall = styled.img`
  height: 40%;
  width: 40%;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 40px;
  text-align: left;
  vertical-align: top;
`;