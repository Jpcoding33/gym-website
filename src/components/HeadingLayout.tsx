import React from "react";

interface IHeadingLayoutProps {
  text: string;
}

export const HeadingLayout: React.FC<IHeadingLayoutProps> = ({ text }) => {
  return (
    <div className="h-2/5 relative">
      <div className="h-full bg-center bg-no-repeat bg-cover bg-[url('/img/hero/h1_hero.png')]"></div>
      <div className="absolute inset-0 h-full text-white">
        <h3 className="absolute h-full inset-0 top-[65%] left-[10%] text-4xl sm:text-5xl xl:text-6xl font-bold tracking-wide">
          {text}
        </h3>
      </div>
    </div>
  );
};
