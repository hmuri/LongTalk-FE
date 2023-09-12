import { atom } from "recoil";

export const menuActive = atom<boolean>({
  key: "menuActive",
  default: false,
});
