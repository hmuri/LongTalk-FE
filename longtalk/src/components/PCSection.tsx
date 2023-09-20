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
    } else {
      setActivePuzzle(id);
    }
  };
  return (
    <Container>
      <ColorBox style={{ backgroundColor: "#F1AB85" }}>
        <PuzzleBox3
          isActive={activePuzzle === "puzzle3"}
          onClick={() => handlePuzzleClick("puzzle3")}
        >
          <TextContent isActive={activePuzzle === "puzzle3"}>
            문제를 제기하는 것을 넘어 해결 방안이나 교훈을 통해 여운을 남긴다.
          </TextContent>
        </PuzzleBox3>
        <BlackBox3 isActive={activePuzzle === "puzzle3"} />
      </ColorBox>
      <ColorBox style={{ backgroundColor: "#CB7FB4" }}>
        <PuzzleBox2
          isActive={activePuzzle === "puzzle2"}
          onClick={() => handlePuzzleClick("puzzle2")}
        />
        <BlackBox2 isActive={activePuzzle === "puzzle2"}>
          <TextContent
            isActive={activePuzzle === "puzzle2"}
            style={{ width: "50%" }}
          >
            고발적인 성격으로, 가감 없이 불쾌하고 찝찝하리만큼 사실적인 작품들을
            다룬다.
          </TextContent>
        </BlackBox2>
      </ColorBox>
      <div style={{ display: "flex", flexDirection: "row", width: "100%" }}>
        <ColorBox style={{ backgroundColor: "#AFBFDB", width: "50%" }}>
          <PuzzleBox1
            isActive={activePuzzle === "puzzle1"}
            onClick={() => handlePuzzleClick("puzzle1")}
          />
          <BlackBox1 isActive={activePuzzle === "puzzle1"}>
            <TextContent isActive={activePuzzle === "puzzle1"}>
              소통의 부재라는 문제를 수면 위에 꺼내놓는 단순하고 명료한 포인트의
              작품이 주가 된다.
            </TextContent>
          </BlackBox1>
        </ColorBox>
        <ColorBox style={{ backgroundColor: "#AFBFDB", width: "50%" }}>
          <PuzzleBox4
            isActive={activePuzzle === "puzzle4"}
            onClick={() => handlePuzzleClick("puzzle4")}
          />
          <BlackBox4 isActive={activePuzzle === "puzzle4"}>
            <TextContent isActive={activePuzzle === "puzzle4"}>
              소통을 이루어내고 기대할 수 있는 희망들을 만져보며, 밝은 미래를
              엿본다.
            </TextContent>
          </BlackBox4>
        </ColorBox>
      </div>
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
  width: 50%;
  height: 250px;
  left: ${(props) => (props.isActive ? "50%" : "0")};
  transition: left 0.3s ease-in-out;
  background-image: url(${Puzzle1});
  background-size: 100% 100%;
  z-index: 2;
`;

const BlackBox1 = styled.div<{ isActive: boolean }>`
  position: relative;
  height: 250px;
  width: ${(props) => (props.isActive ? "50%" : "0%")};
  left: -50%;
  bottom: 0;
  transition: width 0.3s ease-in-out;
  background-color: black;
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
  z-index: 2;
`;

const BlackBox2 = styled.div<{ isActive: boolean }>`
  position: relative;
  height: 255px;
  width: ${(props) => (props.isActive ? "50%" : "0%")};
  left: calc(-0.5% - 60px);
  transition: width 0.3s ease-in-out;
  background-color: black;
  border-radius: 8px;
  z-index: 1;
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
  z-index: 2;
`;

const BlackBox3 = styled.div<{ isActive: boolean }>`
  position: relative;
  display: flex;
  height: 250px;
  width: ${(props) => (props.isActive ? "30%" : "0%")};
  left: 21.5%;
  transition: width 0.3s ease-in-out, right 0.7s ease-in-out; /* 각 속성에 지연을 적용 */
  background-color: black;
  border-radius: 8px;
`;

const PuzzleBox4 = styled.div<{ isActive: boolean }>`
  display: flex;
  position: relative;
  width: calc(50% + 30px);
  height: 285px;
  left: ${(props) => (props.isActive ? "0%" : "calc(50% - 30px)")};
  transition: left 0.3s ease-in-out;
  top: -35px;
  background-image: url(${Puzzle4});
  background-size: 100% 100%;
  z-index: 4;
`;

const BlackBox4 = styled.div<{ isActive: boolean }>`
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  height: 240px;
  bottom: 0;
  width: ${(props) => (props.isActive ? "55%" : "0%")};
  transition: width 0.3s ease-in-out, right 0.7s ease-in-out;
  background-color: black;
  border: 5px solid black;
`;

const TextContent = styled.p<{ isActive: boolean }>`
  color: var(--white, #fff);

  font-family: Pretendard Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 175%;
  align-self: flex-end;

  display: ${(props) => (props.isActive ? "flex" : "none")};
  transition: display 0.3s ease-in-out
  transition-delay: 0.5s;
  height: 250px;
  text-align: center;
  z-index: 10;
`;
