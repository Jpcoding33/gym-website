import React, { useCallback, useState } from "react";
import { OverlayElement } from "./OverlayElement";

interface GallaryElementProps {
  item: {
    image: string;
    colClass: string;
    tag: string;
  };
}

export const GallaryElement: React.FC<GallaryElementProps> = ({ item }) => {
  const [animationClass, setAnimationClass] = useState("");
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleMouseEnter = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const { top, right, bottom, left } =
        event.currentTarget.getBoundingClientRect();
      const { clientX, clientY } = event;

      const fromTop = clientY - top;
      const fromLeft = clientX - left;
      const fromBottom = bottom - clientY;
      const fromRight = right - clientX;

      const minDistance = Math.min(fromTop, fromLeft, fromBottom, fromRight);

      if (minDistance === fromTop) {
        setAnimationClass("animate-slide-from-top-overlay opacity-100");
      } else if (minDistance === fromRight) {
        setAnimationClass("animate-slide-from-right-overlay opacity-100");
      } else if (minDistance === fromBottom) {
        setAnimationClass("animate-slide-from-bottom-overlay opacity-100");
      } else {
        setAnimationClass("animate-slide-from-left-overlay opacity-100");
      }
      setOverlayVisible(true);
    },
    []
  );

  const handleMouseLeave = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const { top, right, bottom, left } =
        event.currentTarget.getBoundingClientRect();
      const { clientX, clientY } = event;

      const fromTop = clientY - top;
      const fromLeft = clientX - left;
      const fromBottom = bottom - clientY;
      const fromRight = right - clientX;

      const minDistance = Math.min(fromTop, fromLeft, fromBottom, fromRight);

      if (minDistance === fromTop) {
        setAnimationClass("animate-slide-to-top-overlay");
      } else if (minDistance === fromRight) {
        setAnimationClass("animate-slide-to-right-overlay");
      } else if (minDistance === fromBottom) {
        setAnimationClass("animate-slide-to-bottom-overlay");
      } else {
        setAnimationClass("animate-slide-to-left-overlay");
      }
      setTimeout(() => setOverlayVisible(false), 200);
    },
    []
  );

  return (
    <div
      className={`col-span-12 md:col-span-6 ${item.colClass} relative overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <OverlayElement
        animationClass={animationClass}
        overlayVisible={overlayVisible}
        tag={item.tag}
      />
      <img
        className="w-full object-cover h-[400px] lg:h-[500px]"
        src={item.image}
      ></img>
    </div>
  );
};
