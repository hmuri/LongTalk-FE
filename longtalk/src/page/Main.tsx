import styled from "styled-components";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import LogoImg from "../assets/image/Logo.png";
import SubmitPage from "../components/SubmitPage";
import MainMotion from "../assets/MainMotion.gif";
import MobileMain from "../assets/MobileMain.gif";
import { useRecoilValue, useRecoilState } from "recoil";
import { menuActive, submitActiveState } from "../recoil";
import { useEffect } from "react";

export default function Main() {
  const isActive = useRecoilValue(menuActive);
  const [submitActive, setSubmitActive] = useRecoilState(submitActiveState);

  useEffect(() => {
    setSubmitActive(true);
  }, []);

  return (
    <Container isActive={isActive}>
      <MotionImg src={MainMotion} />
      <Nav />
      <MobileNav />
      <LogoBox />
      <MobileMotion src={MobileMain} />
      <SubmitPage />
    </Container>
  );
}

const Container = styled.div<{ isActive: boolean }>`
  width: 100%;
  background: radial-gradient(
    146.75% 123.36% at 55.76% 37.06%,
    #efeae1 37.67%,
    #f1ab85 100%
  );
`;

const MotionImg = styled.img`
  width: 100vw;
  height: 100%;
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
