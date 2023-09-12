import styled from "styled-components";
import MobileHeader from "../assets/icon/MobileHeader.png";

export default function () {
  return <MobileHeaderBox />;
}

const MobileHeaderBox = styled.div`
  display: flex;
  width: 100vw;
  height: 68px;
  background-size: cover;
  position: fixed;
  top: 46px;
  background-image: url(${MobileHeader});
`;
