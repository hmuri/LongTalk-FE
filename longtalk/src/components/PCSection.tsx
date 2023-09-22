import styled, { keyframes } from "styled-components";
import Puzzle1 from "../assets/image/Puzzle/Puzzle1.png";
import Puzzle2 from "../assets/image/Puzzle/Puzzle2.png";
import Puzzle3 from "../assets/image/Puzzle/Puzzle3.png";
import Puzzle4 from "../assets/image/Puzzle/Puzzle4.png";
import Footer from "./Footer";
import { useState } from "react";

export default function PCSection() {
  const [activePuzzle, setActivePuzzle] = useState("");
  const handlePuzzleClick = (id: string) => {
    if (activePuzzle === id) {
      setActivePuzzle("");
      console.log(id);
    } else {
      setActivePuzzle(id);
      console.log(id);
    }
  };
  return (
    <Container>
      <ColorBox style={{ backgroundColor: "#F1AB85" }}>
        <BlackBox3 isActive={activePuzzle === "puzzle3"}>
          <PuzzleBox3
            isActive={activePuzzle === "puzzle3"}
            onClick={() => handlePuzzleClick("puzzle3")}
          />
          <Text isActive={activePuzzle === "puzzle3"} isFromLeft={false}>
            문제를 제기하는 것을 넘어 해결 방안이나 교훈을 통해 여운을 남긴다.
          </Text>
          <TitleText isActive={activePuzzle === "puzzle3"} color={"#CB7FB4"}>
            절정
          </TitleText>
        </BlackBox3>
      </ColorBox>
      <ColorBox style={{ backgroundColor: "#CB7FB4" }}>
        <BlackBox2 isActive={activePuzzle === "puzzle2"}>
          <PuzzleBox2
            isActive={activePuzzle === "puzzle2"}
            onClick={() => handlePuzzleClick("puzzle2")}
          />
          <TitleText
            isActive={activePuzzle === "puzzle2"}
            color={"#AFBFDB"}
            style={{ justifyContent: "left", marginLeft: "30px" }}
          >
            위기
          </TitleText>
          <Text
            isActive={activePuzzle === "puzzle2"}
            isFromLeft={true}
            style={{ right: "0", left: "auto", justifyContent: "right" }}
          >
            고발적인 성격으로, 가감 없이 불쾌하고 찝찝하리만큼 사실적인 작품들을
            다룬다.
          </Text>
        </BlackBox2>
      </ColorBox>
      <div style={{ display: "flex", width: "100%" }}>
        <ColorBox style={{ backgroundColor: "#AFBFDB" }}>
          <BlackBox1 isActive={activePuzzle === "puzzle1"}>
            <PuzzleBox1
              isActive={activePuzzle === "puzzle1"}
              onClick={() => handlePuzzleClick("puzzle1")}
            />
            <TitleText
              isActive={activePuzzle === "puzzle1"}
              color={"#F1AB85"}
              style={{ justifyContent: "left", marginLeft: "20px" }}
            >
              발단
            </TitleText>
            <Text
              isActive={activePuzzle === "puzzle1"}
              isFromLeft={true}
              style={{ right: "0", left: "auto", justifyContent: "right" }}
            >
              소통의 부재라는 문제를 수면 위에 꺼내놓는 단순하고 명료한 포인트의
              작품이 주가 된다.
            </Text>
          </BlackBox1>
          <BlackBox4 isActive={activePuzzle === "puzzle4"}>
            <PuzzleBox4
              isActive={activePuzzle === "puzzle4"}
              onClick={() => handlePuzzleClick("puzzle4")}
            />
            <Text isActive={activePuzzle === "puzzle4"} isFromLeft={false}>
              소통을 이루어내고 기대할 수 있는 희망들을 만져보며, 밝은 미래를
              엿본다.
            </Text>
            <TitleText isActive={activePuzzle === "puzzle4"} color={"#F1AB85"}>
              결말
            </TitleText>
          </BlackBox4>
        </ColorBox>
      </div>
      <Footer />
    </Container>
  );
}
// 아예 객체처럼 그러니까 mobilesection처럼 다 담아놓고 쓰려고 할 때는 키값이 필요하고, 얘네처럼 내부 컴포넌트 css가 너무 달라서 그냥 각각의 컴포넌트를 구별할 만한 특정 고유값을 줄 때는 id를 사용한다.
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  bottom: 0;
  position: relative;
  top: calc(14% - 15px);
  background-color: white;
  z-index: 3;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const ColorBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 250px;
