import { FaFacebookF, FaTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div></div>
      <div className="flex flex-col justify-center items-center space-y-8">
        <h4 className="text-6xl font-bold">TrainWithJP</h4>
        <ul className="flex flex-row flex-wrap items-center justify-center  space-x-6 xl:space-x-10 2xl:space-x-14 font-medium ">
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
        <ul className="flex flex-row space-x-8">
          <li>
            <button className="rounded-full size-10 flex justify-center items-center bg-red-900/10">
              <FaTwitter className="size-5 text-red-600"/>
            </button>
          </li>
          <li>
            <button className="rounded-full size-10 flex justify-center items-center bg-red-900/10">
              <FaFacebookF className="size-5 text-red-600"/>
            </button>
          </li>
          <li>
            <button className="rounded-full size-10 flex justify-center items-center bg-red-900/10">
              <RiInstagramFill className="size-5 text-red-600"/>
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
};
