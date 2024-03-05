import React from "react";
import img from "../../../assets/api/bg.png";

const Hero = () => {
  return (
    <div
      className="min-h-screen px-10 pt-20 flex flex-col justify-center items-start lg:bg-cover bg-center bg-no-repeat lg:pl-40"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div
        className="bg-gradient-to-r from-[#0C0E2D] via-[#6043EC] to-[#D43A36] py-2 px-4 mb-4 inline-block"
        style={{ borderRadius: "50px" }}
      >
        <h1
          className="capitalize text-white text-lg"
          style={{
            padding: "3px 5px",
          }}
        >
          api banking
        </h1>
      </div>
      <div className="w-full mb-10">
        <h1 className="text-white font-bold text-2xl lg:text-7xl">
          One Platform <br /> Infinite Opportunities
        </h1>
      </div>
      <div className="w-full lg:w-1/2 text-lg">
        <p className="text-white ">
          Leverage Our Bank APIs to seamlessly integrate a comprehensive suite
          of financial products into your existing customer journey,
          encompassing accounts, payments, credit, investments, and beyond.
        </p>
      </div>
      <div
        className="mt-5 mb-5 inline-block p-3"
        style={{ border: "1px solid white", borderRadius: "50px" }}
      >
        <h1 className="text-white text-center font-bold text-sm">
          Talk to an Expart
        </h1>
      </div>
    </div>
  );
};

export default Hero;
