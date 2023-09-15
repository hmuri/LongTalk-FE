import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import ArrowBottom from "../assets/icon/ArrowBottom.png";
import PCHeader from "../components/PCHeader";

export default function Notice() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const navItems: { [key: string]: string[] } = {
    "1": [
      "소통영화제 롱톡 출품 및 상영작 공모 안내",
      "2023.09.18",
      "르포(REPORTAGE)가 주관하는 제1회 소통영화제 「롱톡」이 2023년 9월 21일부터 단편영화 공모를 진행합니다. 작품 출품은 소통영화제 「롱톡」 출품 사이트를 통해 온라인으로 신청받습니다.",
      "제1회 소통영화제 「롱톡」 출품 일정 : 2023년 9월 21일(목) ~ 2023년 10월 8일(일) 17시까지",
      "-",
      "르포(REPORTAGE)가 주관하는 제1회 소통영화제 「롱톡」이 12월 9일부터 10일까지 양일간 개최됩니다.",
      "제1회 소통영화제 「롱톡」은 긴 글을 세 줄로 줄이고, 또 2시간을 편집해 13분으로 재생하는 것만이 미학이 된 현 사회의 세태를 꼬집으며, 단절을 이어붙이기 위한 첫 시작으로 현실에서 꺼내지 못하던 말들을 모아 영화의 방식으로 이야기하고자 합니다. 릴레이소설을 모티프로 하여 사회 문제의 여러 방면으로 조명하며 이야기되지 않던, 혹은 그래서 이야기해야만 하는 사회의 다각을 살펴보는 창작물들을 기다리고 있습니다.",
      "선정작들은 영화제 당일 상영됩니다. 본 영화제는 단편 독립영화의 가치 실현을 기반으로 사회문제 직시를 넘어 연결을 통한 소통을 추구합니다. 함께 목소리를 낼 여러분의 많은 관심과 참여 부탁드립니다.",
      "-",
      "💬 출품작 자격 및 장르: 다음 조건들을 만족시켜야 함.",
      "① 러닝타임: 30분 이내의 단편영화",
      "② 장르: 극영화, 다큐멘터리",
      "③ 스토리 상에 사회 문제가 드러나는 영화",
      "④ 다음 키워드들과 연관 지을 수 있는 영화",
      ">> 소통, 조명, 연결, 이야기",
      "-",
      "💬 지원서 링크 : https://forms.gle/YYD2PaVN6H2X7XaR8",
      "-",
      "☑️ 오프라인 영화제 기간 : 12월 9일(토) ~ 12월 10일(일) 각 13:00~20:00",
      "☑️ 온라인 영화제 기간 : 12월 9일(토) ~ 12월 16일(토)",
      "☑️ 접수 기간 : 9월 21일(목) ~ 10월 8일(일) 17시까지",
      "☑️ 결과 발표 : 10월 23일(월) 르포(REPORTAGE) SNS 및 온라인 영화제 페이지(링크) 업로드 및 선정 작품 한정 출품자 개별 연락",
    ],
  };

  const handleMainItemClick = (mainItem: string) => {
    setSelectedItem((prev) => (prev === mainItem ? null : mainItem));
    console.log(mainItem);
  };

  return (
    <Container>
      <PCHeader />
      <MenuContainer>
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
                    borderBottom: "solid 1px black",
                    backgroundColor: "#afbfdb",
                    zIndex: "50",
                  }}
                  onClick={() => handleMainItemClick(mainItem)}
                >
                  <HeaderBtn>
                    {mainItem} {mainItem[1]}
                  </HeaderBtn>
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
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #efeae1;
  width: 100vw;
  height: 100vh;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 35px 18px;
  position: fixed;
  top: 20%;
  border-radius: 4px;
  background-color: #afbfdb;
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
  color: black;
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
  color: black;
  cursor: pointer; /* 마우스 커서 스타일 설정 */
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: center; /* 수평 가운데 정렬 */
  align-items: left;
  text-align: left;
  border-bottom: solid 1px black;
  padding: 25px 10px 8px 10px;
`;
