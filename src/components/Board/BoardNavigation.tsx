"use client";
import useWindowWidth from "@/hooks/use-windowWidth";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const menuData = [
  { name: "전체", path: "all" },
  { name: "공지사항", path: "notice" },
  { name: "Q&A", path: "q&a" },
  { name: "FAQ", path: "faq" },
  { name: "건의사항", path: "suggestion" },
];

const menuTab =
  "w-[100px] h-[50px] text-[#767676] font-medium no-underline flex items-center justify-center text-sm relative z-[2] top-px hover:text-[#f8b195] hover:border-t hover:border-x hover:border-solid hover:border-black hover:bg-white active:text-[#f8b195] active:border-t active:border-x active:border-solid active:border-black active:bg-white";

function BoardNavigation() {
  const windowWidth = useWindowWidth();

  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const optionChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
    router.push(event.target.value);
  };

  let header;
  if (windowWidth === null) {
  } else if (windowWidth > 1000) {
    header = (
      <div className="w-full h-[50px] flex justify-center">
        <ul className="w-4/5 pl-[30px] flex items-center relative">
          {menuData.map((menu, index) => (
            <li key={index}>
              <Link
                href={`/boards/${menu.path}`}
                className={`${menuTab} ${
                  pathname === `/boards/${menu.path}`
                    ? "text-[#f8b195] border-t border-x border-solid border-black bg-white"
                    : ""
                }`}
              >
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    header = (
      <select
        value={selectedOption}
        onChange={optionChangeHandler}
        className="w-[100px] h-[30px] border border-solid border-[#d9d9d9] rounded-[20px] bg-white ml-[10%] mb-[10px] pl-[10px]"
      >
        {menuData.map((menu, index) => (
          <option key={index} value={`/boards/${menu.path}`}>
            {menu.name}
          </option>
        ))}
      </select>
    );
  }
  return (
    <>
      <div className="flex justify-center items-center w-full lg:h-[400px] h-[200px]">
        <ul className="w-4/5">
          <li className="lg:text-[50px] text-[30px]">AiLY의 모든 것</li>
          <li className="lg:text-[20px] text-[15px]">무엇이든 물어보세요</li>
        </ul>
      </div>
      <>{header}</>
    </>
  );
}

export default BoardNavigation;
