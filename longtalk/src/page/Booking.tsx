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

export default function Booking() {
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
            <Title>텀블벅</Title>
            <br />
            <div>
              <p>
                영화제 ‘롱톡(LongTalk)’을 개최하는 텀블벅 프로젝트는 팀 르포가
                제작하는 한 단편영화에서 시작되었습니다. 가벼운 주제의 짧은
                영상들을 반복적으로 소비하는 행동을 통해, 보다 쉽게 사회의
                본질적인 측면을 외면하고 있는 문제를 인식한 데서 시작된
                것입니다. 단편영화들을 통해 긴 대화를 나눌 수 있는 기회를
                만들고자 함이 이 프로젝트를 시작한 핵심적 목표이자 기획
                의도입니다.
              </p>
              <br />

              <p>
                본 영화제의 예매를 텀블벅 프로젝트를 통해 받고 있습니다. 이에
                따라 아래 링크를 통해 섹션을 예매하고 굿즈를 선택하실 수
                있습니다.
              </p>
              <br />
              <br />
              <img src={TumblbugLogo} />
              <br />
              <br />
              <br />
              <TumblbugBtn>텀블벅 바로가기</TumblbugBtn>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Title>예매 안내</Title>
            <br />
            <div>
              <p>
                본 영화제는 네 섹션으로 이루어져 있으며 양일에 걸쳐 진행됩니다.
              </p>
              <br />
              <p>
                <b>[발단 에디션]</b>을 선택하실 경우, 섹션1을 관람하실 수 있으며
                키링이나 뱃지 중 랜덤 1종을 증정합니다.
              </p>{" "}
              <p>
                {" "}
                <b>[위기 에디션]</b>을 선택하실 경우, 섹션2를 관람하실 수 있으며
                키링이나 뱃지 중 랜덤 1종을 증정합니다.{" "}
              </p>
              <p>
                <b>[절정 에디션]</b>을 선택하실 경우, 섹션3을 관람하실 수 있으며
                키링이나 뱃지 중 랜덤 1종을 증정합니다.{" "}
              </p>
              <p>
                <b>[결말 에디션]</b>을 선택하실 경우, 섹션4를 관람하실 수 있으며
                키링이나 뱃지 중 랜덤 1종을 증정합니다.{" "}
              </p>
              <p>
                <b>[리미티드 에디션]</b>을 선택하실 경우, 섹션 하나를 선택하여
                관람하실 수 있으며 키링이나 뱃지 중 랜덤 1종, 프로그램북을
                증정합니다.
              </p>
              <br />
              <br />
            </div>
            <Title>굿즈</Title>
            <br />
            <br />
            <img src={Keyring} />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <ImageBox />
              <BookImgBox />
            </div>
            <br />
            <div>
              <p>
                <b>키링: </b>영화제 ‘롱톡(LongTalk)’의 모티프가 된 릴레이소설을
                '퍼즐'로 하여 풀어낸 디자인입니다. 이야기는 발단과 전개, 위기와
                절정, 그리고 마지막 결말까지 모여 완성되듯이 영화제
                ‘롱톡(LongTalk)’도 네 섹션에 이르러 이야기가 합쳐지고 더욱
                강력한 메시지가 됩니다. 네 조각의 퍼즐로 빗댄 섹션들이 합쳐져
                있는 모양이 키링으로 탄생했습니다.
              </p>{" "}
              <br />
              <p>
                {" "}
                <b>뱃지: </b>영화제 ‘롱톡(LongTalk)’의 로고를 담아낸 디자인이
                들어간 뱃지입니다. 위의 키링과 같이 영화제 ‘롱톡(LongTalk)’의
                정체성을 담고 있습니다.{" "}
              </p>
              <br />
              <p>
                <b>프로그램북: </b>영화제 ‘롱톡(LongTalk)’의 제작 과정기를 담은
                프로그램북입니다. 영화제 ‘롱톡(LongTalk)’의 자세한
                기획의도에서부터 어떤 과정으로 프로그램을 구성하고
                진행되어왔는지 보여줍니다. 더불어, 어떤 의도와 영감으로부터
                포스터, 모션 그래픽, 사이트에 이르는 많은 작업물들이
                디자인되었는지 공개합니다. 마지막 페이지에 있는 후원자 명단에
                펀딩해주신 소중한 분들의 성함(닉네임)을 기입할 예정입니다.{" "}
              </p>
              <br />
              <br />
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
  @media ${(props) => props.theme.mobile} {
    padding: 16% 0;
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

const TumblbugBtn = styled.div`
  display: flex;
  width: 200px;
  height: 40px;
  padding: 9px 33px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 40px;
  border: 1px solid var(--black, rgba(0, 0, 0, 0.98));
  background: var(--apricot, #f1ab85);
`;

const ImageBox = styled.div`
  display: flex;
  width: 41%;
  padding-top: 41%;
  background-image: url(${Badge});
  background-size: cover;
`;

const BookImgBox = styled.div`
  display: flex;
  width: 57%;
  padding-top: 40%;
  background-image: url(${Book});
  background-size: cover;
`;
