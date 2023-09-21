import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import PCHeader from "../components/PCHeader";
import MobileHeader from "../components/MobileHeader";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import MobileHoldInfo from "../components/MobileHoldInfo";
import HoldInfo1 from "../assets/image/HoldSlider/HoldInfo1.png";
import HoldInfo2 from "../assets/image/HoldSlider/HoldInfo2.png";
import HoldInfo3 from "../assets/image/HoldSlider/HoldInfo3.png";
import HoldInfo4 from "../assets/image/HoldSlider/HoldInfo4.png";
import Footer from "../components/Footer";

//시간 남으면 스트라이프로 바꾸기

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 80%;
  height: 65%;
  margin: 10% auto auto auto;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const ImageContainer = styled.div<{ translateValue: number }>`
  display: flex;
  transform: ${(props) => `translateX(${props.translateValue}px)`};
  transition: transform ease-out 0.3s;
`;

const Image = styled.img<{ marginRight: string; isMain: boolean }>`
  width: 100%;
  height: 100%;
  margin-right: ${(props) => (props.isMain ? props.marginRight : "0%")};
`;

const Button = styled.button`
  display: flex;
  width: 10px;
  height: 10px;
  position: fixed;
  right: 5%;
  top: 50%;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const images = [HoldInfo1, HoldInfo2, HoldInfo3, HoldInfo4];

export default function HoldInfo() {
  const marginRightValues = ["-25%", "-7%", "-40%", "0%"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <Container>
      <Nav />
      <PCHeader />
      <MobileHeader />
      <MobileNav />
      <MobileHoldInfo />
      <>
        <SliderContainer>
          <ImageContainer
            translateValue={-currentIndex * window.innerWidth * 0.8}
          >
            {images.map((image, index) => (
              <Image
                src={image}
                alt=""
                key={index}
                marginRight={marginRightValues[index] || "0%"}
                isMain={index === currentIndex}
              />
            ))}
          </ImageContainer>
        </SliderContainer>
        <Button onClick={nextSlide}>Next</Button>
      </>
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #efeae1;
  overflow: hidden;
`;
