import styled from "styled-components";
import MobileHeader from "../components/MobileHeader";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import MobileSection from "../components/MobileSection";
import PCHeader from "../components/PCHeader";

export default function Section() {
  return (
    <Container>
      <Nav />
      <PCHeader />
      <MobileNav />
      <MobileHeader />
      <MobileDescription></MobileDescription>
      <MobileSection />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #efeae1;
  width: 100vw;
  height: 100vh;
`;

const MobileDescription = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    width: 90%;
    height: 25%;
    margin: 135px auto 20px auto;
    background-color: grey;
  }
`;
