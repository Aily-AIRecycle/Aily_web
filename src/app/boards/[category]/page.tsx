"use client";
import { ARTICLE_DATA } from "@/components/Board/article";
import BoardFilter from "@/components/Board/BoardFilter";
import { useEffect } from "react";

const categoryType: Record<string, number> = {
  notice: 1,
  "q&a": 2,
  faq: 3,
  suggestion: 4,
};

function Page({ params }: { params: { category: string } }) {
  useEffect(() => {
    console.log(params.category);
  });
  return (
    <>
      <div className="lg:mx-[10%] lg:mb-[150px] mx-[5%] my-0 pb-[150px]">
        <div className="flex h-[50px] items-center border-y border-solid border-t-black border-b-[#d9d9d9]">
          <div className="lg:w-[10%] lg:flex lg:justify-center hidden">No</div>
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
    </>
  );
}

export default Page;
