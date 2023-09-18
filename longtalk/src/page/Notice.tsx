import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ArrowBottom from "../assets/icon/ArrowBottom.png";
import PCHeader from "../components/PCHeader";
import Notice1 from "../components/Notice1";
import MobileHeader from "../components/MobileHeader";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";

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
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >
          <Header>
            {Object.keys(navItems).map((mainItem) => (
              <HeaderBox key={mainItem}>
                <>
                  <HeaderBtn onClick={() => handleMainItemClick(mainItem)}>
                    <p>
                      {mainItem +
                        navItems[mainItem][0] +
                        " " +
                        navItems[mainItem][1]}
                    </p>
                    <p />
                    {selectedItem === mainItem ? null : (
                      <p>{navItems[mainItem][3]}</p>
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
      </MenuContainer>
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
  top: 20%;
  left: 3%;
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
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  /*poistion: fixed;*/ //미친 얘때문에 안되는 거였어 미친미친 킹받아 미친 왜 이걸 못봤지 아놔아놔
  top: 20%;
  border-radius: 4px;
  background-color: #afbfdb;
  z-index: 20;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  z-index: 5;
`;

const HeaderBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  border: solid 1px black;
`;

const HeaderBtn = styled.button`
  display: flex;
  flex-direction: row;
  background: none;
  border: none;
  color: black;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: left;
  text-align: left;
  cursor: pointer;
  width: 100%;
  padding: 40px 0;
`;

const SubHeaderContainer = styled.div<{ active: boolean }>`
  width: calc(100% - 15px);
  background-color: #afbfdb;
  padding-left: 15px;
  overflow: hidden;

  transition: transform 0.3s ease-in-out, max-height 0.3s ease-in-out;
  max-height: ${(props) => (props.active ? "100%" : "0")};
`;