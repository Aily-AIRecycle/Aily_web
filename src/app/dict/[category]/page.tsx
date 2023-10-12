"use client";
import BoardFilter from "@/components/Board/BoardFilter";
import { ARTICLE_DATA } from "@/components/Dict/item";
import { useEffect, useState } from "react";
import { categoryList } from "@/components/Dict/item";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const categoryType: Record<string, number> = {
  gen: 1,
  can: 2,
  pet: 3,
  paper: 4,
  glass: 5,
  vinyl: 6,
  plastic: 7,
  food: 8,
  cloth: 9,
};

function Page({ params }: { params: { category: string } }) {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState<StaticImageData>();
  useEffect(() => {
    const matchingCategory = categoryList.find(
      (item) => item.path === params.category
    );

    if (matchingCategory) {
      setTitle(matchingCategory.category);
      setImg(matchingCategory.img);
    }
  }, [params.category]);

  return (
    <>
      <div className="lg:mx-[10%] lg:mb-[150px] mx-[5%] my-0 pb-[150px]">
        <div className="flex items-center ml-2 mb-3">
          {img && <Image src={img} width={30} height={30} alt="img" />}
          <span className=" text-lg ml-3">{title}</span>
        </div>
        <div className=" min-h-[300px] border-y-2 border-solid border-[#726969]">
          <div className="flex h-[50px] items-center border-b border-solid border-[#d9d9d9] ">
            <div className="lg:w-[10%] lg:flex lg:justify-center hidden">
              No
            </div>
            <div className="lg:w-1/5 lg:flex lg:justify-center hidden">
              카테고리
            </div>
            <div className="lg:w-1/2 flex justify-center w-4/5 lg:text-base text-[15px]">
              제목
            </div>
            <div className="lg:w-[10%] lg:flex lg:justify-center hidden">
              작성자
            </div>
            <div className="w-1/5 flex justify-center lg:text-base text-[15px]">
              작성일
            </div>
          </div>
          <ul className="flex flex-col-reverse">
            <BoardFilter
              boardName={params.category}
              categoryType={categoryType}
              data={ARTICLE_DATA}
            />
          </ul>
        </div>
        <div className="w-full mt-8">
          <Link
            className="w-[100px] h-[50px] bg-[#f0f0f0] flex justify-center items-center rounded-[10px] mb-40"
            href="."
          >
            목록보기
          </Link>
        </div>
      </div>
    </>
  );
}

export default Page;
