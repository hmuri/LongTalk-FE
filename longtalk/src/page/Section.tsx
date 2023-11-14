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

    navigate(`/${categories[nextIndex]}`);
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
        <button onClick={() => changeCategory("left")}>왼쪽</button>
        <button onClick={() => changeCategory("right")}>오른쪽</button>
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
                <StealCutImg>{movie.stealImage}</StealCutImg>
              </>
            ) : (
              <>
                <StealCutImg>{movie.stealImage}</StealCutImg>
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
  background-color: grey;
  flex-direction: column;
`;
const SubFilmContainer = styled.div`
  display: flex;
  width: 100%;
  height: 420px;
  background-color: white;
  border: solid 1px red;
`;

const StealCutImg = styled.img`
  display: flex;
  flex: 0.7;
  border-right: solid 1px black;
`;

const FilmInfoBox = styled.div`
  display: flex;
  flex: 0.3;
`;
