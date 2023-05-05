// this is the homepage of app:
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import { Kadwa } from "next/font/google";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div>
      {/* Header */}
      <HomeHeader />
      {/* Body */}
      <div className="flex flex-col items-center  mt-24">
        <Image
          width="300"
          height="100"
          alt="banner"
          src="https://www.google.com/logos/doodles/2018/nepal-republic-day-2018-4825881871646720-l.png"
          draggable="false"
        />
        <HomeSearch />
      </div>
    </div>
  );
};

export default Home;
