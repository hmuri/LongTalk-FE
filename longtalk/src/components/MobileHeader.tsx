import styled from "styled-components";
import MobileHeader from "../assets/image/LongTalkHeader.png";
import { Link } from "react-router-dom";

export default function () {
  return <MobileHeaderBox to="/" />;
}

const MobileHeaderBox = styled(Link)`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    width: 100%;
    height: 70px;
    background-size: cover;
    position: fixed;
    top: 46px;
    background-image: url(${MobileHeader});
    z-index: 5;
  }
`;
