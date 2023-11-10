import styled, { css } from "styled-components";
import PCHeader from "../components/PCHeader";
import MobileHeader from "../components/MobileHeader";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function Online() {
  return (
    <Container>
      <Nav />
      <PCHeader />
      <MobileHeader />
      <MobileNav />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <MenuContainer>
          <br />
          <ContentContainer>
            <Title>온라인 상영 안내</Title>
            <br />
            <div>
              <p>12/9 (토) 오픈 예정입니다.</p>
              <br />
            </div>
            <br />
            <br />

            <br />
          </ContentContainer>
        </MenuContainer>
        <Footer />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #efeae1;
  padding-top: 7%;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #afbfdb;
  padding-bottom: 50px;
  flex: 1
  z-index: 7;
  @media ${(props) => props.theme.mobile} {
    width: 100vw;
    position: fixed;
    min-height: 100vh;
    

  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  padding: 8% 0;
  font-size: 20px;
  @media ${(props) => props.theme.mobile} {
    padding: 16% 0;
    font-size: 16px;
  }
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media ${(props) => props.theme.mobile} {
    font-size: 23px;
  }
`;

const GuideBox = styled.div`
  margin-left: 20px;
  font-size: 20px;
  @media ${(props) => props.theme.mobile} {
    margin-left: 0;
    font-size: 16px;
  }
`;

const SubTitle = styled.div`
  margin-top: 30px;
  color: var(--black, rgba(0, 0, 0, 0.98));
  font-family: Pretendard Variable;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
  }
`;
