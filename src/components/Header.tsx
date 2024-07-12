import { FaAlignRight } from "react-icons/fa6";
import { Button } from "./elements/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const triggerPosition = viewportHeight * 0.4; // 50vh

      setIsFixed(scrollPosition >= triggerPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 ${
        isFixed
          ? "fixed top-0 bg-gradient-to-b from-red-800 via-red-900 to-red-950 animate-slide-from-top-overlay"
          : "absolute"
      }`}
    >
      <div className="h-[70px] lg:h-[100px] mx-auto container-lg px-8 lg:px-12 xl:px-20 flex justify-between items-center text-white">
        <div>
          <span className="text-2xl xl:text-3xl font-bold flex align-center">
            TrainWithJP
          </span>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex align-center space-x-6 xl:space-x-10 2xl:space-x-14 font-medium ">
            <li className="cursor-pointer hover:underline underline-offset-4">
              <Link to="/">HOME</Link>
            </li>
            <li className="cursor-pointer hover:underline underline-offset-4">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="cursor-pointer hover:underline underline-offset-4">
              <Link to="/courses">COURSES</Link>
            </li>
            <li className="cursor-pointer hover:underline underline-offset-4">
              <Link to="/pricing">PRICING</Link>
            </li>
            <li className="cursor-pointer hover:underline underline-offset-4">
              <Link to="/gallery">GALLERY</Link>
            </li>
            <li className="cursor-pointer hover:underline underline-offset-4">
              <Link to="/blog">BLOG</Link>
            </li>
            <li className="cursor-pointer hover:underline underline-offset-4">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
        <div className="hidden lg:flex">
          <Button text={"CONTACT ME"} path={"/contact"} />
        </div>
        <div className="flex lg:hidden">
          <button className="text-2xl">
            <FaAlignRight />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
