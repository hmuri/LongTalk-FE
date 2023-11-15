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
  sectionColor,
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
  const color = useRecoilValue(sectionColor);

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
      <SubHeader color={color}>
        <SectionName>
          <TitleText>{currentCategory}</TitleText>
        </SectionName>
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
              fill={color}
              stroke="black"
              stroke-width="3"
            />
          </svg>
        </CircleContainer>
        <SectionDescription color={color}>
          <DescriptionText>{description}</DescriptionText>
        </SectionDescription>
        <LftBtn onClick={() => changeCategory("left")}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 0.999999 16 0.999999C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z"
              fill="#F1AB85"
            />
            <path
              d="M31.5 16C31.5 24.5604 24.5604 31.5 16 31.5C7.43959 31.5 0.500001 24.5604 0.500001 16C0.5 7.43959 7.43959 0.5 16 0.499999C24.5604 0.499999 31.5 7.43958 31.5 16Z"
              stroke="black"
              stroke-opacity="0.9833"
            />
            <path
              d="M6 16L5.64051 15.6525L5.30458 16L5.64051 16.3475L6 16ZM25.3333 16.5C25.6095 16.5 25.8333 16.2761 25.8333 16C25.8333 15.7239 25.6095 15.5 25.3333 15.5L25.3333 16.5ZM13.3738 7.65249L5.64051 15.6525L6.35949 16.3475L14.0928 8.34751L13.3738 7.65249ZM5.64051 16.3475L13.3738 24.3475L14.0928 23.6525L6.35949 15.6525L5.64051 16.3475ZM6 16.5L25.3333 16.5L25.3333 15.5L6 15.5L6 16.5Z"
              fill="#222222"
            />
          </svg>
        </LftBtn>
        <RgtBtn onClick={() => changeCategory("right")}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 31C7.71573 31 0.999999 24.2843 0.999999 16C1 7.71573 7.71573 0.999999 16 0.999999C24.2843 1 31 7.71573 31 16C31 24.2843 24.2843 31 16 31Z"
              fill="#F1AB85"
            />
            <path
              d="M0.499999 16C0.499999 24.5604 7.43959 31.5 16 31.5C24.5604 31.5 31.5 24.5604 31.5 16C31.5 7.43959 24.5604 0.5 16 0.499999C7.43959 0.499999 0.5 7.43958 0.499999 16Z"
              stroke="black"
              stroke-opacity="0.9833"
            />
            <path
              d="M26 16L26.3595 15.6525L26.6954 16L26.3595 16.3475L26 16ZM6.66667 16.5C6.39052 16.5 6.16667 16.2761 6.16667 16C6.16667 15.7239 6.39052 15.5 6.66667 15.5L6.66667 16.5ZM18.6262 7.65249L26.3595 15.6525L25.6405 16.3475L17.9072 8.34751L18.6262 7.65249ZM26.3595 16.3475L18.6262 24.3475L17.9072 23.6525L25.6405 15.6525L26.3595 16.3475ZM26 16.5L6.66667 16.5L6.66667 15.5L26 15.5L26 16.5Z"
              fill="#222222"
            />
          </svg>
        </RgtBtn>
      </SubHeader>
      <FilmContainer>
        {movies.map((movie, index) => (
          <SubFilmContainer key={index}>
            {index === 1 ? (
              <>
                {" "}
                <MobileStealCutImg
                  src={getImagePath(movie.stealImage)}
                  alt={movie.englishTitle}
                />
                <DescriptionText>
                  <FilmInfoBox>
                    <span>{movie.koreanTitle} </span>
                    <span>({movie.englishTitle}) </span>
                  </FilmInfoBox>
                </DescriptionText>
                <PCStealCutImg
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
                  <DescriptionText>
                    <span>{movie.koreanTitle} </span>
                    <span>({movie.englishTitle}) </span>
                  </DescriptionText>
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
  margin-top: 100px;
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
  background-color: #efeae1;
`;

const SubHeader = styled.div<{ color: string }>`
  display: flex;
  position: relative;
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.color};
  color: black;
  @media ${(props) => props.theme.mobile} {
    height: 100px;
  }
`;

const SectionName = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  flex: 0.4;
  height: 100%;
  z-index: 2;
  border-right: solid 3px black;
  @media ${(props) => props.theme.mobile} {
    flex: 1;
  }
`;

const TitleText = styled.div`
  position: absolute;

  color: var(--black, rgba(0, 0, 0, 0.98));
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 70px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  left: 40%;
  @media ${(props) => props.theme.mobile} {
    font-size: 30px;
    font-weight: 600;
  }
`;

const SectionDescription = styled.div<{ color: string }>`
  display: flex;
  flex: 0.6;

  z-index: 3;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  overflow: scroll;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const DescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 35px;
  width: 100%;
  height: 100%;
  color: var(--black, rgba(0, 0, 0, 0.98));
  font-family: Pretendard Variable;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 42px;
  @media ${(props) => props.theme.mobile} {
    align-items: flex-start;
    font-size: 12px;
    line-height: 17px;
  }
`;

const CircleContainer = styled.div`
  display: flex;
  position: absolute;
  left: calc(40% - 40px);
  bottom: 105.5px;

  z-index: 2;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const FilmContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SubFilmContainer = styled.div`
  display: flex;
  width: 100%;
  height: 420px;
  background-color: #efeae1;
  overflow: hidden;
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    height: 300px;
  }
`;

const StealCutImg = styled.img`
  display: flex;
  flex: 0.65;

  object-fit: fill;
  @media ${(props) => props.theme.mobile} {
    flex: 0.6;
    height: 250px;
  }
`;
const PCStealCutImg = styled.img`
  display: flex;
  flex: 0.65;

  object-fit: fill;
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
const MobileStealCutImg = styled.img`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: flex;
    flex: 0.6;
    height: 250px;
  }
`;

const FilmInfoBox = styled.div`
  display: flex;
  flex: 0.2;
  flex-direction: column;
  @media ${(props) => props.theme.mobile} {
    flex: 0.4;

    width: 100%;
    height: 80px;
  }
`;

const LftBtn = styled.button`
  position: absolute;

  left: 15px;
  bottom: 135px;
  z-index: 4;
  background-color: transparent;
  border: none;
  @media ${(props) => props.theme.mobile} {
    bottom: 30px;
  }
`;

const RgtBtn = styled.button`
  position: absolute;
  border: none;
  right: 15px;
  bottom: 135px;
  z-index: 4;
  background-color: transparent;
  @media ${(props) => props.theme.mobile} {
    bottom: 30px;
  }
`;
