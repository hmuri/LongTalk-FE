import { useState } from "react";
import styled from "styled-components";
import SideBarImg from "../assets/image/SectionSideBar.png";

export default function MobileSection() {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const sectionItem: { [key: string]: string[] } = {
    발단: ["lido", "하하핳하하하하하하"],
    전개: ["eros", "블라블라"],
    위기: ["apricot", "오호오호"],
    결말: ["lido", "우우우우웅ㅇ"],
  };
  return (
    <BodyContainer>
      <SideBarImgBox src={SideBarImg} />
      <Sidebar>
        {Object.keys(sectionItem).map((key: string, index: number) => (
          <>
            <SidebarItem key={index} onClick={() => setSelectedSection(key)}>
              {key}
            </SidebarItem>
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
  );
}

const BodyContainer = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    margin: auto 0 0 0;
    height: 60%;
  }
`;

const SideBarImgBox = styled.img`
  display: flex;
  height: 60%;
  position: fixed;
  left: 0%;
  bottom: 0%;
`;

const Sidebar = styled.div`
  width: 169px;
  height: 100%;
  flex: 0.2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
`;

const SidebarItem = styled.div`
  height: 100%;
  width: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
