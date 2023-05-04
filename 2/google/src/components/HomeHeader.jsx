import React from "react";
import Link from "next/link";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
const HomeHeader = () => {
  return (
    <div>
      <header className="">
        <div className="flex justify-end items-center p-5 text-sm space-x-4">
          <Link className="hover:underline" href={"https://mail.google.com"}>
            Gmail
          </Link>
          <Link className="hover:underline" href={"https://image.google.com"}>
            Images
          </Link>
          <BsFillGrid3X3GapFill className=" text-4xl p-2 bg-transparent hover:bg-gray-300 hover:rounded-full" />
          <button className="bg-blue-500 text-white  rounded-sm px-6 py-2 font-medium hover:brightness-105 hover:shadow-md transition-shadow">
            Sign in
          </button>
        </div>
      </header>
    </div>
  );
};

export default HomeHeader;
