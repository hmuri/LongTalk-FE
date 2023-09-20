import styled from "styled-components";

export default function PCSection() {
  return (
    <Container>
      <ColorBox style={{ backgroundColor: "#F1AB85" }}></ColorBox>
      <ColorBox style={{ backgroundColor: "#CB7FB4" }}></ColorBox>
      <ColorBox style={{ backgroundColor: "#AFBFDB" }}></ColorBox>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: calc(86% + 12px);
  position: fixed;
  bottom: 0;
  background-color: white;
`;

const ColorBox = styled.div`
  width: 100%;
  height: 33.333%;
`;
