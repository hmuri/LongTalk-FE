import styled from "styled-components";
import PCHeaderImg from "../assets/image/PCHeader.png";
export default function PCHeader() {
  return (
    <>
      <PCHeaderBox />
      <HeaderBackground />
    </>
  );
}

const PCHeaderBox = styled.div`
  display: flex;
  width: 100%;
  height: 14%;
  background-size: cover;
  position: fixed;
  top: 30px;
  background-image: url(${PCHeaderImg});

  z-index: 8;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const HeaderBackground = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  background-color: #efeae1;
  width: 100%;
  height: calc(14% - 14px);
  z-index: 7;
  @media ${(props) => props.theme.mobile} {
    z-index: 1;
    height: 90px;
  }
`;
