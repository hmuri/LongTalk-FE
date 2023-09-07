import styled from "styled-components";
import Nav from "../components/Nav";

export default function Main() {
  return (
    <Container>
      <Nav />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f8a13a;
`;
