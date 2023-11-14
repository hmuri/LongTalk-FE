import styled from "styled-components";
import MobileHeader from "../components/MobileHeader";
import Nav from "../components/Nav";
import MobileNav from "../components/MobileNav";
import PCHeader from "../components/PCHeader";
import Footer from "../components/Footer";

export default function Section() {
  const moviesByCategory = [
    {
      category: "발단",
      films: [
        {
          koreanTitle: "벽",
          englishTitle: "Wall",
          posterImage: "poster_url_1",
          stillImage: "still_image_url_1",
          director: "Director 1",
          year: 2021,
          country: "South Korea",
          duration: "100 min",
          description: "Description 1",
        },
        {
          koreanTitle: "수능을 치려면",
          englishTitle: "Zombie-Free Test Day",
          posterImage: "poster_url_2",
          stillImage: "still_image_url_2",
          director: "Director 2",
          year: 2022,
          country: "South Korea",
          duration: "120 min",
          description: "Description 2",
        },
        {
          koreanTitle: "한낮의 침입자",
          englishTitle: "Beyond the Veil",
          posterImage: "poster_url_3",
          stillImage: "still_image_url_3",
          director: "Director 3",
          year: 2023,
          country: "South Korea",
          duration: "110 min",
          description: "Description 3",
        },
      ],
    },
    {
      category: "위기",
      films: [
        {
          koreanTitle: "껌벅",
          englishTitle: "Flicker",
          posterImage: "poster_url_4",
          stillImage: "still_image_url_4",
          director: "Director 4",
          year: 2021,
          country: "South Korea",
          duration: "95 min",
          description: "Description 4",
        },
        {
          koreanTitle: "워킹맘",
          englishTitle: "Working Mom",
          posterImage: "poster_url_5",
          stillImage: "still_image_url_5",
          director: "Director 5",
          year: 2022,
          country: "South Korea",
          duration: "105 min",
          description: "Description 5",
        },
        {
          koreanTitle: "당신은 안드로이드입니까",
          englishTitle: "Are You an Android?",
          posterImage: "poster_url_6",
          stillImage: "still_image_url_6",
          director: "Director 6",
          year: 2023,
          country: "South Korea",
          duration: "115 min",
          description: "Description 6",
        },
      ],
    },
    {
      category: "절정",
      films: [
        {
          koreanTitle: "모서리의 쓸모",
          englishTitle: "The Corner's Use",
          posterImage: "poster_url_7",
          stillImage: "still_image_url_7",
          director: "Director 7",
          year: 2021,
          country: "South Korea",
          duration: "100 min",
          description: "Description 7",
        },
        {
          koreanTitle: "보조바퀴",
          englishTitle: "Training Wheels",
          posterImage: "poster_url_8",
          stillImage: "still_image_url_8",
          director: "Director 8",
          year: 2022,
          country: "South Korea",
          duration: "90 min",
          description: "Description 8",
        },
        {
          koreanTitle: "그리고 집",
          englishTitle: "I’m Here",
          posterImage: "poster_url_9",
          stillImage: "still_image_url_9",
          director: "Director 9",
          year: 2023,
          country: "South Korea",
          duration: "110 min",
          description: "Description 9",
        },
      ],
    },
    {
      category: "결말",
      films: [
        {
          koreanTitle: "아빠가 자꾸 살아 돌아와",
          englishTitle: "Dad Keeps Coming Back Alive",
          posterImage: "poster_url_10",
          stillImage: "still_image_url_10",
          director: "Director 10",
          year: 2021,
          country: "South Korea",
          duration: "95 min",
          description: "Description 10",
        },
        {
          koreanTitle: "언니를 기억해",
          englishTitle: "Remember Our Sister",
          posterImage: "poster_url_11",
          stillImage: "still_image_url_11",
          director: "Director 11",
          year: 2022,
          country: "South Korea",
          duration: "105 min",
          description: "Description 11",
        },
        {
          koreanTitle: "202 201",
          englishTitle: "202 201",
          posterImage: "poster_url_12",
          stillImage: "still_image_url_12",
          director: "Director 12",
          year: 2023,
          country: "South Korea",
          duration: "120 min",
          description: "Description 12",
        },
      ],
    },
  ];

  return (
    <Container>
      <Nav />
      <PCHeader />
      <MobileNav />
      <MobileHeader />
      <SubHeader>
        <SectionName>발단</SectionName>
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
        <SectionDescription>미나어리ㅏㄴ머이ㅏ러</SectionDescription>
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
