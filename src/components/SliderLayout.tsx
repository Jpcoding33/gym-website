import { useCallback, useRef } from "react";
import { Button } from "./elements/Button";
import useIntersectionObserver from "../utils/IntersectionObserver";

export const SliderLayout = () => {
  const sectionRefs = useRef<Array<HTMLElement>>([]);

  const setRef = useCallback((node: HTMLElement | null, index: number) => {
    if (node) {
      sectionRefs.current[index] = node;
    }
  }, []);

  const handleIntersection = (index: number) => (target: Element) => {
    switch (index) {
      case 0:
        target.classList.add("animate-slide-to-right-speed-1");
        break;
      case 1:
        target.classList.add("animate-slide-to-right-speed-2");
        break;
      case 2:
        target.classList.add("animate-slide-to-right-speed-3");
        break;
      default:
        break;
    }
  };

  useIntersectionObserver(sectionRefs, handleIntersection);

  return (
    <div className="h-1/2 lg:h-4/6 xl:h-5/6 relative">
      <div className="absolute inset-0 h-full bg-fixed bg-center bg-no-repeat bg-cover bg-[url('/img/hero/h1_hero.png')]"></div>
      <div className="absolute inset-0 h-full">
        <div className="heroCaption absolute text-white top-[30%] left-[6%] sm:left-[15%] space-y-4 sm:space-y-8 md:space-y-10">
          <h3
            ref={(node) => setRef(node, 0)}
            className="text-2xl sm:text-3xl md:text-4xl xl:text-6xl font-semibold font-bungee tracking-wide"
          >
            HI THIS IS JAYPAL
          </h3>
          <h2
            ref={(node) => setRef(node, 1)}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-extrabold"
          >
            GYM TRAINER
          </h2>
          <div ref={(node) => setRef(node, 2)}>
            <Button text={"MY COURSES"} path={"/courses"}/>
          </div>
        </div>
      </div>
    </div>
  );
};
