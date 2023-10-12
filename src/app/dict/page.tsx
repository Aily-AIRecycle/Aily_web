"use client";

import DictCategory from "@/components/Dict/DictCategory";
import { categoryList } from '../../components/Dict/item'

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
