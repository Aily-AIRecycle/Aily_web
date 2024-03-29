import useIntersectionObserver from "@/hooks/use-intersectionObserver";
import { useSpring, animated } from "@react-spring/web";
import { useRef } from "react";

function Section1() {
  const triggerRef = useRef<HTMLDivElement | null>(null);
  const dataRef = useIntersectionObserver(triggerRef, {
    freezeOnceVisible: true,
  });
  const springs = useSpring({
    from: { y: "100px" },
    to: { y: dataRef?.isIntersecting ? "0px" : "100px" },
    reset: false,
  });
  return (
    <div className="w-full grid place-items-center mt-[13.8vh] mq:mt-[8vh]">
      <h1 className="text-5xl mb-[2.8vh] mq:text-3xl font-bold text-[#3e3e3e]">
        자연을 생각하는 분리수거 로봇
      </h1>
      <h2 className="text-2xl font-light text-[#726969] mb-[6.5vh] mq:text-lg">
        Aily를 통해 자동으로 분리수거를 해보세요.
      </h2>
      <animated.img
        ref={triggerRef as React.RefObject<HTMLImageElement>}
        style={{ ...springs }}
        width={100}
        height={100}
        src="img/main/phone.avif"
        alt="phone"
        className="w-auto h-[84vh]"
      />
      <div className="bg-[#ffcab5] w-full h-[63vh] mt-[-53vh] z-[-1]" />
    </div>
  );
}

export default Section1;
