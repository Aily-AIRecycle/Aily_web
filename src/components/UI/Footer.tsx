// 필요한 타입 정의
type Team = {
  teamName: string;
  members: string[];
};

import logo from "img/footer_logo.svg";
import github from "img/github.svg";
import Image from "next/image";
import { TeamInfo } from "./TeamInfo";

function Footer() {
  const teams: Team[] = [
    { teamName: "AIoT", members: ["이인호", "이상훈", "백은호"] },
    { teamName: "프론트엔드", members: ["신윤찬", "김현희", "최혁진"] },
    { teamName: "백엔드", members: ["이승규", "남정현", "이종원"] },
  ];

  return (
    <div className="bg-[#ffcab5] flex justify-center">
      <div className="w-4/5">
        <div className="flex justify-around mt-6">
          {teams.map((team, index) => (
            <TeamInfo
              key={index}
              teamName={team.teamName}
              members={team.members}
            />
          ))}
        </div>

        <div className="border-t border-solid border-white mt-[100px] mb-8 pt-4 flex justify-between">
          <div className="flex items-end ml-7">
            <Image
              src={logo}
              width={50}
              height={50}
              alt="logo"
              className="mr-6"
            />
            <h6 className="text-white">© 2023 Aily. All rights reserved.</h6>
          </div>
          <a href="https://github.com/Aily-AIRecycle" target="_blank">
            <Image src={github} width={30} height={30} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
