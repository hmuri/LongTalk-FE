import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ArrowBottom from "../assets/icon/ArrowBottom.png";
import PCHeader from "../components/PCHeader";
import Notice1 from "../components/Notice1";
import MobileHeader from "../components/MobileHeader";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Notice() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const navItems: { [key: string]: string[] } = {
    "01": [
      "소통영화제 롱톡 출품 및 상영작 공모 안내",
      "2023.09.18",
      "Notice1",
      "르포(REPORTAGE)가 주관하는 제1회 소통영화제 「롱톡」이 2023년 9월 21일부터 단편영화 공모를 진행합니다...",
    ],
  };

  const componentMap: {
    [key: string]: () => JSX.Element;
  } = {
    Notice1: Notice1,
  };

  const DynamicComponent = selectedItem
    ? componentMap[navItems[selectedItem][2]]
    : null;

  const handleMainItemClick = (mainItem: string) => {
    setSelectedItem((prev) => (prev === mainItem ? null : mainItem));
  };

  return (
    <Container>
      <Nav />
      <PCHeader />
      <MobileHeader />
      <MobileNav />
      <MenuTitle>공지사항</MenuTitle>
      <MenuContainer>
        <div
          style={{ width: "100vw", display: "flex", flexDirection: "column" }}
        >
          <Header>
            {Object.keys(navItems).map((mainItem) => (
              <HeaderBox key={mainItem}>
                <>
                  <HeaderBtn onClick={() => handleMainItemClick(mainItem)}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                      }}
                    >
                      <ContentNumber>{mainItem}</ContentNumber>
                      <ContentTitle>{navItems[mainItem][0]} </ContentTitle>
                      <ContentDate>{navItems[mainItem][1]}</ContentDate>
                    </div>
                    <br />
                    <div />
                    {selectedItem === mainItem ? null : (
                      <ContentShort>{navItems[mainItem][3]}</ContentShort>
                    )}
                  </HeaderBtn>
                  <SubHeaderContainer active={selectedItem === mainItem}>
                    {selectedItem === mainItem && DynamicComponent && (
                      <DynamicComponent />
                    )}
                  </SubHeaderContainer>
                </>
              </HeaderBox>
            ))}
          </Header>
        </div>
        <Footer />
      </MenuContainer>
    </Container>
  );
}

const Container = styled.div`
  flex-direction: column;
  width: 100vw;
  height: 100%;
  background-color: #efeae1;
`;

const MenuTitle = styled.div`
  display: flex;
  width: 137px;
  height: 29px;

  margin-top: 15%;
  @media ${(props) => props.theme.mobile} {
    position: relative;

    top: 8%;
    width: 120px;
  }
  margin-left: 15%;
  padding: 7px 1%;
  justify-content: center;
  align-items: center;
  border: solid 1px black;
  border-radius: 16px 16px 0px 0px;
  border-bottom: none;
  background-color: #afbfdb;
`;

const MenuContainer = styled.div`
  display: flex;

  flex-direction: column;
  flex-wrap: wrap;
  width: 100vw;
  border-radius: 4px;
  height: calc(85% - 45px);
  overflow: auto;
  @media ${(props) => props.theme.mobile} {
    top: 20%;
    position: relative;
  }
`;

const Header = styled.div`
  background-color: #afbfdb;
  display: flex;
  flex-direction: column;
  width: 96%;
  padding: 2%;
  justify-content: space-between;
  border: solid 1px black;
  z-index: 5;
`;

const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: none;
`;

const HeaderBtn = styled.button`
  display: flex;
  flex-direction: column;
  background: none;
  border: none;
  padding: 2% 10%;
  color: black;
  justify-content: left;
  text-align: left;
  cursor: pointer;
  width: 100%;

  font-family: Pretendard Variable;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ContentNumber = styled.div`
  display: flex;
  flex: 0.1;

  font-family: Roboto Condensed;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ContentTitle = styled.div`
  display: flex;
  flex: 0.6;
`;

const ContentDate = styled.div`
  display: flex;
  flex: 0.3;
  text-align: right;
  justify-content: right;
`;

const ContentShort = styled.div`
  display: flex;
  padding-left: 10%;
  font-family: Pretendard Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
`;

const SubHeaderContainer = styled.div<{ active: boolean }>`
  display: flex;
  width: 72%;
  background-color: #afbfdb;
  padding-left: 18%;
  overflow: hidden;

  transition: transform 0.3s ease-in-out, max-height 0.3s ease-in-out;
  max-height: ${(props) => (props.active ? "100%" : "0")};
  @media ${(props) => props.theme.mobile} {
    top: 20%;
  }
`;
