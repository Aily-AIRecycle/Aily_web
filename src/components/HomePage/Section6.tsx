import Image from "next/image";
import qrcode from "img/main/qrcode.svg";

function Section6() {
  return (
    <div className="w-full flex justify-center m-auto bg-[#FFF9F6] pb-[10vh] place-items-center">
      <div className="flex w-1/2 sm:w-1/6 flex-col justify-center items-center">
        <Image
          src={qrcode}
          width={100}
          height={100}
          alt="qrcode"
          quality={100}
          className="w-full mb-[2vh]"
        />
        <a
          href="http://bit.ly/3RDXEbB"
          target="_blank"
          className=" flex justify-center"
        >
          <Image
            src={
              "https://play.google.com/intl/ko/badges/static/images/badges/ko_badge_web_generic.png"
            }
            alt="다운로드하기 Google Play"
            width={500}
            height={500}
            className="w-full"
          />
        </a>
      </div>
    </div>
  );
}

export default Section6;
