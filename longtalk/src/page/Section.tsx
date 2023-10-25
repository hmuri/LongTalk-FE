import styled from "styled-components";
import MobileHeader from "../components/MobileHeader";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import MobileSection from "../components/MobileSection";
import PCHeader from "../components/PCHeader";
import MobileSectionImg from "../assets/image/MobileSection.png";
import PCSection from "../components/PCSection";
import Footer from "../components/Footer";

export default function Section() {
  return (
    <Container>
      <Nav />
      <PCHeader />
      <MobileNav />
      <MobileHeader />

      <MobileSection />
      <PCSection />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #efeae1;
  width: 100%;
`;
