import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ArrowBottom from "../assets/icon/ArrowBottom.png";
import PCHeader from "../components/PCHeader";
import Notice1 from "../components/Notice1";
import MobileHeader from "../components/MobileHeader";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import TumblbugLogo from "../assets/image/Tumblbug.png";
import Badge from "../assets/image/Badge.png";
import Keyring from "../assets/image/Keyring.png";
import Book from "../assets/image/Book.png";

export default function Guideline() {
  return (
    <Container>
      <Nav />
      <PCHeader />
      <MobileHeader />
      <MobileNav />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <MenuContainer>
          <br />
          <ContentContainer>
            <Title>관람 유의사항</Title>
            <SubTitle>
              상상 그 이상을 꿈꾸며, 영화 커뮤니티 '상상마당 시네마'
            </SubTitle>
            <br />
            <div>
              <p>
                서울 홍대 부근에 위치한 상상마당 시네마는 독립예술영화의 메카로
                불리며 오랜 시간 좋은 영화를 발굴해왔습니다. 상영관 리뉴얼 후
                2022년 1월 재개관해 영화를 사랑하는 모든 이들이 자유롭게
                소통하는 ‘커뮤니티 시네마’로 거듭나 관객들에게 더욱 가깝게
                다가가고 있습니다. 상상마당 시네마는 독립영화계 활성화 지원을
                이어감과 동시에 다양한 영화 프로그램을 선보이며 기발한 상상력을
                담은 영화를 발굴해 나갈 예정입니다.
              </p>
              <br />

              <p>
                상상마당 시네마는 상상마당 지하 4층에 위치해 있습니다. 또한
                다음과 같은 사항을 미리 확인하여 유의해 주십시오.
              </p>
            </div>
            <br />
            <br />
            <GuideBox>
              <p>
                <b>
                  1. 상영관 내 음식물 반입 제한 (상영관 입장 시 음료만 반입
                  가능합니다)
                </b>
              </p>
              <p>
                <b>2. 정시 상영 시작 & 상영 시작 15분 후 입장 제한</b>
                <br />
                <div style={{ marginLeft: "18px" }}>
                  교환, 환불은 상영 20분전까지 영수증 지참해야하며, 이후에는
                  환불이 불가합니다.
                </div>
              </p>{" "}
              <p>
                {" "}
                <b>3. 상영 종료 후 상영관 내 점등 </b>
              </p>
            </GuideBox>

            <br />
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
  padding-top: 7%;
`;

const MenuContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  background-color: #afbfdb;
  padding-bottom: 50px;
  flex: 1
  z-index: 7;
  @media ${(props) => props.theme.mobile} {
    width: 100vw;
    

  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  padding: 8% 0;
  font-size: 20px;
  @media ${(props) => props.theme.mobile} {
    padding: 16% 0;
    font-size: 16px;
  }
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media ${(props) => props.theme.mobile} {
    font-size: 23px;
  }
`;

const GuideBox = styled.div`
  margin-left: 20px;
  font-size: 20px;
  @media ${(props) => props.theme.mobile} {
    margin-left: 0;
    font-size: 16px;
  }
`;

const SubTitle = styled.div`
  margin-top: 30px;
  color: var(--black, rgba(0, 0, 0, 0.98));
  font-family: Pretendard Variable;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
  }
`;
