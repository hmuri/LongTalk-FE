import { useEffect } from "react";
import styled from "styled-components";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Section from "./page/Section";
import Notice from "./page/Notice";
import HoldInfo from "./page/HoldInfo";
import Identity from "./page/Identity";
import UsgInfo from "./page/UsgInfo";
import FAQ from "./page/FAQ";
import { useRecoilValue } from "recoil";
import { menuActive } from "./recoil";
import TimeTable from "./page/TimeTable";
import Booking from "./page/Booking";
import Guideline from "./page/Guideline";
import Online from "./page/Online";

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
        <Route path="/section/:category" element={<Section />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/holdInfo" element={<HoldInfo />} />
        <Route path="/identity" element={<Identity />} />
        <Route path="/guide" element={<UsgInfo />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/timeTable" element={<TimeTable />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/guideline" element={<Guideline />} />
        <Route path="/online" element={<Online />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div<{ isActive: boolean }>`
  display: flex;
  position: relative;
  background-color: #efeae1;
`;
