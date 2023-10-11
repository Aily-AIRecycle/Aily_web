"use client";

import DictCategory from "@/components/Dict/DictCategory";
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

type CategoryList = {
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

function Page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center mb-14">
        {categoryList.map((item, index) => (
          <DictCategory
            category={item.category}
            img={item.img}
            path={item.path}
            key={index}
          />
        ))}
      </div>
    </>
  );
}

export default Page;
