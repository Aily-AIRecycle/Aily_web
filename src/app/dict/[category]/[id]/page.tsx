"use client";
import Link from "next/link";
import { ARTICLE_DATA } from "@/components/Dict/item";
import { Article } from "@/components/Dict/item";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { categoryList } from "@/components/Dict/item";
import Image, { StaticImageData } from "next/image";

function Page({
  params,
}: {
  params: { category: string; id: string };
}): JSX.Element {
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

  const router = useParams();
  useEffect(() => {
    // console.log(router);
    console.log(params.category);
  });
  const article = ARTICLE_DATA.filter(
    (article: Article) => article.id === params.id
  )[0];

  return (
    <>
      <div className="flex items-center flex-col flex-wrap lg:px-[10%] px-[5%]">
        <div className="w-full flex items-center ml-2 mb-3">
          {img && <Image src={img} width={30} height={30} alt="img" />}
          <span className=" text-lg ml-3">{title}</span>
        </div>
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
