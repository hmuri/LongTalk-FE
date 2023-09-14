import styled from "styled-components";
import MobileHeader from "../assets/image/LongTalkHeader.png";

export default function () {
  return <MobileHeaderBox />;
}

const MobileHeaderBox = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    width: 100%;
    height: 70px;
    background-size: cover;
    position: fixed;
    top: 46px;
    background-image: url(${MobileHeader});
  }
`;
