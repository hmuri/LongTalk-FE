import { useEffect } from "react";
import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Section from "./page/Section";
import Notice from "./page/Notice";
import { useRecoilValue } from "recoil";
import { menuActive } from "./recoil";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  const isActive = useRecoilValue(menuActive);

  useEffect(() => {
    setScreenSize();
  });
  return (
    <Container isActive={isActive}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/section" element={<Section />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "#bf8869" : "#F1AB85")};
  display: flex;
  height: calc(var(--vh, 1vh) * 100);
`;
