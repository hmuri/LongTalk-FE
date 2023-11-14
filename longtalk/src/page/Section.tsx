import styled from "styled-components";
import MobileHeader from "../components/MobileHeader";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import PCHeader from "../components/PCHeader";
import Footer from "../components/Footer";
import { useRecoilValue } from "recoil";
import {
  currentCategoryState,
  filteredMoviesSelector,
  descriptionSelector,
} from "../recoil";

export default function Section() {
  const currentCategory = useRecoilValue(currentCategoryState);
  const movies = useRecoilValue(filteredMoviesSelector);
  const description = useRecoilValue(descriptionSelector);
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
      </SubHeader>
      <FilmContainer>
        <SubFilmContainer>
          <StealCutImg />
          <FilmInfoBox></FilmInfoBox>
        </SubFilmContainer>
        <SubFilmContainer>
          <FilmInfoBox></FilmInfoBox>
          <StealCutImg />
        </SubFilmContainer>
        <SubFilmContainer>
          <StealCutImg />
          <FilmInfoBox></FilmInfoBox>
        </SubFilmContainer>
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
