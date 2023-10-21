import gen from "img/dict/gen.png";
import can from "img/dict/can.png";
import pet from "img/dict/pet.png";
import paper from "img/dict/paper.png";
import glass from "img/dict/glass.png";
import vinly from "img/dict/vinyl.png";
import plastic from "img/dict/plastic.png";
import food from "img/dict/garbage.png";
import cloth from "img/dict/cloth.png";
import { StaticImageData } from "next/image";

export type ItemType = {
  id: number;
  number: string;
  title: string;
  content: string;
  imgfile: string;
};

export type Article = {
  id: string;
  category: string;
  category_id: number;
  title: string;
  writer: string;
  content: string;
  date: string;
};

export const menuData = [
  { name: "전체", path: "all" },
  { name: "일반쓰레기", path: "gen" },
  { name: "캔류 · 고철", path: "can" },
  { name: "페트", path: "pet" },
  { name: "종이 · 종이팩", path: "paper" },
  { name: "유리", path: "glass" },
  { name: "비닐", path: "vinyl" },
  { name: "플라스틱", path: "plastic" },
  { name: "음식물", path: "food" },
  { name: "의류 · 원단", path: "cloth" },
];

export type CategoryList = {
  category: string;
  img: StaticImageData;
  path: string;
};

export const categoryList: CategoryList[] = [
  { category: "일반쓰레기", img: gen, path: "gen" },
  { category: "캔류 · 고철", img: can, path: "can" },
  { category: "페트", img: pet, path: "pet" },
  { category: "종이 · 종이팩", img: paper, path: "paper" },
  { category: "유리", img: glass, path: "glass" },
  { category: "비닐", img: vinly, path: "vinyl" },
  { category: "플라스틱", img: plastic, path: "plastic" },
  { category: "음식물", img: food, path: "food" },
  { category: "의류 · 원단", img: cloth, path: "cloth" },
];
