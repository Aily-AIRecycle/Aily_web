function Section3()
{
  return (
    <div className="bg-[#FFE8DF] w-screen text-center aspect-[16/10]">
      <div className=" mt-[13.8vh] mq:mt-[10vh]">
        <h1 className="text-5xl mb-[2.8vh] mq:text-3xl">포인트 제도</h1>
        <h2 className="text-2xl font-extralight text-[#726969] mb-[6.5vh] mq:text-lg">분리수거할 때 적립되는 포인트는 현금처럼 사용이 가능합니다.</h2>
        <div className="relative grid place-items-center">
          <img src="img/main/money_bill.svg" alt="bill" className="absolute start-px top-0 w-[12.5vw] ml-[13vw] mt-[-5.5vh]" />
          <img src="img/main/coin.svg" alt="coin" className="absolute w-[8.8vw] start-px mt-[36vh] ml-[21vw]" />

          <div className="aspect-square w-1/3 bg-[#ffffff] rounded-[5.6vw] border-solid border-8 border-[#F8B195] shadow-[1vw_1vw_0.5vw_0.25vw_rgba(0,0,0,0.25)]">
            <img src="img/main/wallet.svg" alt="wallet" className="w-[5.2vw] ml-[3.8vw] mt-[7.5vh] absolute" />
            <h2 className="mt-[11vh] ml-[11vw] text-[2.5vw] text-left text-[#3e3e3e]">홍길동님의 포인트</h2>
            <h1 className="text-[6.3vw] mt-[6.2vw] text-[#3e3e3e]">22,000P</h1>
          </div>

          <img src="img/main/cash.svg" alt="cash" className="absolute w-[9.6vw] end-px mr-[18.5vw]" />
        </div>
      </div>
    </div>
  );
}

export default Section3;
