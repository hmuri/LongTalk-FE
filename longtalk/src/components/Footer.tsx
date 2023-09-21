import styled from "styled-components";
import FoooterImg from "../assets/image/Footer.png";

export default function Footer() {
  return <Container />;
}

const Container = styled.div`
  position: relative;
  margin-bottom: 0;
  margin-top: auto;
  display: flex;
  width: 1800;
  height: 200px;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
  background-image: url(${FoooterImg});
  z-index: 9;
  background-size: cover;
`;
