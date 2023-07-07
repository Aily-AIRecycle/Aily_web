import useIntersectionObserver from '@/hooks/user-intersectionObserver';
import { useInView, useSpring, animated } from '@react-spring/web';
import { useRef } from 'react';

function Section2()
{
  const triggerRef = useRef<HTMLDivElement | null>(null);;
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true
  });
  const [ref1, arrowtop] = useInView(() => ({
    from: { x: "-50px" },
    to: { x: dataRef?.isIntersecting ? "0px" : "0px" },
  }))
  const [ref2, arrowbottom] = useInView(() => ({
    from: { x: "50px" },
    to: { x: dataRef?.isIntersecting ? "0px" : "0px" },
  }))
  const [refqr, qrphone] = useInView(() => ({
    config: {
      duration: 4000,
    },
    from: { opacity: 0 },
    to: { opacity: 1 },
  }))
  const [refai, AiLYre] = useInView(() => ({
    config: {
      duration: 4000,
    }, from: { opacity: 0 },
    to: { opacity: 1 },
  }))

  return (
    <div className="w-screen aspect-[16/10]">
      <div className="text-center mt-[13.8vh] mq:mt-[8vh]">
        <h1 className="text-5xl mb-[2.8vh] mq:text-3xl">QR 코드</h1>
        <h2 className="text-2xl font-extralight text-[#726969] mb-[6.5vh] mq:text-lg">
          간편한 QR코드 인증으로 Aily 이용이 가능합니다.
        </h2>
      </div>
      <div className="items-center place-content-center w-screen flex aspect-[18/1] mb-[13.4vh] mq:mb-[6vh]">
        <animated.img ref={refqr} style={qrphone} src="img/main/qrphone.png" alt="qrPhone" className="w-[18vw] mq:w-[25vw]" />
        <div className="w-[8.9vw] mq:w-[15vw] ml-[7.3vw] mr-[7.3vw]">
          <animated.img ref={ref1} style={arrowtop} src="img/main/arrowtop.png" alt="arrowtop" />
          <animated.img ref={ref2} style={arrowbottom} src="img/main/arrowbottom.png" alt="arrowbottom" />
        </div>
        <animated.img ref={refai} style={AiLYre} src="img/main/AiLYre.png" alt="aily" className="w-[23vw] mq:w-[30vw]" />
      </div>
      <div ref={triggerRef} />
    </div>
  );
}

export default Section2;
