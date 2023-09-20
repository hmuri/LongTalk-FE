import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import PCHeader from "../components/PCHeader";
import MobileHeader from "../components/MobileHeader";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";
import MobileIdt from "../components/MobileIdt";
import Identity1 from "../assets/image/IdentitySlider/Identity1.png";
import Identity2 from "../assets/image/IdentitySlider/Identity2.png";
import Identity3 from "../assets/image/IdentitySlider/Identity3.png";
import Identity4 from "../assets/image/IdentitySlider/Identity4.png";
import Identity5 from "../assets/image/IdentitySlider/Identity5.png";
import Identity6 from "../assets/image/IdentitySlider/Identity6.png";
import Identity7 from "../assets/image/IdentitySlider/Identity7.png";
import Identity8 from "../assets/image/IdentitySlider/Identity8.png";

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 80%;
  height: 65%;
  margin: auto;
  margin-bottom: 10%;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const ImageContainer = styled.div<{ translateValue: number }>`
  display: flex;
  transform: ${(props) => `translateX(${props.translateValue}px)`};
  transition: transform ease-out 0.3s;
`;

const Image = styled.img<{
  marginRight: string;
  isMain: boolean;
  index: number;
}>`
  width: 100%;
  height: 100%;
  margin-right: ${(props) =>
    props.isMain ? props.marginRight : props.index == 5 ? "-10%" : "0%"};
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

const images = [
  Identity1,
  Identity2,
  Identity3,
  Identity4,
  Identity5,
  Identity6,
  Identity7,
  Identity8,
];

export default function Identity() {
  const marginRightValues = [
    "0%",
    "0%",
    "-15%",
    "-8%",
    "-20%",
    "-30%",
    "0%",
    "0%",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Container>
      <Nav />
      <PCHeader />
      <MobileHeader />
      <MobileNav />
      <MobileIdt />
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
                index={index}
              />
            ))}
          </ImageContainer>
        </SliderContainer>
        <Button onClick={nextSlide}>Next</Button>
      </>
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