`;

const PuzzleBox1 = styled.div<{ isActive: boolean }>`
  display: flex;
  position: relative;
  width: calc(50% + 3px);
  height: 250px;
  left: ${(props) => (props.isActive ? "50%" : "0")};
  transition: left 0.3s ease-in-out;
  background-image: url(${Puzzle1});
  background-size: 100% 100%;
`;

const BlackBox1 = styled.div<{ isActive: boolean }>`
  position: relative;
  left: -1px;
  display: flex;
  width: 50%;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => (props.isActive ? "70%" : "0")};
    background-color: black;
    transition: width 0.3s ease-in-out;
  }
`;

const PuzzleBox2 = styled.div<{ isActive: boolean }>`
  display: flex;
  position: relative;
  width: calc(50% + 60px);
  height: 285px;
  top: -2px;
  left: ${(props) => (props.isActive ? "calc(50%)" : "-7px")};
  transition: left 0.3s ease-in-out;
  background-image: url(${Puzzle2});
  background-size: 100% 100%;
`;

const BlackBox2 = styled.div<{ isActive: boolean }>`
  left: calc(25% - 30px);
  position: relative;
  display: flex;
  width: calc(50% + 30px);
  height: 250px;
  border-radius: 8px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 30px;
    height: 100%;
    width: ${(props) => (props.isActive ? "calc(100% - 10px)" : "0")};
    background-color: black;
    transition: width 0.3s ease-in-out;
  }
`;

const PuzzleBox3 = styled.div<{ isActive: boolean }>`
  display: flex;
  position: relative;
  width: 50%;
  height: 282px;
  left: ${(props) => (props.isActive ? "0%" : "50%")};
  transition: left 0.3s ease-in-out;
  background-image: url(${Puzzle3});
  background-size: 100% 100%;
`;

const BlackBox3 = styled.div<{ isActive: boolean }>`
  left: calc(25% - 7px);
  position: relative;
  display: flex;
  width: calc(50% + 30px);
  height: 250px;
  border-radius: 8px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: ${(props) => (props.isActive ? "calc(70%)" : "0")};
    background-color: black;
    transition: width 0.3s ease-in-out;
  }
`;

const PuzzleBox4 = styled.div<{ isActive: boolean }>`
  display: flex;
  position: relative;
  width: calc(50% + 30px);
  height: 282px;
  left: ${(props) => (props.isActive ? "-30px" : "calc(50% - 30px)")};
  transition: left 0.3s ease-in-out;
  top: -32px;
  background-image: url(${Puzzle4});
  background-size: 100% 100%;
`;

const BlackBox4 = styled.div<{ isActive: boolean }>`
  position: relative;
  width: 50%;
  height: 250px;
  left: calc(- 30px);

  border-radius: 8px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 250px;
    width: ${(props) => (props.isActive ? "100%" : "0")};
    background-color: black;
    transition: width 0.3s ease-in-out;
    bottom: 0;
  }
`;

const fadeInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const Text = styled.div<{ isActive: boolean; isFromLeft: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 70%;
  display: flex;
  margin-top: 150px;
  font-size: 23px;

  color: white;
  z-index: 7;
  padding: 15px; // Add some padding around the text
  box-sizing: border-box;
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  visibility: ${(props) => (props.isActive ? "visible" : "hidden")};
  animation: ${(props) =>
      props.isActive
        ? props.isFromLeft
          ? fadeInFromLeft
          : fadeInFromRight
        : "none"}
    0.5s ease-in-out;
`;

const TitleText = styled.div<{ isActive: boolean; color: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 140px;
  margin-right: 60px;

  display: flex;
  align-items: end; // Vertically center the text
  justify-content: right; // Horizontally center the text
  color: ${(props) => (props.isActive ? "white" : props.color)};
  transition: color 0.5s ease-in-out;
  font-family: NanumSquareRound;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  z-index: 7;
  padding: 10px; // Add some padding around the text
  box-sizing: border-box;
`;
