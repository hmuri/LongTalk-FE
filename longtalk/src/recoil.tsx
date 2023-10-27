import { atom } from "recoil";

export const menuActive = atom<boolean>({
  key: "menuActive",
  default: false,
});
export const submitActiveState = atom({
  key: "submitActiveState",
  default: true,
});
