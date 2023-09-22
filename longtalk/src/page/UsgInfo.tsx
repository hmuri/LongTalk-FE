import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ArrowBottom from "../assets/icon/ArrowBottom.png";
import PCHeader from "../components/PCHeader";
import Notice1 from "../components/Notice1";
import MobileHeader from "../components/MobileHeader";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import KakaoMap from "../KaKaoMap";

export default function UsgInfo() {
  return (
    <Container>
      <Nav />
      <PCHeader />
      <MobileHeader />
      <MobileNav />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <MenuTitle>이용안내</MenuTitle>
        <MenuContainer>
          <ContentContainer>
            <Title>행사공간</Title>
            <div>
              <p style={{ margin: "20px 0px 6px 0px" }}>
                KT&G 상상마당 홍대 오시는 길
              </p>
              <p style={{ margin: "6px 0px" }}>
                (04042) 서울시 마포구 어울마당로 65 (서교동) KT&G 상상마당
              </p>
              <p style={{ margin: "6px 0px" }}>02-330-6200</p>
              <p style={{ margin: "6px 0px" }}>planet@sangsangmadang.com</p>
            </div>
            <KakaoMap />
          </ContentContainer>
          <ContentContainer>
            <Title>교통수단</Title>
            <div>
              <p style={{ margin: "20px 0px 6px 0px" }}>
                지하철: 2호선 홍대입구역 9번 출구, 합정역 3번 출구 / 6호선
                상수역 1번 출구
              </p>
              <p style={{ margin: "6px 0px" }}>
                버스: 마포08번, 마포16번, 7011번
              </p>
              <p style={{ margin: "6px 0px" }}>
                자가용: 서울시 마포구 어울마당로 65(서교동 367-5)로 주소검색
                이용 부탁드립니다.
              </p>
            </div>
          </ContentContainer>
          <ContentContainer style={{ border: "none" }}>
            <Title>주차안내</Title>
            <div>
              <p style={{ margin: "6px 0px" }}>
                상상마당에는 별도의 주차공간이 없습니다. 가급적 대중교통수단을
                이용하시기 바랍니다.
              </p>
            </div>
          </ContentContainer>
        </MenuContainer>
        <Footer />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #efeae1;
`;

const MenuTitle = styled.div`
  display: flex;
  width: 137px;
  height: 29px;
  position: relative;
  margin-top: 15%;
  left: 15%;
  padding: 7px 1%;
  justify-content: center;
  align-items: center;
  border: solid 1px black;
  border-radius: 16px 16px 0px 0px;
  border-bottom: none;
  background-color: #afbfdb;
  @media ${(props) => props.theme.mobile} {
    top: 8%;
    width: 120px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  top: 0%;
  border: 1px solid black;
  background-color: #afbfdb;
  padding-bottom: 50px;
  flex: 1
  z-index: 7;
  @media ${(props) => props.theme.mobile} {
    top: 7.5%;
    width: 100vw;

  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  padding: 4% 0;
  border-bottom: 1px solid black;
  @media ${(props) => props.theme.mobile} {
    padding: 8% 0;
  }
`;

const Title = styled.div`
  display: flex;
  font-family: Pretendard Variable;
  font-size: 27px;
  font-style: normal;
  font-weight: 600;
  line-height: 42px;
  @media ${(props) => props.theme.mobile} {
    font-size: 23px;
  }
`;

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  margin-top: 10px;
  background-color: orange;
`;
