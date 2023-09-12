import styled from "styled-components";
import MobileHeader from "../components/MobileHeader";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";

export default function Section() {
  return (
    <Container>
      <Nav />
      <MobileNav />
      <MobileHeader />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
