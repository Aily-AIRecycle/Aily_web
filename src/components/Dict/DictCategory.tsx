"use client";
import Image from "next/image";
import { StaticImageData } from "next/image";
import arrow from "img/dict/arrow.png";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { categoryPath } from "@/atoms";
import { useEffect } from "react";

export default function DictCategory({
  category,
  img,
  path,
}: {
  category: string;
  img: StaticImageData;
  path: string;
}) {
  const [currCategory, setCurrCategory] = useRecoilState(categoryPath);

  const onClick = () => {
    setCurrCategory(path);
  };

  useEffect(() => {
    console.log(currCategory);
  }, [currCategory]);
  return (
    <>
      <Link
        className="lg:w-4/5 w-[90%] h-14 flex justify-between items-center mb-5 px-4 shadow-md rounded-full"
        href={{
          pathname: `/dict/${path}`,
        }}
        onClick={onClick}
      >
        <div className="flex items-center">
          <Image src={img} alt="gen" width={30} />
          <span className="ml-4">{category}</span>
        </div>
        <Image src={arrow} alt="arrow" width={30} />
      </Link>
      {/* </div> */}
    </>
  );
}
