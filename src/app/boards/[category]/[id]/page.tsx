"use client";
import Link from "next/link";
import classes from "@/app/boards/[category]/[id]/BoardContent.module.scss";
import { ARTICLE_DATA } from "@/components/Board/article";
import { Article } from "@/components/Board/article";

function Page({ params }: { params: { id: string } }): JSX.Element {
  const article = ARTICLE_DATA.filter(
    (article: Article) => article.id === params.id
  )[0];
  return (
    <>
      <div className="flex items-center flex-col flex-wrap lg:px-[10%] px-[5%]">
        <div className="lg:text-[20px] text-[18px] w-full h-20 border-t-2 border-b border-solid border-t-[#726969] border-b-[#bcbcbc] flex flex-col justify-evenly font-medium">
          {article.title}
          <ul className="flex">
            <li className="text-[12px] font-light pr-1 mr-1 border-r border-solid border-[#9d9d9d]">
              {article.writer}
            </li>
            <li className="text-[12px] font-light">{article.date}</li>
          </ul>
        </div>
        <div className="w-full">
          <pre className="w-full h-[500px] lg:px-[10px] py-[30px] mb-[30px] leading-8 border-b-2 border-solid border-[#726969] break-words whitespace-pre-wrap lg:text-[16px] text-[15px]">
            {article.content}
          </pre>
        </div>
        <div className="w-full">
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
