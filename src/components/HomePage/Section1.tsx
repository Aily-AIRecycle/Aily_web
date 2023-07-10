import useIntersectionObserver from '@/hooks/use-intersectionObserver';
import { useSpring, animated, } from '@react-spring/web';
import { useRef } from 'react';


function Section1()
{
  const triggerRef = useRef<HTMLDivElement | null>(null);;
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true
  });
  const springs = useSpring({
    from: { y: "100px" },
    to: { y: dataRef?.isIntersecting ? "0px" : "100px" },
    reset: false
  })
  return (
    <div className="grid place-items-center mt-[13.8vh] mq:mt-[8vh]">
      <h1 className="text-5xl mb-[2.8vh] mq:text-3xl">자연을 생각하는 분리수거 로봇</h1>
      <h2 className="text-2xl font-extralight text-[#726969] mb-[6.5vh] mq:text-lg">Aily를 통해 자동으로 분리수거를 해보세요.</h2>
      <animated.img ref={triggerRef as React.RefObject<HTMLImageElement>} style={{ ...springs }} src="img/main/phone.png" alt="phone" className="h-[84vh]" />
      <div className="bg-[#ffcab5] w-screen h-[63vh] mt-[-53vh] z-[-1]" />
    </div>
  );
}

export default Section1;
