import styled from "styled-components";
import PCHeaderImg from "../assets/image/PCHeader.png";
export default function PCHeader() {
  return <PCHeaderBox />;
}

const PCHeaderBox = styled.div`
  display: flex;
  width: 100%;
  height: 14%;
  background-size: cover;
  position: fixed;
  top: 30px;
  background-image: url(${PCHeaderImg});
  z-index: 5;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
