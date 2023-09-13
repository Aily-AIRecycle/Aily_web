import Image from "next/image";

export default function Profile(props: any) {
  return (
    <div className="w-[180px] h-[180px] border-solid border-[#d9d9d9] border-[1px] rounded-full flex justify-center items-center">
      <Image
        src={props.src}
        priority
        width={180}
        height={180}
        alt="profile_img"
        className="rounded-full"
      />
    </div>
  );
}
