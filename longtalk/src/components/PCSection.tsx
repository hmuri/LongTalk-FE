import styled from "styled-components";
import Puzzle1 from "../assets/image/Puzzle/Puzzle1.png";
import Puzzle2 from "../assets/image/Puzzle/Puzzle2.png";
import Puzzle3 from "../assets/image/Puzzle/Puzzle3.png";
import Puzzle4 from "../assets/image/Puzzle/Puzzle4.png";
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
        <PuzzleBox3
          isActive={activePuzzle === "puzzle3"}
          onClick={() => handlePuzzleClick("puzzle3")}
        />
      </ColorBox>
      <ColorBox style={{ backgroundColor: "#CB7FB4" }}>
        <PuzzleBox2
          isActive={activePuzzle === "puzzle2"}
          onClick={() => handlePuzzleClick("puzzle2")}
        />
      </ColorBox>
      <ColorBox style={{ backgroundColor: "#AFBFDB" }}>
        <PuzzleBox1
          isActive={activePuzzle === "puzzle1"}
          onClick={() => handlePuzzleClick("puzzle1")}
        />
        <PuzzleBox4
          isActive={activePuzzle === "puzzle4"}
          onClick={() => handlePuzzleClick("puzzle4")}
        />
      </ColorBox>
    </Container>
  );
}
// 아예 객체처럼 그러니까 mobilesection처럼 다 담아놓고 쓰려고 할 때는 키값이 필요하고, 얘네처럼 내부 컴포넌트 css가 너무 달라서 그냥 각각의 컴포넌트를 구별할 만한 특정 고유값을 줄 때는 id를 사용한다.
const Container = styled.div`
  width: 100%;
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
  width: 100%;
  height: 250px;
`;

const PuzzleBox1 = styled.div<{ isActive: boolean }>`
  display: flex;
  position: relative;
  width: 25%;
  height: 250px;
  left: ${(props) => (props.isActive ? "25%" : "0")};
  transition: left 0.3s ease-in-out;
  background-image: url(${Puzzle1});
  background-size: 100% 100%;
`;

const PuzzleBox2 = styled.div<{ isActive: boolean }>`
  display: flex;
  position: relative;
  width: calc(25.5% + 60px);
  height: 285px;
  left: ${(props) =>
    props.isActive ? "calc(49.75% - 30px)" : "calc(24.75% - 30px)"};
  transition: left 0.3s ease-in-out;
  background-image: url(${Puzzle2});
  background-size: 100% 100%;
`;

const PuzzleBox3 = styled.div<{ isActive: boolean }>`
  display: flex;
  position: relative;
  width: 25%;
  height: 285px;
  left: ${(props) => (props.isActive ? "25%" : "50%")};
  transition: left 0.3s ease-in-out;
  background-image: url(${Puzzle3});
  background-size: 100% 100%;
`;

const PuzzleBox4 = styled.div<{ isActive: boolean }>`
  display: flex;
  position: relative;
  width: calc(25% + 30px);
  height: 285px;
  left: calc(50% - 30px);
  left: ${(props) =>
    props.isActive ? "calc(25% - 30px)" : "calc(50% - 30px)"};
  transition: left 0.3s ease-in-out;
  top: -35px;
  background-image: url(${Puzzle4});
  background-size: 100% 100%;
`;
