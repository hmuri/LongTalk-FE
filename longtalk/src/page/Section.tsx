import styled from "styled-components";
import MobileHeader from "../components/MobileHeader";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import MobileSection from "../components/MobileSection";
import PCHeader from "../components/PCHeader";
import MobileSectionImg from "../assets/image/MobileSection.png";
import PCSection from "../components/PCSection";

export default function Section() {
  return (
    <Container>
      <Nav />
      <PCHeader />
      <MobileNav />
      <MobileHeader />
      <MobileSectionImgBox src={MobileSectionImg} />
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
  height: 100%;
`;

const MobileSectionImgBox = styled.img`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex: 0.3;
    width: 100%;
    height: 30%;
    margin-top: 90px;
    background-color: grey;
  }
`;
