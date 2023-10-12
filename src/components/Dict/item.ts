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

export type Article = {
  id: string;
  category: string;
  category_id: number;
  title: string;
  writer: string;
  content: string;
  date: string;
};

export const ARTICLE_DATA: Article[] = [
  {
    id: "1",
    category: "음식물",
    category_id: 8,
    title: "치킨(닭 뼈)",
    writer: "Aily",
    content:
      "안녕하세요, Aily 입니다.\n치킨 드시고 남은 닭 뼈는 일반쓰레기로 버려주세요.",
    date: "2023.07.12",
  },
  {
    id: "2",
    category: "종이 · 종이팩",
    category_id: 4,
    title: "책",
    writer: "Aily",
    content:
      "안녕하세요, Aily 입니다.\n\n물이나 이물질을 묻지 않게 하고 구겨지지 않게 배출합니다.\n양장본 책은 겉표지(일반쓰레기)와 속지(종이)를 분리해서 배출합니다.",
    date: "2023.07.17",
  },
  
  {
    id: "3",
    category: "플라스틱",
    category_id: 7,
    title: "화장품(스틱)",
    writer: "Aily",
    content:
      "안녕하세요, Aily 입니다.\n\n립스틱, 립밤, 선스틱은 냉동실에 2시간 이상 얼려두면 스틱과 스틱 안에 남아있는 내용물을 깔끔하게 분리할 수 있어요.\n남은 내용물(화장품)은 일반쓰레기(종량제봉투)로 버리고, 뚜껑과 용기(스틱)는 플라스틱 등 재질에 맞게 분리 배출해요.",
    date: "2023.07.26",
  },
];

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

export const categoryList : CategoryList[] = [
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
