import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ArrowBottom from "../assets/icon/ArrowBottom.png";
import MenuIcon from "../assets/icon/Menu.png";
import { useRecoilState } from "recoil";
import { menuActive } from "../recoil";

export default function MobileNav() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useRecoilState<boolean>(menuActive);

  const navItems: { [key: string]: string[] } = {
    영화제: ["개최개요", "페스티벌 아이덴티티"],
    섹션: ["발단", "위기", "절정", "결말"],
    "상영/예매": ["상영시간표", "예매페이지", "관람유의사항", "온라인상영"],
    이벤트: ["행사일정표", "이벤트참여"],
    "페스티벌 가이드": ["이용안내", "공지사항", "FAQ"],
  };

  useEffect(() => {
    const closeMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (menuOpen && !target.closest("[data-menu-container")) {
        handleMenuCloseClick();
      }
    };

    if (menuOpen) {
      document.addEventListener("click", closeMenu);
    }
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  const handleMenuOpenClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setMenuOpen(true); // Toggle menuOpen state
    console.log("open");
  };
  const handleMenuCloseClick = () => {
    setMenuOpen(false); // Toggle menuOpen state
    console.log("close");
  };

  const handleMainItemClick = (mainItem: string) => {
    setSelectedItem((prev) => (prev === mainItem ? null : mainItem));
    console.log(mainItem);
  };

  return (
    <>
      <MenuIconBox onClick={handleMenuOpenClick} />
      <Container menuOpen={menuOpen}>
        <MenuContainer data-menu-container menuOpen={menuOpen}>
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <Header>
              {Object.keys(navItems).map((mainItem) => (
                <HeaderBox key={mainItem}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "solid 1px white",
                      backgroundColor: "black",
                      zIndex: "50",
                    }}
                    onClick={() => handleMainItemClick(mainItem)}
                  >
                    <HeaderBtn>{mainItem}</HeaderBtn>
                    <ArrowBox />
                  </div>

                  <SubHeaderContainer active={selectedItem === mainItem}>
                    {selectedItem === mainItem && (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {navItems[selectedItem].map((subItem, index) => (
                          <SubHeader
                            key={subItem}
                            delay={`${index * 0.2}s`}
                            active={true}
                          >
                            {subItem}
                          </SubHeader>
                        ))}
                      </div>
                    )}
                  </SubHeaderContainer>
                </HeaderBox>
              ))}
            </Header>
          </div>
        </MenuContainer>
      </Container>
    </>
  );
}

const Container = styled.div<{ menuOpen: boolean }>`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    width: 100vw;
    height: 100vh;
    position: fixed;

    background: ${(props) => (props.menuOpen ? "rgba(0, 0, 0, 0.65)" : "none")};

    z-index: ${(props) => (props.menuOpen ? "10" : "auto")};
  }
`;

const MenuIconBox = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    position: fixed;
    width: 25px;
    height: 18px;

    background-size: cover;
    background-image: url(${MenuIcon});
    right: 10%;
    top: 7%;
  }
  z-index: 7;
`;

const MenuContainer = styled.div<{ menuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  width: 244px;
  height: calc(100vh - 7%);
  padding: 35px 18px;
  position: fixed;
  right: 0px;
  top: 7%;
  border-radius: 4px;
  background-color: black;
  z-index: 20;
  visibility: ${(props) => (props.menuOpen ? "visible" : "hidden")}; // 추가
  transform: translateX(${(props) => (props.menuOpen ? "0%" : "100%")});
  opacity: ${(props) => (props.menuOpen ? "1" : "0")};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out; // visibility 추가
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 30px;
  justify-content: space-between;
  z-index: 5;
`;

const HeaderBox = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

const HeaderBtn = styled.button`
  display: flex;
  background: none;
  border: none;
  color: white;
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: left;
  text-align: left;
  cursor: pointer;
  width: 100%;
  padding: 45px 10px 15px 10px;
`;

const ArrowBox = styled.div`
  display: flex;
  width: 20px;
  height: 10px;
  margin: auto 5px 22px auto;
  background-image: url(${ArrowBottom});
`;

const SubHeaderContainer = styled.div<{ active: boolean }>`
  overflow: hidden;
  width: calc(100% - 15px);
  padding-left: 15px;

  transform: ${(props) =>
    props.active ? "translateY(0%)" : "translateY(-90%)"};
  transition: transform 0.3s ease-in-out;
`;

const SubHeader = styled.button<{ delay: string; active: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  background: none;

  border: none;
  color: white;
  cursor: pointer; /* 마우스 커서 스타일 설정 */
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: left;
  text-align: left;
  border-bottom: solid 1px white;
  padding: 25px 10px 8px 10px;
`;
