import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import mbsec1 from "../assets/image/MbIdtSlider/mbidt1.png";
import mbsec2 from "../assets/image/MbIdtSlider/mbidt2.png";
import mbsec3 from "../assets/image/MbIdtSlider/mbidt3.png";
import mbsec4 from "../assets/image/MbIdtSlider/mbidt4.png";
import mbsec5 from "../assets/image/MbIdtSlider/mbidt5.png";
import mbsec6 from "../assets/image/MbIdtSlider/mbidt6.png";
import mbsec7 from "../assets/image/MbIdtSlider/mbidt7.png";
import mbsec8 from "../assets/image/MbIdtSlider/mbidt8.png";
import mbsec9 from "../assets/image/MbIdtSlider/mbidt9.png";
import mbsec10 from "../assets/image/MbIdtSlider/mbidt10.png";
import ArrowRight from "../assets/icon/ArrowRight.png";
import ArrowLeft from "../assets/icon/ArrowLeft.png";

const SliderContainer = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    overflow: hidden;
    width: 80%;
    height: 80%;
    margin: auto;
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

const Button = styled.button<{ backgroundImage: string }>`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    width: 35px;
    height: 35px;
    position: fixed;
    right: 5%;
    top: 50%;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    border: none;
    border-radius: 100%;
  }
`;

const images = [
  mbsec1,
  mbsec2,
  mbsec3,
  mbsec4,
  mbsec5,
  mbsec6,
  mbsec7,
  mbsec8,
  mbsec9,
  mbsec10,
];

export default function MobileIdt() {
  const marginRightValues = ["-25%", "-10%", "-10%", "0%", "0%", "0%", "0%"];
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
    <SliderContainer>
      <ImageContainer translateValue={-currentIndex * window.innerWidth * 0.8}>
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
      <Button
        onClick={nextSlide}
        backgroundImage={
          currentIndex === images.length - 1 ? ArrowLeft : ArrowRight
        }
      />
    </SliderContainer>
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
