import styled from "styled-components";
import Notice1 from "./Notice1";

export default function SubmitPage({
  submitActive,
}: {
  submitActive: boolean;
}) {
  return (
    <Container submitActive={submitActive}>
      <InsideContainer>
        <Notice1 />
      </InsideContainer>
    </Container>
  );
}

const Container = styled.div<{ submitActive: boolean }>`
  display: ${(props) => (props.submitActive ? "flex" : "none")}; // 수정된 부분
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.65);
  z-index: ${(props) => (props.submitActive ? "50" : "1")};
  backdrop-filter: blur(20px);
`;

const InsideContainer = styled.div`
  width: 50%;
  height: 50%;
  overflow: auto;
  margin: 20% auto auto auto;

  color: white;
`;
