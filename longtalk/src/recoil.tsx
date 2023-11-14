import { atom, selector } from "recoil";

export const menuActive = atom<boolean>({
  key: "menuActive",
  default: false,
});
export const submitActiveState = atom({
  key: "submitActiveState",
  default: true,
});

const moviesByCategory = [
  {
    category: "발단",
    desciprtion: "발단입니당",
    films: [
      {
        koreanTitle: "벽",
        englishTitle: "Wall",
        posterImage: "P1",
        stealImage: "S1",
        director: "Director 1",
        year: 2021,
        country: "South Korea",
        duration: "100 min",
        description: "Description 1",
      },
      {
        koreanTitle: "수능을 치려면",
        englishTitle: "Zombie-Free Test Day",
        posterImage: "P2",
        stealImage: "S2",
        director: "Director 2",
        year: 2022,
        country: "South Korea",
        duration: "120 min",
        description: "Description 2",
      },
      {
        koreanTitle: "한낮의 침입자",
        englishTitle: "Beyond the Veil",
        posterImage: "P3",
        stealImage: "S3",
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
    desciprtion: "위기입니당",
    films: [
      {
        koreanTitle: "껌벅",
        englishTitle: "Flicker",
        posterImage: "P4",
        stealImage: "S4",
        director: "Director 4",
        year: 2021,
        country: "South Korea",
        duration: "95 min",
        description: "Description 4",
      },
      {
        koreanTitle: "워킹맘",
        englishTitle: "Working Mom",
        posterImage: "P5",
        stealImage: "S5",
        director: "Director 5",
        year: 2022,
        country: "South Korea",
        duration: "105 min",
        description: "Description 5",
      },
      {
        koreanTitle: "당신은 안드로이드입니까",
        englishTitle: "Are You an Android?",
        posterImage: "P6",
        stealImage: "S6",
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
    desciprtion: "절정입니당",
    films: [
      {
        koreanTitle: "모서리의 쓸모",
        englishTitle: "The Corner's Use",
        posterImage: "P7",
        stealImage: "S7",
        director: "Director 7",
        year: 2021,
        country: "South Korea",
        duration: "100 min",
        description: "Description 7",
      },
      {
        koreanTitle: "보조바퀴",
        englishTitle: "Training Wheels",
        posterImage: "P8",
        stealImage: "S8",
        director: "Director 8",
        year: 2022,
        country: "South Korea",
        duration: "90 min",
        description: "Description 8",
      },
      {
        koreanTitle: "그리고 집",
        englishTitle: "I’m Here",
        posterImage: "P9",
        stealImage: "S9",
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
    desciprtion: "결말입니당",
    films: [
      {
        koreanTitle: "아빠가 자꾸 살아 돌아와",
        englishTitle: "Dad Keeps Coming Back Alive",
        posterImage: "P10",
        stealImage: "S10",
        director: "Director 10",
        year: 2021,
        country: "South Korea",
        duration: "95 min",
        description: "Description 10",
      },
      {
        koreanTitle: "언니를 기억해",
        englishTitle: "Remember Our Sister",
        posterImage: "P11",
        stealImage: "S11",
        director: "Director 11",
        year: 2022,
        country: "South Korea",
        duration: "105 min",
        description: "Description 11",
      },
      {
        koreanTitle: "202 201",
        englishTitle: "202 201",
        posterImage: "P12",
        stealImage: "S12",
        director: "Director 12",
        year: 2023,
        country: "South Korea",
        duration: "120 min",
        description: "Description 12",
      },
    ],
  },
];

export const currentCategoryState = atom({
  key: "currentCategoryState",
  default: "발단",
});
export const descriptionSelector = selector({
  key: "descriptionSelector",
  get: ({ get }) => {
    const category = get(currentCategoryState);
    const movies =
      moviesByCategory.find((cat) => cat.category === category)?.desciprtion ||
      "";
    return movies;
  },
});
export const filteredMoviesSelector = selector({
  key: "filteredMoviesSelector",
  get: ({ get }) => {
    const category = get(currentCategoryState);
    const movies =
      moviesByCategory.find((cat) => cat.category === category)?.films || [];
    return movies;
  },
});
