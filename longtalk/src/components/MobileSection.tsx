import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import SideBarImg from "../assets/image/SectionSideBar.png";

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

function ColorBox({
  prevColor,
  currentColor,
}: {
  prevColor: string | null;
  currentColor: string;
}) {
  return <Color style={{ backgroundColor: prevColor || currentColor }}></Color>;
}

export default function MobileSection() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);
  const [colorContainerZIndex, setColorContainerZIndex] = useState<number>(-1);
  const [backgroundColor, setBackgroundColor] = useState<string>("");
  const [key, setKey] = useState<number>(0);
  const [animationKey, setAnimationKey] = useState<number>(0);
  const prevSelectedSection = usePrevious(selectedSection);

  const sectionItem: { [key: string]: string[] } = {
    발단: [
      "#AFBFDB",
      "소통의 부재라는 문제를 수면 위에 꺼내놓는 단순하고 명료한 포인트의 작품이 주가 된다.",
    ],
    전개: [
      "#CB7FB4",
      "고발적인 성격으로, 가감 없이 불쾌하고 찝찝하리만큼 사실적인 작품들을 다룬다.",
    ],
    위기: [
      "#F1AB85",
      "문제를 제기하는 것을 넘어 해결 방안이나 교훈을 통해 여운을 남긴다.",
    ],
    결말: [
      "#AFBFDB",
      "소통을 이루어내고 기대할 수 있는 희망들을 만져보며, 밝은 미래를 엿본다.",
    ],
  };

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (selectedSection) {
      setBackgroundColor(sectionItem[selectedSection][0]);
      setColorContainerZIndex(6);
      setAnimationKey((prevKey) => prevKey + 1);
      setKey((prevKey) => prevKey + 1);
      timerId = setTimeout(() => {}, 1000);
    } else {
      setBackgroundColor("");
      setColorContainerZIndex(2);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [selectedSection]);

  return (
    <BodyContainer>
      <ColorContainer>
        <BackgroundContainer
          key={key}
          backgroundColor={backgroundColor}
          style={{
            zIndex: colorContainerZIndex,
          }}
        />
        {Object.keys(sectionItem).map((key: string, index: number) => (
          <ColorBox
            key={index} // key 속성 추가
            prevColor={
              prevSelectedSection ? sectionItem[prevSelectedSection][0] : null
            }
            currentColor={sectionItem[key][0]}
          />
        ))}
      </ColorContainer>

      <SideBarImgBox src={SideBarImg} />

      <Sidebar>
        {Object.keys(sectionItem).map((key: string, index: number) => (
          <>
            <SidebarItem
              key={index}
              selected={selectedSection === key}
              onClick={() => setSelectedSection(key)}
            >
              {key}
            </SidebarItem>
          </>
        ))}
      </Sidebar>
      {selectedSection ? (
        <ContentContainer>
          <ContentText key={animationKey}>
            {sectionItem[selectedSection][1]}
          </ContentText>
        </ContentContainer>
      ) : (
        <ContentContainer>{/* Default or Empty content */}</ContentContainer>
      )}
    </BodyContainer>
  );
}

const BodyContainer = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    margin: auto 0 0 0;
    height: 60%;
  }
`;

const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const ColorContainer = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 60%;
    justify-content: space-between;
    align-items: center;
  }
`;

const BackgroundContainer = styled.div<{ backgroundColor: string }>`
  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 60%;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) =>
      props.backgroundColor || "transparent"}; // 이 부분 추가
    ${(props) =>
      props.backgroundColor &&
      css`
        animation: ${slideInFromLeft} 1s ease-in-out forwards;
      `};
  }
`;

const Color = styled.div`
  display: flex;
  height: 25%;
  width: 100%;
  z-index: -1;
  transition: background-color 2s ease;
  border: none;
  margin: 0;
`;

const SideBarImgBox = styled.img`
  display: flex;
  height: 60%;
  position: fixed;
  left: 0%;
  bottom: 0%;
  z-index: 5;
`;

const Sidebar = styled.div`
  width: 169px;
  height: 100%;
  flex: 0.2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
`;

const SidebarItem = styled.div<{ selected: boolean }>`
  height: 100%;
  width: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => (props.selected ? "white" : "black")};
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ContentContainer = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  margin: auto 30px;
`;

const ContentText = styled.p`
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
  animation: fade-in 0.5s forwards;
  animation-delay: 0.5s;

  @keyframes fade-in {
    to {
      opacity: 1;
    }
  }
  color: var(--white, #fff);
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
`;
