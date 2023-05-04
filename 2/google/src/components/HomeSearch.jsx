"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useRouter } from "next/navigation";
const HomeSearch = () => {
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    // https://random-word-api.herokuapp.com/word
    setRandomSearchLoading(true);
    console.log("Before respose");
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    console.log("getting respoonse api", response);
    console.log("After the Response");
    // if we get no internet and no response dont execute the code belwo
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3 " />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <BsFillMicFill className="text-lg" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8">
        <button onClick={handleSubmit} className="btn">
          Google Search
        </button>
        <button
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80"
          disabled={randomSearchLoading}
        >
          {randomSearchLoading ? (
            <img
              src="triangle.svg"
              alt="loading....."
              height="40px"
              width="40px"
              className="h-8"
            />
          ) : (
            " I am feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
