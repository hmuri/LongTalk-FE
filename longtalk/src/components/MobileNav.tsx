import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ArrowBottom from "../assets/icon/ArrowBottom.png";
import MenuIcon from "../assets/icon/Menu.png";
import { useRecoilState } from "recoil";
import { menuActive } from "../recoil";
import { Link } from "react-router-dom";
import CloseSquare from "../assets/icon/Close_square.png";
import { useNavigate } from "react-router-dom";

export default function MobileNav() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useRecoilState<boolean>(menuActive);
  const navigate = useNavigate();

  const navItems: {
    [key: string]: {
      label: string;
      link?: string;
      alertMessage?: string;
      subItems?: { label: string; link: string }[];
    };
  } = {
    영화제: {
      label: "영화제",
      subItems: [
        { label: "개최개요", link: "/holdinfo" },
        { label: "페스티벌 아이덴티티", link: "/identity" },
      ],
    },
    섹션: {
      label: "섹션",
      subItems: [
        { label: "발단", link: "/section" },
        { label: "위기", link: "/section" },
        { label: "절정", link: "/section" },
        { label: "결말", link: "/section" },
      ],
    },
    "상영/예매": {
      label: "상영/예매",
      subItems: [
        { label: "상영시간표", link: "/timetable" },
        { label: "예매페이지", link: "/section" },
        { label: "관람유의사항", link: "/section" },
        { label: "온라인상영", link: "/section" },
      ],
    },
    이벤트: {
      label: "이벤트",
      alertMessage: "12월 초 오픈 예정입니다.",
    },
    "페스티벌 가이드": {
      label: "페스티벌 가이드",
      subItems: [
        { label: "이용안내", link: "/guide" },
        { label: "공지사항", link: "/notice" },
        { label: "FAQ", link: "/faq" },
      ],
    },
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  const handleMainItemClick = (mainItem: string) => {
    const item = navItems[mainItem];
    if (item.link) {
      navigate(item.link);
    } else if (item.alertMessage) {
      alert(item.alertMessage);
    } else {
      setSelectedItem(mainItem === selectedItem ? null : mainItem);
    }
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
  };
  const handleMenuCloseClick = () => {
    setMenuOpen(false); // Toggle menuOpen state
  };

  return (
    <>
      <MenuIconBox onClick={handleMenuOpenClick} />
      <Container menuOpen={menuOpen}>
        <MenuContainer data-menu-container menuOpen={menuOpen}>
          <CloseButton onClick={handleClose} src={CloseSquare} />
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <Header>
              {Object.keys(navItems).map((mainItem) => (
                <HeaderBox
                  key={mainItem}
                  onClick={() => handleMainItemClick(mainItem)}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      borderBottom: "solid 1px white",
                      backgroundColor: "black",
                      zIndex: "50",
                    }}
                  >
                    <HeaderBtn>{mainItem}</HeaderBtn>
                    <ArrowBox />
                  </div>

                  <SubHeaderContainer active={selectedItem === mainItem}>
                    {selectedItem === mainItem && (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        {navItems[selectedItem].subItems?.map(
                          (subItem, index) => (
                            <Link
                              to={subItem.link}
                              onClick={handleMenuCloseClick}
                            >
                              <SubHeader
                                key={subItem.label}
                                delay={`${index * 0.2}s`}
                                active={true}
                              >
                                {subItem.label}
                              </SubHeader>
                            </Link>
                          )
                        )}
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

const CloseButton = styled.img`
  position: fixed;
  top: 3%;
  right: 5%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 51;
`;

const MenuContainer = styled.div<{ menuOpen: boolean }>`
  display: flex;
  flex-direction: column;
  width: 244px;
  height: calc(100vh - 7%);
  padding: 45px 18px;
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
  width: calc(100% - 70px);
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
