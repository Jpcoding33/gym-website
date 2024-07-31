import {
  FaFacebookF,
  FaLocationDot,
  FaSquarePhone,
  FaTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="grid grid-cols-12 bg-zinc-900 py-10 sm:py-20 px-10">
        <div className="col-span-12 sm:col-span-6 md:col-span-4 flex flex-row items-center justify-center my-5">
          <div className="w-16 h-16 bg-red-600 rounded-full mr-5 flex justify-center items-center">
            <FaLocationDot className="size-6" />
          </div>
          <div className="w-[150px]">
            <h2>Location</h2>
            <p>Gym Lounge, vatva, Ahmedabad -382440</p>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 flex flex-row items-center justify-center my-5">
          <div className="w-16 h-16 bg-red-600 rounded-full mr-5 flex justify-center items-center">
            <FaSquarePhone className="size-6" />
          </div>
          <div className="w-[150px]">
            <h2>Phone</h2>
            <p>(079)5564125</p>
            <p>(079)8447845</p>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 flex flex-row items-center justify-center my-5">
          <div className="w-16 h-16 bg-red-600 rounded-full mr-5 flex justify-center items-center">
            <MdEmail className="size-6" />
          </div>
          <div className="w-[150px]">
            <h2>Email</h2>
            <p>contact1@gmail.com</p>
            <p>contact2@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-10 py-20">
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
              <FaTwitter className="size-4 text-red-700" />
            </button>
          </li>
          <li>
            <button className="rounded-full size-10 flex justify-center items-center bg-red-900/10">
              <FaFacebookF className="size-4 text-red-700" />
            </button>
          </li>
          <li>
            <button className="rounded-full size-10 flex justify-center items-center bg-red-900/10">
              <RiInstagramFill className="size-4 text-red-700" />
            </button>
          </li>
        </ul>
      </div>
      <hr className="my-5 w-2/3 mx-auto" />
      <div className="py-10 flex justify-center items-center px-5 text-center">
        <p>
          Copyright &#169; 2024 All rights reserved | This template is made with
          <span className="text-red-600 text-xl">&nbsp;&#9829;</span> by{" "}
          <span className="text-red-600 text-lg hover:text-white cursor-pointer">
            Jaypal
          </span>
        </p>
      </div>
    </footer>
  );
};
