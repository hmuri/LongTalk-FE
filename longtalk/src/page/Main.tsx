import styled from "styled-components";
import Nav from "../components/Nav";
import Logo from "../assets/svg/Logo";
import LogoImg from "../assets/image/Logo.png";

export default function Main() {
  return (
    <Container>
      <Nav />
      <LogoBox />
      <SubmitBtn>영화 출품하기</SubmitBtn>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8a13a;
`;

const LogoBox = styled.div`
  width: 50%;
  height: 65%;
  background-size: cover;
  position: fixed;
  left: 146px;
  background-position: bottom;
  background-image: url(${LogoImg});
`;

const SubmitBtn = styled.div`
  position: fixed;
  bottom: 10%;
  left: calc(25% - 110px);
  display: flex;
  width: 50%;
  height: 25px;
  padding: 25px 110px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: 2px solid black;
  background-color: #e45914;
  font-family: Pretendard Variable;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
`;
