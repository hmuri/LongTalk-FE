import styled from "styled-components";
import Nav from "../components/Nav";
import Logo from "../assets/svg/Logo";
import LogoImg from "../assets/image/Logo.png";
import LongImg from "../assets/image/Long.png";
import TalkImg from "../assets/image/talk.png";

export default function Main() {
  return (
    <Container>
      <Nav />
      <LogoBox />
      <MobileLongBox />
      <MobileTalkBox />
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
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

const MobileLongBox = styled.div`
  display: none;
  @media ${(props) => props.theme.tablet} {
    display: flex;
    width: 270px;
    height: 460px;
    background-size: cover;
    background-position: bottom;
    position: fixed;
    left: 10%;
    background-image: url(${LongImg});
  }
`;
const MobileTalkBox = styled.div`
  display: none;
  @media ${(props) => props.theme.tablet} {
    display: flex;
    width: 170px;
    height: 83px;
    background-size: cover;
    position: fixed;
    top: 55%;
    left: 50%;
    background-position: bottom;
    background-image: url(${TalkImg});
  }
`;

const SubmitBtn = styled.div`
  position: fixed;
  bottom: 15%;
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
  @media ${(props) => props.theme.tablet} {
    width: 160px;
    height: 3px;
    padding: 25px 70px;
    left: calc(25% - 55px);
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
  }
`;
