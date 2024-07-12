import React from "react";
import { Link } from "react-router-dom";

interface IButtonProps {
  text: string;
  path: string;
}

export const Button: React.FC<IButtonProps> = ({ text, path }) => {
  return (
    <Link to={path}>
      <button className="text-md xl:text-lg px-6 py-3 xl:px-8 xl:py-4 bg-red-500 border-2 border-white font-medium">
        {text}
      </button>
    </Link>
  );
};