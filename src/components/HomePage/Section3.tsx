function Section3()
{
  return (
    <div className="bg-[#ffe8df] w-screen text-center">
      <div className="mt-[13.8vh] mq:mt-[10vh]">
        <h1 className="text-5xl mb-[2.8vh] mq:text-3xl">포인트 제도</h1>
        <div className="text-2xl font-extralight text-[#726969] mb-[6.5vh] mq:text-lg">
          <h2 className="text-2xl font-extralight text-[#726969] mb-[6.5vh] mq:text-lg">분리수거할 때 적립되는 포인트는 현금처럼 사용이 가능합니다.</h2>
        </div>
        <div className="aspect-square w-1/3 bg-[#ffffff]">
          <div className="">
            <img src="img/main/wallet.svg" alt="wallet" className="" />
            <h2>홍길동님의 포인트</h2>
          </div>
          <h1>22,000P</h1>

        </div>
        <img src="img/main/cash.svg" alt="cash" className="" />
        <img src="img/main/coin.svg" alt="coin" className="" />
        <img src="img/main/money_bill.svg" alt="bill" className="" />
      </div>
    </div>
  );
}

export default Section3;
