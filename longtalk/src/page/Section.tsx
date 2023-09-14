import styled from "styled-components";
import MobileHeader from "../components/MobileHeader";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import MobileSection from "../components/MobileSection";

export default function Section() {
  return (
    <Container>
      <Nav />
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
  width: 100vw;
  height: 100vh;
`;

const MobileDescription = styled.div`
  display: flex;
  width: 90%;
  height: 25%;
  margin: 135px auto 20px auto;
  background-color: grey;
`;
