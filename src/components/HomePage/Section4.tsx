import { animated, useInView, useSpring } from "@react-spring/web";

function Section4()
{
  const [ref, inView] = useInView();
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 },
  });

  return (
    <div className="w-screen aspect-[16/10] text-center place-content-center">
      <h1 className="text-5xl mt-[8.3vh] mq:mt-[8vh] mb-[2.8vh] mq:text-3xl">위치 정보</h1>
      <h2 className="text-2xl font-extralight text-[#726969] mb-[6.5vh] mq:text-lg">
        근처에 있는 Aily의 위치를 간편하게 확인하세요.
      </h2>
      <animated.img ref={ref} style={fadeIn} src="img/main/Map.png" alt="map" className="w-[79vw] inline-block mb-[9.2vh] ml-[4.2vw]" />
    </div>
  );
}
export default Section4;
