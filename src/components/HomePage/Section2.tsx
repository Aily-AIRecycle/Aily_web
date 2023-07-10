import { useInView, useSpring, animated, to } from '@react-spring/web';

function Section2()
{
  const [ref, inView] = useInView();
  const arrowtop = useSpring({
    from: { x: "-50px" },
    to: { x: inView ? "0px" : "-50px" },
    delay: 200
  });

  const arrowbottom = useSpring({
    from: { x: "50px" },
    to: { x: inView ? "0px" : "50px" },
    delay: 200
  });

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    delay: 800,
  });

  return (
    <div className="w-screen aspect-[16/10]">
      <div className="text-center mt-[13.8vh] mq:mt-[8vh]">
        <h1 className="text-5xl mb-[2.8vh] mq:text-3xl">QR 코드</h1>
        <h2 className="text-2xl font-extralight text-[#726969] mb-[6.5vh] mq:text-lg">
          간편한 QR코드 인증으로 Aily 이용이 가능합니다.
        </h2>
      </div>
      <div className="items-center place-content-center w-screen flex aspect-[18/1] mb-[13.4vh] mq:mb-[6vh]">
        <animated.img
          style={{ ...fadeIn }}
          src="img/main/qrphone.png"
          alt="qrPhone"
          className="w-[18vw] mq:w-[25vw]"
        />
        <div className="w-[8.9vw] mq:w-[15vw] ml-[7.3vw] mr-[7.3vw]">
          <animated.img
            ref={ref}
            style={{ ...arrowtop }}
            src="img/main/arrowtop.png"
            alt="arrowtop"
          />
          <animated.img
            ref={ref}
            style={{ ...arrowbottom }}
            src="img/main/arrowbottom.png"
            alt="arrowbottom"
          />
        </div>
        <animated.img
          ref={ref}
          style={{ ...fadeIn }}
          src="img/main/AiLYre.png"
          alt="aily"
          className="w-[23vw] mq:w-[30vw]"
        />
      </div>
    </div>
  );
}

export default Section2;
