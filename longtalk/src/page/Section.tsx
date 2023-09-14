import styled from "styled-components";
import MobileHeader from "../components/MobileHeader";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import { useState } from "react";

export default function Section() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const sectionItem: { [key: string]: string[] } = {
    발단: ["lido", "하하핳하하하하하하"],
    전개: ["eros", "블라블라"],
    위기: ["apricot", "오호오호"],
    결말: ["lido", "우우우우웅ㅇ"],
  };
  return (
    <Container>
      <Nav />
      <MobileNav />
      <MobileHeader />
      <MobileDescription></MobileDescription>
      <BodyContainer>
        <Sidebar>
          {Object.keys(sectionItem).map((key: string, index: number) => (
            <>
              <SidebarItem key={index} onClick={() => setSelectedSection(key)}>
                {key}
              </SidebarItem>
              <ContentContainer color={sectionItem[0]}></ContentContainer>
            </>
          ))}
        </Sidebar>
        {selectedSection ? (
          <ContentContainer>
            <ContentText>{sectionItem[selectedSection][1]}</ContentText>
          </ContentContainer>
        ) : (
          <ContentContainer>{/* Default or Empty content */}</ContentContainer>
        )}
      </BodyContainer>
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

const BodyContainer = styled.div`
  display: flex;
  margin: auto 0 0 0;
  height: 59%;
`;

const Sidebar = styled.div`
  height: 100%;
  flex: 0.2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
`;

const SidebarItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const ContentContainer = styled.div`
  flex: 0.8;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color || "#fff"};
`;

const ContentText = styled.p`
  font-size: 24px;
`;
