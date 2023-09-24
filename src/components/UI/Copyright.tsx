import miniLogo from "img/mini_logo.svg";
import Image from "next/image";

function Copyright() {
  return (
    <div className="flex items-end mt-24 mb-12">
      <Image src={miniLogo} alt="aily" className="w-10" />
      <h6 className="font-light text-sm ml-5 text-[#d0d0d0]">
        © 2023 Aily. All rights reserved.
      </h6>
    </div>
  );
}

export default Copyright;
