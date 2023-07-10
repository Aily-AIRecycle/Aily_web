import { animated, useInView, useSpring } from "@react-spring/web";

function Section5()
{
  const [ref, inView] = useInView();
  const fadeInEarth = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    delay: 800,
  });
  const fadeInHand = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
    delay: 400,
  });
  const fadeUp = useSpring({
    from: { y: "50px" },
    to: { y: inView ? "0px" : "50px" },
    delay: 400,
  });

  return (
    <div className="w-screen aspect-[16/10] bg-[#FFF9F6] place-itmes-center">
      <div className="text-5xl mt-[8.3vh] mb-[2.8vh] mq:text-2xl font-bold text-center">
        <h1 className="mb-[3.5vh] mq:mb-[1vh]">일상 속 지구를 위한 친환경 실천</h1>
        <h1 className="mb-[3.3vh]">Aily와 함께 시작하세요.</h1>
      </div>
      <div ref={ref}>
        <animated.img style={fadeInEarth} src="img/main/earth.svg" alt="earth" className="w-[20.8vw] mq:w-[40vw] mb-[5.5vh] mq:mb-[3vh] mr-auto ml-auto" />
        <animated.img style={{ ...fadeUp, ...fadeInHand }} src="img/main/hand.svg" alt="hand" className=" w-[18.7vw] mq:w-[36vw] mr-auto ml-auto mb-[19.2vh] mq:mb-[13vh]" />
      </div>
    </div>
  );
}

export default Section5;
