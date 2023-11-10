import { useState, useEffect } from "react";
import styled, { css } from "styled-components";

import PCHeader from "../components/PCHeader";
import MobileHeader from "../components/MobileHeader";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SatTime from "../assets/image/SatTime.png";
import SunTime from "../assets/image/SunTime.png";
import "../style/style.css";

export default function TimeTable() {
  return (
    <body>
      <Container>
        <Nav />
        <PCHeader />
        <MobileHeader />
        <MobileNav />
        <MenuContainer>
          <ContentContainer>
            <Title>상영시간표</Title>
            <Title>December 2023</Title>
            <DayContainer>
              <ImgBox />
              <DayTextBox>
                <TextBox>
                  <TitleBox>섹션1: 발단</TitleBox>
                  <br />
                  <TimeSlot>
                    <p className="table">13:00 – 13:20 (20')</p>
                    <p className="table">오프닝 멘트</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">13:20 – 13:30 (10')</p>
                    <p className="table">행사 준비 및 입장</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">13:30 – 14:00 (30')</p>
                    <p className="table">발단 — 영화1 상영</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">14:00 – 14:30 (30')</p>
                    <p className="table">발단 — 영화2 상영</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">14:30 – 15:00 (30')</p>
                    <p className="table">발단 — 영화3 상영</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">15:00 – 15:10 (10')</p>
                    <p className="table">인터미션</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">15:10 – 15:40 (30')</p>
                    <p className="table">발단 — GV 진행</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">15:40 – 16:10 (30')</p>
                    <p className="table">프로그램 및 이벤트 진행</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">16:10 – 16:30 (20')</p>
                    <p className="table">관객 퇴장 및 사진 촬영</p>
                  </TimeSlot>
                  <br />
                </TextBox>
                <MobileImgBox />
                <TextBox>
                  <TitleBox>섹션2: 위기</TitleBox>
                  <TimeSlot>
                    <p className="table">16:30 – 16:50 (20')</p>
                    <p className="table">행사 준비 및 입장</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">16:50 – 17:00 (10')</p>
                    <p className="table">오프닝 멘트</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">17:00 – 17:30 (30')</p>
                    <p className="table">위기 — 영화1 상영</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">17:30 – 18:00 (30')</p>
                    <p className="table">위기 — 영화2 상영</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">18:00 – 18:30 (30')</p>
                    <p className="table">위기 — 영화3 상영</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">18:30 – 18:40 (10')</p>
                    <p className="table">인터미션</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">18:40 – 19:10 (30')</p>
                    <p className="table">위기 — GV 진행</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">19:10 – 19:40 (30')</p>
                    <p className="table">프로그램 및 이벤트 진행</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">19:40 – 20:00 (20')</p>
                    <p className="table">관객 퇴장 및 사진 촬영</p>
                  </TimeSlot>
                </TextBox>
                <br />
                <br />
              </DayTextBox>
            </DayContainer>
            <DayContainer>
              <SunImgBox />
              <DayTextBox>
                <TextBox>
                  <TitleBox>섹션3: 절정</TitleBox>
                  <br />
                  <TimeSlot>
                    <p className="table">13:00 – 13:20 (20')</p>
                    <p className="table">행사 준비 및 입장</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">13:20 – 13:30 (10')</p>
                    <p className="table">오프닝 멘트</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">13:30 – 14:00 (30')</p>
                    <p className="table">절정 — 영화1 상영</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">14:00 – 14:30 (30')</p>
                    <p className="table">절정 — 영화2 상영</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">14:30 – 15:00 (30')</p>
                    <p className="table">절정 — 영화3 상영</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">15:00 – 15:10 (10')</p>
                    <p className="table">인터미션</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">15:10 – 15:40 (30')</p>
                    <p className="table">절정 — GV 진행</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">15:40 – 16:10 (30')</p>
                    <p className="table">프로그램 및 이벤트 진행</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">16:10 – 16:30 (20')</p>
                    <p className="table">관객 퇴장 및 사진 촬영</p>
                  </TimeSlot>
                  <br />
                </TextBox>
                <MobileSunImgBox />
                <TextBox>
                  <TitleBox>섹션4: 결말</TitleBox>
                  <br />
                  <TimeSlot>
                    <p className="table">16:30 – 16:50 (20')</p>
                    <p className="table">행사 준비 및 입장</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">16:50 – 17:00 (10')</p>
                    <p className="table">오프닝 멘트</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">17:00 – 17:30 (30')</p>
                    <p className="table">결말 — 영화1 상영</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">17:30 – 18:00 (30')</p>
                    <p className="table">결말 — 영화2 상영</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">18:00 – 18:30 (30')</p>
                    <p className="table">결말 — 영화3 상영</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">18:30 – 18:40 (10')</p>
                    <p className="table">인터미션</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">18:40 – 19:10 (30')</p>
                    <p className="table">결말 — GV 진행</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">19:10 – 19:40 (30')</p>
                    <p className="table">프로그램 및 이벤트 진행</p>
                  </TimeSlot>
                  <TimeSlot>
                    <p className="table">19:40 – 20:00 (20')</p>
                    <p className="table">관객 퇴장 및 사진 촬영</p>
                  </TimeSlot>
                  <br />
                  <br />
                  <br />
                </TextBox>
              </DayTextBox>
            </DayContainer>
          </ContentContainer>
        </MenuContainer>
      </Container>
      <Footer />
    </body>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100vw;
  background-color: #efeae1;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 13%;
  border: 1px solid black;
  background-color: #afbfdb;
  padding-bottom: 50px;
  flex: 1
  z-index: 7;
  @media ${(props) => props.theme.mobile} {
    width: 100vw;
    padding-top: 20%;


  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 86%;
  margin: auto;
  padding: 4% 0;
  @media ${(props) => props.theme.mobile} {
    padding: 13% 0;
    height: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  color: #000;
  font-family: Pretendard Variable;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media ${(props) => props.theme.mobile} {
    font-size: 23px;
  }
`;

const DayContainer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  margin-top: 5%;

  @media ${(props) => props.theme.mobile} {
    height: 100%;
  }
`;

const ImgBox = styled.div`
  width: 110px;
  height: 60px;
  background-image: url(${SatTime});
  background-size: cover;
`;
const MobileImgBox = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    position: absolute;
    top: 30%;
    left: 8%;
    width: 110px;
    height: 60px;
    background-image: url(${SatTime});
    background-size: cover;
  }
`;

const SunImgBox = styled.div`
  width: 110px;
  height: 60px;
  background-image: url(${SunTime});
  background-size: cover;
`;

const MobileSunImgBox = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    position: absolute;
    left: 8%;
    bottom: 24.5%;
    width: 110px;
    height: 60px;
    background-image: url(${SunTime});
    background-size: cover;
  }
`;

const DayTextBox = styled.div`
  display: flex;
  width: calc(100vw - 20% - 110px);
  margin-left: 40px;

  @media ${(props) => props.theme.mobile} {
    width: calc(100% - 110px);
    margin-left: 0px;
    flex-direction: column;
  }
`;

const TextBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    margin-left: 20px;
  }
`;

const TitleBox = styled.div`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  color: #000;

  font-family: Pretendard Variable;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media ${(props) => props.theme.mobile} {
    width: calc(100% - 55px);
    height: 60px;
    font-size: 23px;
    margin-bottom: 10px;
    margin-left: calc(50% - 55px);

    font-weight: 600;
  }
`;
const TimeSlot = styled.div`
  width: 100%;
  height: 40px;

  align-items: center;
  font-size: 25px;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 10px;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    margin-left: -120px;
    width: calc(100% + 120px);
  }
`;
