import { FaPlus } from "react-icons/fa6";

interface OverlayElementProps {
  animationClass: string;
  overlayVisible: boolean;
  tag: string;
}

export const OverlayElement: React.FC<OverlayElementProps> = ({
  animationClass,
  overlayVisible,
  tag,
}) => {
  return (
    <div
      className={`absolute w-full h-[400px] lg:h-[500px] bg-gradient-to-r from-black/70 to-red-900/70 ${
        overlayVisible ? "opacity-100" : "opacity-0"
      } transition-opacity ${animationClass} transition-opacity duration-100`}
    >
      <h2 className="w-8/12 absolute bottom-1/4 left-10 text-white font-bold text-4xl">
        {tag}
      </h2>
      <a className="text-white absolute bottom-5 right-5 border-b-[90px] border-l-[90px] border-b-red-600 border-l-transparent text-center text-2xl font-bold cursor-pointer">
        <FaPlus className="absolute top-12 right-5" />
      </a>
    </div>
  );
};
