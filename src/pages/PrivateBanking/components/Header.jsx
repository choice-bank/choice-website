import React from "react";
import img from "../../../assets/banking/bg.png";

const Header = () => {
  return (
    <div
      className="bg-cover min-h-screen flex flex-col lg:justify-end items-start pl-5 pb-32 lg:pl-40"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex mb-5">
        <div
          className="inline-block rounded-full py-2 px-2 mr-1 md:py-2 md:px-2 "
          style={{
            background:
              "linear-gradient(90deg, #D43A36 -10.29%, #6043EC 35.97%, #120670 91.38%)",
          }}
        >
          <h1
            className="capitalize text-white text-center text-sm md:text-sm lg:text-[17px] font-[250] md:whitespace-nowrap whitespace-nowrap"
            style={{ lineHeight: "22px" }}
          >
            personal private banking
          </h1>
        </div>
        <div
          className="inline-block  rounded-full py-2 px-2 md:py-2 md:px-2"
          style={{
            background:
              "linear-gradient(90deg, #D43A36 -10.29%, #6043EC 35.97%, #120670 91.38%)",
          }}
        >
          <h1
            className="capitalize text-white text-center text-sm md:text-sm md:whitespace-nowrap whitespace-nowrap lg:text-[17px] font-[250]"
            style={{ lineHeight: "22px" }}
          >
            business private banking
          </h1>
        </div>
      </div>
      <div className="w-full mb-10">
        <h1
          className="text-white font-[700] text-2xl lg:text-[60px] font-sans"
          style={{ lineHeight: "60px" }}
        >
          Innovative Banking Services
        </h1>
        <h1
          className="text-white font-[700] text-2xl lg:text-[60px] font-sans"
          style={{ lineHeight: "60px" }}
        >
          for Exclusive Clients
        </h1>
      </div>
    </div>
  );
};

export default Header;
