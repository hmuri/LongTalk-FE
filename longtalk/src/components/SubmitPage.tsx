import styled from "styled-components";
import Logo from "../assets/image/logo_s.png";
import { useRecoilState } from "recoil";
import { submitActiveState } from "../recoil";
import CloseSquare from "../assets/icon/Close_square.png";
import { Link } from "react-router-dom";

export default function SubmitPage() {
  const [submitActive, setSubmitActive] = useRecoilState(submitActiveState);
  const handleClose = () => {
    setSubmitActive(false);
  };

  return (
    <Container submitActive={submitActive}>
      {submitActive && <CloseButton onClick={handleClose} src={CloseSquare} />}
      <InsideContainer>
        <LogoImg src={Logo}></LogoImg>
        <TitleBox>제1회 소통영화제 「롱톡」 당선작 발표</TitleBox>
        <TextBox>제1회 소통영화제 롱톡 당선을 발표합니다.</TextBox>
        <CategoryBox>
          <b>발단</b>
          <ContentBox>
            <div>벽</div>
            <div>수능을 치려면</div>
            <div>한낮의 침입자</div>
          </ContentBox>
        </CategoryBox>
        <CategoryBox>
          <b>위기</b>
          <ContentBox>
            <div>껌벅</div>
            <div>워킹맘</div>
            <div>당신은 안드로이드입니까</div>
          </ContentBox>
        </CategoryBox>
        <CategoryBox>
          <b>절정</b>
          <ContentBox>
            <div>모서리의 쓸모</div>
            <div>보조바퀴</div>
            <div>그리고 집</div>
          </ContentBox>
        </CategoryBox>
        <CategoryBox>
          <b>결말</b>
          <ContentBox>
            <div>아빠가 자꾸 살아 돌아와</div>
            <div>언니를 기억해</div>
            <div>202 201</div>
          </ContentBox>
        </CategoryBox>
        <TextBox style={{ marginTop: "20px" }}>
          자세한 사항은 공지사항에서 확인할 수 있습니다.
          <br /> 출품해 주신 모든 분께 감사드립니다.
        </TextBox>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <Button>
            <Link
              to="/notice"
              style={{ color: "white", border: "none", textDecoration: "none" }}
            >
              공지사항 바로가기
            </Link>
          </Button>
        </div>
      </InsideContainer>
    </Container>
  );
}

const Container = styled.div<{ submitActive: boolean }>`
  display: ${(props) => (props.submitActive ? "flex" : "none")}; // 수정된 부분
  position: fixed;
  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.2);
  z-index: ${(props) => (props.submitActive ? "50" : "1")};
  backdrop-filter: blur(20px);
`;

const InsideContainer = styled.div`
  width: 700px;
  height: 550px;
  overflow: auto;
  ::-webkit-scrollbar {
    background-color: transparent; // 배경색 투명
    color: grey;
  }
  background: radial-gradient(
    146.75% 123.36% at 55.76% 37.06%,
    #efeae1 37.67%,
    #f1ab85 100%
  );
  border-radius: 20px;
  scrollbar-color: transparent transparent;
  margin: auto;

  @media ${(props) => props.theme.mobile} {
    width: 80%;
    height: 70%;
    margin: auto;
  }
`;

const TextBox = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  text-align: center;
  margin-bottom: 20px;

  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
  }
`;

const LogoImg = styled.img`
  display: flex;
  position: relative;
  top: 10px;
  margin: 6% auto 30px auto;
  @media ${(props) => props.theme.mobile} {
    margin-bottom: 15px;
  }
`;
const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  color: #000;
  padding: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  @media ${(props) => props.theme.mobile} {
    font-size: 17px;
    padding-bottom: 2px;
  }
`;

const CategoryBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  justify-content: center;

  b {
    display: flex;
    justify-content: center;
    justify-content: center;
    width: 80px;
    margin-left: 120px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 15px;
    flex-direction: column;
    b {
      margin-left: 0;
    }
  }
`;

const ContentBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  color: #000;
  margin-left: 40px;

  text-align: center;
  font-family: Pretendard Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;

  > div {
    text-align: center;
    line-height: 16px;
    justify-content: center;
    padding: 0 5px;
    display: inline-block;
    border-right: solid 1.5px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
    margin-left: 0;
    line-height: 19px;
    flex-direction: column; // 이 부분은 수직 배열을 위해 추가
    justify-content: flex-start;

    > div {
      margin-bottom: 0px; // 각 항목 간의 수직 간격 조절
      border-right: none;
    }
  }
`;

const Button = styled.button`
  border-radius: 40px;
  border: 1px solid var(--white, #fff);
  background: var(--lido, #afbfdb);
  color: white;
  display: flex;
  font-size: 18px;
  justify-content: center;
  padding: 1% 5%;
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
