import { useState } from "react";
import styled from "styled-components";
import Circle from "../assets/svg/Circle";

export default function Nav() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const navItems: { [key: string]: string[] } = {
    영화제: ["개최개요", "페스티벌 아이덴티티"],
    섹션: ["발단", "위기", "절정", "결말"],
    "상영/예매": ["상영시간표", "예매페이지", "관람유의사항", "온라인상영"],
    이벤트: ["행사일정표", "이벤트참여"],
    "페스티벌 가이드": ["이용안내", "공지사항", "FAQ"],
  };
  const handleMainItemClick = (mainItem: string) => {
    console.log(mainItem);
    mainItem == selectedItem
      ? setSelectedItem(null)
      : setSelectedItem(mainItem);
  };
  return (
    <Container>
      <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
        <Header>
          {Object.keys(navItems).map((mainItem) => (
            <HeaderBtn
              key={mainItem}
              onClick={() => handleMainItemClick(mainItem)}
            >
              {mainItem}
              <CircleContainer
                style={{ display: mainItem == selectedItem ? "flex" : "none" }}
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
            {navItems[selectedItem].map((subItem, index) => (
              <SubHeader
                key={subItem}
                active={true}
                delay={`${index * 0.2}s`}
                style={{
                  borderBottom:
                    index !== navItems[selectedItem].length - 1
                      ? "1px solid white"
                      : "none",
                }}
              >
                {subItem}
              </SubHeader>
            ))}
          </div>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 50%;
  height: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 4%;
  right: 5%;
  z-index: 5;
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
  z-index: 5;
`;

const HeaderBtn = styled.button`
  display: flex;
  flex-direction: column;
  position: relative;
  background: none;
  border: none;
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
  position: absolute;
  top: 30px;
`;

const SubHeader = styled.button<{ delay: string; active: boolean }>`
  background-color: black;
  border-radius: 2px;
  color: white;
  padding: 2%;
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  z-index: 100;
  opacity: ${(props) => (props.active ? "1" : "0")};
  transition: opacity 0.3s ease-in-out;
  transition-delay: ${(props) => props.delay || "0s"};
`;
