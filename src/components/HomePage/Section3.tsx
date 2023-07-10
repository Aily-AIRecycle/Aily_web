import { useInView, useSpring, animated, config } from '@react-spring/web';

function Section3()
{
  const [ref, inView] = useInView();
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: inView ? 22000 : 0 },
    config: { duration: 1000 },
  });

  const bill = useSpring({
    from: {
      x: "300px",
      y: "150px",
    },
    to: {
      x: inView ? "0px" : "300px",
      y: inView ? "0px" : "150px",
    },
  });

  const coin = useSpring({
    from: {
      x: "300px",
      y: "-150px",
    },
    to: {
      x: inView ? "0px" : "300px",
      y: inView ? "0px" : "-150px",
    },
    delay: 200,
  });

  const cash = useSpring({
    from: {
      x: "-300px",
      y: "50px",
    },
    to: {
      x: inView ? "0px" : "-300px",
      y: inView ? "0px" : "50px",
    },
    delay: 400,
  });

  return (
    <div className="bg-[#FFE8DF] w-screen text-center aspect-[16/10]">
      <div className=" mt-[13.8vh] mq:mt-[8vh] mq:mb-[8vh]">
        <h1 className="text-5xl mb-[2.8vh] mq:text-3xl">포인트 제도</h1>
        <h2 className="text-2xl mq:text-sm font-extralight text-[#726969] mb-[6.5vh] mq:text-lg">분리수거할 때 적립되는 포인트는 현금처럼 사용이 가능합니다.</h2>
        <div ref={ref} className="relative grid place-items-center">
          <animated.img style={bill} src="img/main/money_bill.svg" alt="bill" className="absolute start-px top-0 w-[12.5vw] ml-[13vw] mt-[-5.5vh] mq:mt-[-2.75vh]" />
          <animated.img style={coin} src="img/main/coin.svg" alt="coin" className="absolute w-[8.8vw] start-px mt-[36vh] mq:mt-[18vh] ml-[21vw]" />

          <div className="z-10 aspect-square w-1/3 bg-[#ffffff] rounded-[5.6vw] border-solid border-8 border-[#F8B195] shadow-[1vw_1vw_0.5vw_0.25vw_rgba(0,0,0,0.25)]">
            <img src="img/main/wallet.svg" alt="wallet" className="w-[5.2vw] ml-[3.8vw] mt-[7.5vh] mq:mt-[2vh] absolute" />
            <h2 className="mt-[10vh] mq:mt-[2.3vh] ml-[11vw] text-[2.5vw] mq:text-[2vw] text-left text-[#3e3e3e]">홍길동님의 포인트</h2>
            <animated.h1 ref={ref} className="text-[6.3vw] mt-[6.2vw] text-[#3e3e3e]">
              {number.to(n => n.toFixed(0) + 'P')}
            </animated.h1>
          </div>
          <animated.img style={cash} src="img/main/cash.svg" alt="cash" className="absolute w-[9.6vw] end-px mr-[18.5vw]" />
        </div>
      </div>
    </div>
  );
}

export default Section3;
