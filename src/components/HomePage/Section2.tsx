function Section2()
{
  return (
    <div className="grid place-items-center mt-[13.8vh] mq:mt-[10vh]">
      <h1 className="text-5xl mb-[2.8vh] mq:text-3xl">QR 코드</h1>
      <h2 className="text-2xl font-extralight text-[#726969] mb-[6.5vh] mq:text-lg">
        간편한 QR코드 인증으로 Aily 이용이 가능합니다.
      </h2>
      <div className="grid grid-cols-5 place-items-center mb-[13vh]">
        <div></div>
        <img src="img/main/qrphone.png" alt="qrPhone" className="h-[65vh]" />
        <img src="img/main/right_left_arrow.svg" alt="arrow" className="h-[15.8vh]" />
        <img src="img/main/AiLYre.png" alt="aily" className="h-[40.8vh]" />
        <div></div>
      </div>
    </div>
  );
}

export default Section2;
