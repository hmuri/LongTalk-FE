import styled from "styled-components";
import Notice1 from "./Notice1";
import { useRecoilState } from "recoil";
import { submitActiveState } from "../recoil";
import CloseSquare from "../assets/icon/Close_square.png";

export default function SubmitPage() {
  const [submitActive, setSubmitActive] = useRecoilState(submitActiveState);
  const handleClose = () => {
    setSubmitActive(false);
  };

  return (
    <Container submitActive={submitActive}>
      {submitActive && <CloseButton onClick={handleClose} src={CloseSquare} />}
      <SubmitBtn href="https://forms.gle/YYD2PaVN6H2X7XaR8">
        영화 출품하기
      </SubmitBtn>
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
  width: 60%;
  height: 70%;
  overflow: auto;
  ::-webkit-scrollbar {
    background-color: transparent; // 배경색 투명
    color: grey;
  }

  scrollbar-color: transparent transparent;
  margin: 7% auto auto auto;

  color: white;
  @media ${(props) => props.theme.mobile} {
    width: 70%;
    height: 70%;
    margin-top: 30%;
  }
`;

const CloseButton = styled.img`
  position: fixed;
  top: 5%;
  right: 5%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 51;
`;

const SubmitBtn = styled.a`
  position: fixed;
  bottom: 10%;
  left: calc(25% - 110px);
  display: flex;
  width: 50%;
  height: 25px;
  padding: 25px 110px;
  justify-content: center;
  color: white;
  align-items: center;
  border-radius: 40px;
  border: 2px solid white;
  background-color: #f1ab85;
  font-family: Pretendard Variable;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  z-index: 6;
  text-decoration: none;
  @media ${(props) => props.theme.mobile} {
    width: 160px;
    height: 3px;
    padding: 25px 70px;
    bottom: 13%;
    left: calc(25% - 55px);
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    background-color: #f1ab85;
    border: 2px solid white;
  }
`;
