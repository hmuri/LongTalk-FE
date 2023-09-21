import styled from "styled-components";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import LogoImg from "../assets/image/Logo.png";
import LongImg from "../assets/image/Long.png";
import TalkImg from "../assets/image/talk.png";
import SubmitPage from "../components/SubmitPage";
import MainMotion from "../assets/MainMotion.gif";
import MobileMain from "../assets/MobileMain.gif";
import { useRecoilValue, useRecoilState } from "recoil";
import { menuActive, submitActiveState } from "../recoil";
import { useState } from "react";

export default function Main() {
  const isActive = useRecoilValue(menuActive);
  const [submitActive, setSubmitActive] = useRecoilState(submitActiveState);
  const handleSubmitPage = () => {
    console.log(submitActive);
    setSubmitActive(true);
  };

  return (
    <Container isActive={isActive}>
      <MotionImg src={MainMotion} />
      <Nav />
      <MobileNav />
      <LogoBox />
      <MobileMotion src={MobileMain} />
      <SubmitBtn isActive={isActive} onClick={handleSubmitPage}>
        영화 출품하기
      </SubmitBtn>
      <SubmitPage />
    </Container>
  );
}

const Container = styled.div<{ isActive: boolean }>`
  width: 100%;
  height: 100%;
  background: radial-gradient(
    146.75% 123.36% at 55.76% 37.06%,
    #efeae1 37.67%,
    #f1ab85 100%
  );
`;

const MotionImg = styled.img`
  width: 100vw;
  height: 90%;
  position: fixed;
  bottom: 0;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const MobileMotion = styled.img`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
  }
`;

const LogoBox = styled.div`
  width: 50%;
  height: 65%;
  background-size: cover;
  position: fixed;
  left: 146px;
  background-position: bottom;
  background-image: url(${LogoImg});
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const MobileLongBox = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    width: 270px;
    height: 53%;
    background-size: cover;
    background-position: bottom;
    position: fixed;
    left: 10%;
    background-image: url(${LongImg});
  }
`;
const MobileTalkBox = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    width: 169px;
    height: 83px;
    background-size: cover;
    position: fixed;
    top: 55%;
    left: 50%;
    background-position: bottom;
    background-image: url(${TalkImg});
  }
`;

const SubmitBtn = styled.div<{ isActive: boolean }>`
  position: fixed;
  bottom: 15%;
  left: calc(25% - 110px);
  display: flex;
  width: 50%;
  height: 25px;
  padding: 25px 110px;
  justify-content: center;
  color: white;
  align-items: center;
  border-radius: 40px;
  border: 2px solid white;
  background-color: #f1ab85;
  font-family: Pretendard Variable;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  z-index: 6;
  @media ${(props) => props.theme.mobile} {
    width: 160px;
    height: 3px;
    padding: 25px 70px;
    left: calc(25% - 55px);
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    background-color: ${(props) => (props.isActive ? "#bf8869" : "#F1AB85")};
    border: 2px solid ${(props) => (props.isActive ? "#e9e9e9" : "white")};
  }
`;
