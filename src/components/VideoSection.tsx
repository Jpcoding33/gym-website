import { FaPlay } from "react-icons/fa6";

export const VideoSection = () => {
  return (
    <div className="h-2/5 sm:h-2/3 bg-center bg-no-repeat bg-cover bg-[url('/img/gallery/video-bg.png')] flex justify-center items-center">
      <div className="w-20 h-20 sm:w-32 sm:h-32 bg-white rounded-full flex justify-center items-center cursor-pointer">
        <FaPlay className="size-6 sm:size-10 text-red-600" />
      </div>
    </div>
  );
};
