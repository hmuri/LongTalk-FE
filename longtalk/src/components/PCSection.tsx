import styled from "styled-components";
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
        </BlackBox3>
      </ColorBox>
      <ColorBox style={{ backgroundColor: "#CB7FB4" }}>
        <BlackBox2 isActive={activePuzzle === "puzzle2"}>
          <PuzzleBox2
            isActive={activePuzzle === "puzzle2"}
            onClick={() => handlePuzzleClick("puzzle2")}
          />
        </BlackBox2>
      </ColorBox>
      <div style={{ display: "flex", width: "100%" }}>
        <ColorBox style={{ backgroundColor: "#AFBFDB" }}>
          <BlackBox1 isActive={activePuzzle === "puzzle1"}>
            <PuzzleBox1
              isActive={activePuzzle === "puzzle1"}
              onClick={() => handlePuzzleClick("puzzle1")}
            />
          </BlackBox1>
          <BlackBox4 isActive={activePuzzle === "puzzle4"}>
            <PuzzleBox4
              isActive={activePuzzle === "puzzle4"}
              onClick={() => handlePuzzleClick("puzzle4")}
            />
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
