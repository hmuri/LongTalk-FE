import styled from "styled-components";
import MobileHeader from "../assets/icon/LongTalkHeader.png";

export default function () {
  return <MobileHeaderBox />;
}

const MobileHeaderBox = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-size: cover;
  position: fixed;
  top: 46px;
  background-image: url(${MobileHeader});
`;
