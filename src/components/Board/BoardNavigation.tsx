"use client";
import useWindowWidth from "@/hooks/use-windowWidth";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const menuTab =
  "w-[100px] h-[50px] text-[#767676] font-medium no-underline flex items-center justify-center text-sm relative z-[2] top-[2px] hover:text-[#f8b195] hover:border-t hover:border-x hover:border-solid hover:border-black hover:bg-white active:text-[#f8b195] active:border-t active:border-x active:border-solid active:border-black active:bg-white";

function BoardNavigation(props: {
  menuData: { name: string; path: string }[];
  pathStart: string;
}) {
  const windowWidth = useWindowWidth();

  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const optionChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSelectedOption(event.target.value);
    router.push(event.target.value);
  };

  return (
    <>
      {windowWidth! > 1000 ? (
        <div className="w-full h-[50px] flex justify-center">
          <ul className="w-4/5 pl-[30px] flex items-center relative">
            {props.menuData.map((menu, index) => (
              <li key={index}>
                <Link
                  href={`/${props.pathStart}/${menu.path}`}
                  className={`${menuTab} ${
                    pathname.split("/")[2] === `${menu.path}`
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
      ) : (
        <select
          value={selectedOption}
          onChange={optionChangeHandler}
          className="w-[100px] h-[30px] border border-solid border-[#d9d9d9] rounded-[20px] bg-white ml-[10%] mb-[10px] pl-[10px]"
        >
          {props.menuData.map((menu, index) => (
            <option key={index} value={`${menu.path}`}>
              {menu.name}
            </option>
          ))}
        </select>
      )}
    </>
  );
}

export default BoardNavigation;
