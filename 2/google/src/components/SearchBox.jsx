// if use hook use use client in nextjs
"use client";
import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  // console.log("This is search Params", searchParams);
  const searchTerm = searchParams.get("searchTerm");
  // console.log("this is searchTerm", searchTerm);
  // state for input
  const [term, setTerm] = useState(searchTerm || " ");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
    >
      <input
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        type="text"
        className=" w-full focus:outline-none"
      ></input>
      <RxCross2
        onClick={(e) => setTerm("")}
        className="text-2xl text-gray-500 cursor-pointer sm:mr-2"
      />
      <FaMicrophone className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
      <AiOutlineSearch
        onClick={handleSubmit}
        className="hidden text-3xl sm:inline-flex text-blue-500 cursor-pointer"
      />
    </form>
  );
};

export default SearchBox;
