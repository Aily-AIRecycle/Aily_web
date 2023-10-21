"use client";
import Link from "next/link";
import { ItemType } from "@/components/Dict/item";
import { useEffect, useState } from "react";
import { categoryList } from "@/components/Dict/item";
import Image, { StaticImageData } from "next/image";
import axios from "axios";

function Page({
  params,
}: {
  params: { category: string; id: string };
}): JSX.Element {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState<StaticImageData>();
  const [article, setArtice] = useState<ItemType>();

  useEffect(() => {
    console.log(params.category, params.id);
    axios.get(`/board/${params.category}`).then((response) => {
      const articles: ItemType[] = response.data;
      articles.map((data) => {
        if (data.id === parseInt(params.id)) {
          setArtice(data);
        }
      });
      console.log(response.data);
    });
  }, [params.category, params.id]);

  useEffect(() => {
    const matchingCategory = categoryList.find(
      (item) => item.path === params.category
    );

    if (matchingCategory) {
      setTitle(matchingCategory.category);
      setImg(matchingCategory.img);
    }
  }, [params.category]);

  useEffect(() => {
    console.log(params.category);
  }, [params.category]);

  return (
    <>
      {article && (
        <div className="flex items-center flex-col flex-wrap lg:px-[10%] px-[5%]">
          <div className="w-full flex items-center ml-2 mb-3">
            {img && <Image src={img} width={30} height={30} alt="img" />}
            <span className=" text-lg ml-3">{title}</span>
          </div>
          <div className="lg:text-[20px] text-[18px] w-full h-20 border-t-2 border-b border-solid border-t-[#726969] border-b-[#bcbcbc] flex flex-col justify-evenly font-medium">
            {article!.title}
            <ul className="flex">
              <li className="text-[12px] font-light pr-1 mr-1 border-r border-solid border-[#9d9d9d]">
                Aily
              </li>
              <li className="text-[12px] font-light">2023.08.23</li>
            </ul>
          </div>
          <div className="w-full">
            <pre className="w-full h-[500px] lg:px-[10px] py-[30px] mb-[30px] leading-8 border-b-2 border-solid border-[#726969] break-words whitespace-pre-wrap lg:text-[16px] text-[15px]">
              {article!.content}
              <Image
                src={article.imgfile}
                alt="content"
                width={100}
                height={100}
              />
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
      )}
    </>
  );
}

export default Page;
