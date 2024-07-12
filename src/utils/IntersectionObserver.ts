import { MutableRefObject, useEffect, useRef } from "react";

type ElementRef = MutableRefObject<HTMLElement[] | null>;

type IntersectionCallback = (index: number) => (target: Element) => void;

const useIntersectionObserver = (
  elements: ElementRef,
  callback: IntersectionCallback
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          if (index !== -1) {
            callback(index)(entry.target);
          }
        }
      });
    });

    const currentRefs = elements.current;

    currentRefs?.forEach((element) => {
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => {
      currentRefs?.forEach((element) => {
        if (element) {
          observer.current?.unobserve(element);
        }
      });
    };
  }, [elements, callback]);
};

export default useIntersectionObserver;
