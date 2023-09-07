import { useEffect } from "react";
import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./page/Main";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  background-color: #f8a13a;
  height: 100vh;
`;
