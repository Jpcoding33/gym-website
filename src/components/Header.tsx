import { FaAlignRight, FaArrowTurnUp } from "react-icons/fa6";
import { Button } from "./elements/Button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

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

  const openDrawer = () => {
    setShowDrawer(true);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <React.Fragment>
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300 ${
          showDrawer ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeDrawer}
      ></div>
      <div
        className={`fixed top-0 left-0 w-full  bg-white z-50 transition-transform transform duration-300 ${
          showDrawer ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="p-5">
          <button className="absolute top-5 right-5" onClick={closeDrawer}>
            <RxCross2 className="size-6" />
          </button>
          <ul className="flex flex-col text-gray-800 p-5 justify-center items-center">
            <li
              onClick={closeDrawer}
              className="w-full text-center px-5 py-2 text-lg font-semibold text-gray-800"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={closeDrawer}
              className="w-full text-center px-5 py-2 text-lg font-semibold text-gray-800"
            >
              <Link to="/about">About</Link>
            </li>
            <li
              onClick={closeDrawer}
              className="w-full text-center px-5 py-2 text-lg font-semibold text-gray-800"
            >
              <Link to="/courses">Courses</Link>
            </li>
            <li
              onClick={closeDrawer}
              className="w-full text-center px-5 py-2 text-lg font-semibold text-gray-800"
            >
              <Link to="/pricing">Pricing</Link>
            </li>
            <li
              onClick={closeDrawer}
              className="w-full text-center px-5 py-2 text-lg font-semibold text-gray-800"
            >
              <Link to="/gallery">Gallery</Link>
            </li>
            <li
              onClick={closeDrawer}
              className="w-full text-center px-5 py-2 text-lg font-semibold text-gray-800"
            >
              <Link to="/blog">Blog</Link>
            </li>
            <li
              onClick={closeDrawer}
              className="w-full text-center px-5 py-2 text-lg font-semibold text-gray-800"
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <header
        className={`w-full z-30 ${
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
            <button className="text-2xl" onClick={openDrawer}>
              <FaAlignRight />
            </button>
          </div>
        </div>
      </header>
      <a
        href="#"
        className={`fixed bottom-24 right-5 z-10 transition-opacity duration-300 ${
          isFixed ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-14 h-14 bg-white rounded-full text-red-600 flex justify-center items-center shadow-2xl shadow-gray-100">
          <FaArrowTurnUp className="size-5" />
        </div>
      </a>
    </React.Fragment>
  );
}

export default Header;
