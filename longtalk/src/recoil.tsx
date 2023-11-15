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
    description:
      "⎯  우리는 왜 아픈 걸까, 왜 서로를 할퀴고 깨물어 흉을 내는 걸까? 그 시작을 거슬러 올라가면 결국에는 ‘불통’이다. 마음을 헤아리지 못 해서, 헤아릴 생각을 하지 않아서. \n\n 첫 번째 섹션 ‘발단’에서는 갖은 사회 문제를 진단하기 위하여 소통의 부재라는 사회 문제를 수면 위에 꺼내놓습니다.",
    color: "#AFBFDB",
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
    description:
      "⎯ 사실이란 이따금씩 불쾌하다. 초라한 민낯을 가감 없이 마주하는 일은 누구에게나 큰 결심이 필요한 일일 것이다. 하지만 그것이 문제 해결의 전부이다. 문제를 제대로 맞닥뜨린다면, 그 다음 스텝은 그리 어렵지 않다. \n\n두 번째 섹션 ‘위기’에서는 사실처럼 불쾌할 만큼 찝찝한 작품으로 현실을 직시합니다.",
    color: "#CB7FB4",
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
    description:
      "⎯ 토막 난 우리 관계의 클라이맥스는 다름이 아니라 해결 방안을 모색하는 단계이다. 가장 부드럽고 뾰족한 방법을 찾기 위해 우리는 머리를 맞대고 또 마음을 포개야 한다. \n\n세 번째 섹션 ‘절정’에서는 문제 제기를 넘어 ‘우리’가 취해야 할 액션을 제시합니다.",
    color: "#F1AB85",
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
    description:
      "⎯ 무너진 하늘에서 솟아날 구멍을 찾듯, 비가 억수 같이 쏟아지는 하늘이 갤 날을 기다리듯 우리는 이번에도 희망을 본다. 모서리가 둥글어진 각자의 이야기를 만지작거리며, 하나의 긴 작품으로 이어질 그날을 고대한다. \n\n마지막 네 번째 섹션 ‘결말’에서는 소통을 이루어낼 희망찬 미래를 함께 그립니다.",
    color: "#AFBFDB",
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
    const description =
      moviesByCategory.find((cat) => cat.category === category)?.description ||
      "";
    return description.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  },
});

export const sectionColor = selector({
  key: "sectionColor",
  get: ({ get }) => {
    const category = get(currentCategoryState);
    const movies =
      moviesByCategory.find((cat) => cat.category === category)?.color || "";
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
