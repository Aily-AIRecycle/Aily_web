import { atom } from "recoil";

export const categoryPath = atom<string>({
  key: "category",
  default: "",
});
