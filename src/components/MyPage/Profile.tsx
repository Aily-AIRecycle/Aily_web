import Image from "next/image";

export default function Profile(props: any) {
  return (
    <div
      style={{ width: `${props.width}px`, height: `${props.height}px` }}
      className={`border-solid border-[#d9d9d9] border rounded-full flex justify-center items-center`}
    >
      {props.src && (
        <Image
          src={props.src}
          priority
          width={props.width}
          height={props.height}
          alt="profile_img"
          className="rounded-full"
        />
      )}
    </div>
  );
}
