import { useState } from "react";
import styled from "styled-components";
import Circle from "../assets/svg/Circle";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
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

  return (
    <Container isDisabled={selectedItem == null}>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Header>
          {Object.keys(navItems).map((mainItem) => (
            <HeaderBtn
              key={mainItem}
              onClick={() => handleMainItemClick(mainItem)}
            >
              {mainItem}
              <CircleContainer
                style={{ display: mainItem === selectedItem ? "flex" : "none" }}
              >
                <Circle />
              </CircleContainer>
            </HeaderBtn>
          ))}
        </Header>
        {selectedItem && (
          <div
            style={{
              display: selectedItem ? "flex" : "none",
              flexDirection: "column",
            }}
          >
            {navItems[selectedItem].subItems?.map((subItem, index) => (
              <Link to={subItem.link}>
                <SubHeader
                  key={subItem.label}
                  active={true}
                  delay={`${index * 0.2}s`}
                  style={{
                    borderBottom:
                      index !== navItems[selectedItem].subItems!.length - 1
                        ? "1px solid white"
                        : "none",
                  }}
                >
                  {subItem.label}
                </SubHeader>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

// 이하 styled-components 선언은 동일

const Container = styled.div<{ isDisabled: boolean }>`
  width: 50%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 4%;
  right: 5%;
  z-index: 20;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 30px;
  justify-content: space-between;
  margin-bottom: 15px;
  z-index: 10;
`;

const HeaderBtn = styled.button`
  display: flex;
  flex-direction: column;
  position: relative;
  background: none;
  border: none;
  z-index: 11;
  color: #000; /* 버튼 텍스트 색상 설정 */
  cursor: pointer; /* 마우스 커서 스타일 설정 */
  font-size: 23px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;
  text-align: center;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: center;
  width: 100%;
  height: 38px;
  z-index: 10;
  position: absolute;
  top: 30px;
`;

const SubHeader = styled.button<{ delay: string; active: boolean }>`
  background-color: black;
  width: 100%;
  border-radius: 2px;
  color: white;
  padding: 2%;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  z-index: 12;
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
  transition-delay: ${(props) => props.delay || "0s"};
`;
