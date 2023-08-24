import Image from "next/image";
import aily from "img/aily_logo.svg";

export default function Profile(props: any) {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    const target = e.target as HTMLImageElement;
    target.src = aily; // 이미지 로딩 실패 시 aily 이미지로 대체
  };

  return (
    <div className="w-[180px] h-[180px] border-solid border-[#d9d9d9] border-[1px] rounded-full flex justify-center items-center">
      {props.src ? (
        <Image
          src={props.src}
          priority
          width={180}
          height={180}
          alt="profile_img"
          className="rounded-full"
          onError={handleImageError}
        />
      ) : (
        <Image
          src={aily} // props.src가 없을 때 fallback 이미지로 사용
          width={180}
          height={180}
          alt="profile_img"
          className="rounded-full"
        />
      )}
    </div>
  );
}
