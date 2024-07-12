import { useCallback, useRef } from "react";
import image1 from "/img/gallery/team1.png";
import image2 from "/img/gallery/team2.png";
import image3 from "/img/gallery/team3.png";
import useIntersectionObserver from "../utils/IntersectionObserver";

export const TeamSection = () => {
  const sectionRefs = useRef<Array<HTMLElement>>([]);

  const setRef = useCallback((node: HTMLElement | null, index: number) => {
    if (node) {
      sectionRefs.current[index] = node;
    }
  }, []);

  const handleIntersection = (index: number) => (target: Element) => {
    switch (index) {
      case 0:
        target.classList.add("animate-slide-to-top-speed-1");
        break;
      case 1:
        target.classList.add("animate-slide-to-top-speed-2");
        break;
      case 2:
        target.classList.add("animate-slide-to-top-speed-3");
        break;
        break;
      default:
        break;
    }
  };

  useIntersectionObserver(sectionRefs, handleIntersection);

  return (
    <div className="bg-black text-white text-center pb-5 px-5">
      <h1
        ref={(node) => setRef(node, 0)}
        className="text-4xl lg:text-6xl xl:text-8xl py-10 font-bold"
      >
        WHAT I OFFER
      </h1>
      <div className="container mx-auto grid grid-cols-12 gap-5 xl:gap-10">
        <div
          ref={(node) => setRef(node, 0)}
          className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col justify-center items-center"
        >
          <img className="w-full" src={image1}></img>
          <div className="w-10/12 text-center">
            <h4 className="text-2xl font-semibold mt-5">BODY BUILDING</h4>
            <p className="text-md mt-2 mb-5">
              You’ll look at graphs and charts in Task One, how to approach the
              task
            </p>
          </div>
        </div>
        <div
          ref={(node) => setRef(node, 1)}
          className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col justify-center items-center"
        >
          <img className="w-full" src={image2}></img>
          <div className="w-10/12 text-center">
            <h4 className="text-2xl font-semibold mt-5">MUSCLE GAIN</h4>
            <p className="text-md mt-2 mb-5">
              You’ll look at graphs and charts in Task One, how to approach the
              task
            </p>
          </div>
        </div>
        <div
          ref={(node) => setRef(node, 2)}
          className="col-span-12 sm:col-span-6 lg:col-span-4 flex flex-col justify-center items-center"
        >
          <img className="w-full" src={image3}></img>
          <div className="w-10/12 text-center">
            <h4 className="text-2xl font-semibold mt-5">WEIGHT LOSS</h4>
            <p className="text-md mt-2 mb-5">
              You’ll look at graphs and charts in Task One, how to approach the
              task
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
