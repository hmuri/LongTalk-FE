import styled from "styled-components";
import MobileHeader from "../components/MobileHeader";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import PCHeader from "../components/PCHeader";
import Footer from "../components/Footer";
import { useRecoilValue, useRecoilState } from "recoil";
import {
  currentCategoryState,
  filteredMoviesSelector,
  descriptionSelector,
} from "../recoil";

import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import P1 from "../assets/image/poster/p_1.png";
import P2 from "../assets/image/poster/p_2.png";
import P3 from "../assets/image/poster/p_3.png";
import P4 from "../assets/image/poster/p_4.png";
import P5 from "../assets/image/poster/p_5.png";
import P6 from "../assets/image/poster/p_6.png";
import P7 from "../assets/image/poster/p_7.png";
import P8 from "../assets/image/poster/p_8.png";
import P9 from "../assets/image/poster/p_9.png";
import P10 from "../assets/image/poster/p_10.png";
import P11 from "../assets/image/poster/p_11.png";
import P12 from "../assets/image/poster/p_12.png";

import S1 from "../assets/image/stealcut/s_1.png";
import S2 from "../assets/image/stealcut/s_2.png";
import S3 from "../assets/image/stealcut/s_3.png";
import S4 from "../assets/image/stealcut/s_4.png";
import S5 from "../assets/image/stealcut/s_5.png";
import S6 from "../assets/image/stealcut/s_6.png";
import S7 from "../assets/image/stealcut/s_7.png";
import S8 from "../assets/image/stealcut/s_8.png";
import S9 from "../assets/image/stealcut/s_9.png";
import S10 from "../assets/image/stealcut/s_10.png";
import S11 from "../assets/image/stealcut/s_11.png";
import S12 from "../assets/image/stealcut/s_12.png";

export default function Section() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [currentCategory, setCurrentCategory] =
    useRecoilState(currentCategoryState);
  const movies = useRecoilValue(filteredMoviesSelector);
  const description = useRecoilValue(descriptionSelector);

  useEffect(() => {
    if (category) {
      setCurrentCategory(category);
    }
  }, [category, setCurrentCategory]);

  const changeCategory = (direction: string) => {
    const categories = ["발단", "위기", "절정", "결말"];
    const currentIndex = categories.indexOf(currentCategory);
    let nextIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;

    if (nextIndex < 0) nextIndex = categories.length - 1;
    if (nextIndex >= categories.length) nextIndex = 0;

    navigate(`/section/${categories[nextIndex]}`);
  };

  const getImagePath = (imageName: string): string | undefined => {
    const imageMap: Record<string, string> = {
      P1: P1,
      P2: P2,
      P3: P3,
      P4: P4,
      P5: P5,
      P6: P6,
      P7: P7,
      P8: P8,
      P9: P9,
      P10: P10,
      P11: P11,
      P12: P12,
      S1: S1,
      S2: S2,
      S3: S3,
      S4: S4,
      S5: S5,
      S6: S6,
      S7: S7,
      S8: S8,
      S9: S9,
      S10: S10,
      S11: S11,
      S12: S12,
    };

    return imageMap[imageName] || undefined;
  };

  return (
    <Container>
      <Nav />
      <PCHeader />
      <MobileNav />
      <MobileHeader />
      <SubHeader>
        <SectionName>{currentCategory}</SectionName>
        <CircleContainer>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="89"
            height="89"
            viewBox="0 0 89 89"
            fill="none"
          >
            <circle
              cx="44.5"
              cy="44.5"
              r="43"
              fill="#D9D9D9"
              stroke="black"
              stroke-width="3"
            />
          </svg>
        </CircleContainer>
        <SectionDescription>{description}</SectionDescription>
        <LftBtn onClick={() => changeCategory("left")}></LftBtn>
        <RgtBtn onClick={() => changeCategory("right")}></RgtBtn>
      </SubHeader>
      <FilmContainer>
        {movies.map((movie, index) => (
          <SubFilmContainer key={index}>
            {index === 1 ? (
              <>
                <FilmInfoBox>
                  {movie.koreanTitle}
                  <br />
                  {movie.englishTitle}
                </FilmInfoBox>
                <StealCutImg
                  src={getImagePath(movie.stealImage)}
                  alt={movie.englishTitle}
                />
              </>
            ) : (
              <>
                <StealCutImg
                  src={getImagePath(movie.stealImage)}
                  alt={movie.englishTitle}
                />
                <FilmInfoBox>
                  {movie.koreanTitle}
                  <br />
                  {movie.englishTitle}
                </FilmInfoBox>
              </>
            )}
          </SubFilmContainer>
        ))}
      </FilmContainer>

      <Footer />
    </Container>
  );
}

const Container = styled.div`
  margin-top: 110px;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
  background-color: #efeae1;
`;

const SubHeader = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 300px;
  background-color: orange;
  color: black;
`;

const SectionName = styled.div`
  display: flex;
  flex: 0.4;
  height: 100%;
  border-right: solid 1px black;
  z-index: 3;
`;

const SectionDescription = styled.div`
  display: flex;
  flex: 0.6;
  height: 100%;
  border-right: solid 1px black;
  z-index: 5;
  background-color: red;
`;

const CircleContainer = styled.div`
  display: flex;
  position: absolute;
  left: calc(40% - 40px);
  bottom: 105.5px;

  z-index: 4;
`;

const FilmContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
const SubFilmContainer = styled.div`
  display: flex;
  width: 100%;
  height: 420px;
  background-color: #efeae1;
  border: solid 1px red;
  overflow: hidden;
`;

const StealCutImg = styled.img`
  display: flex;
  flex: 0.7;
  border-right: solid 1px black;
  object-fit: contain;
`;

const FilmInfoBox = styled.div`
  display: flex;
  flex: 0.3;
`;

const LftBtn = styled.button`
  position: absolute;
  height: 3px;
  width: 3px;
  left: 15px;
  bottom: 148px;
  z-index: 10;
  background-color: black;
`;

const RgtBtn = styled.button`
  position: absolute;
  height: 3px;
  width: 3px;
  right: 15px;
  bottom: 148px;
  z-index: 10;
  background-color: black;
`;
