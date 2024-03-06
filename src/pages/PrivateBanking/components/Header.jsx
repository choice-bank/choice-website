import React from "react";
import img from "../../../assets/banking/bg.png";

const Header = () => {
  return (
    <div
      className="bg-cover min-h-screen flex flex-col justify-center items-start pl-5 pt-20 lg:pl-40"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div
        className="bg-gradient-to-r from-[#0C0E2D] via-[#6043EC] to-[#D43A36] py-2 px-4 mb-4 inline-block rounded-full"
        style={{ padding: "3px 8px" }}
      >
        <h1 className="capitalize text-white text-center text-sm md:text-base lg:text-lg">
          private banking
        </h1>
      </div>
      <div className="w-full mb-10">
        <h1 className="text-white font-bold text-2xl lg:text-7xl font-sans">
          Innovative Banking Services <br /> for Exclusive Clients
        </h1>
      </div>
    </div>
  );
};

export default Header;
