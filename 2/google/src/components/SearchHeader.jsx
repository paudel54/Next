import React from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";
import SearchHeaderOptions from "./SearchHeaderOptions";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
const SearchHeader = () => {
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center justify-between">
        <Link href={"/"}>
          <Image
            width="120"
            height="40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            alt="logo"
            draggable="false"
          />
        </Link>
        <div className="flex-1">
          <SearchBox />
        </div>
        <div className="hidden md:inline-flex space-x-2">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button className="bg-blue-500 text-white px-6 py-2 font-medium  rounded-md hover:brightness-105 hover:shadow-md transition-all ml-2">
          Sign in
        </button>
      </div>
      <SearchHeaderOptions />
    </header>
  );
};

export default SearchHeader;
