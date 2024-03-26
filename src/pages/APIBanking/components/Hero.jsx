import React from "react";
import img from "../../../assets/api/bg.jpeg";

const Hero = () => {
  return (
    <div
      className="min-h-screen px-5 pt-32 flex flex-col justify-center items-start bg-cover bg-center bg-no-repeat lg:pl-40"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="bg-gradient-to-r from-[#0C0E2D] via-[#6043EC] to-[#D43A36] py-2 px-2 mb-4 inline-block rounded-full">
        <h1
          className="font-sans capitalize text-white text-center text-sm md:text-base lg:text-[17px] font-[250]"
          style={{ lineHeight: "22px" }}
        >
          api banking
        </h1>
      </div>
      <div className="w-full mb-5">
        <h1 className="text-white font-[700] text-[36px] lg:text-[60px] font-sans leading-[30px] lg:leading-[59px]">
          One Platform{" "}
          <span className="lg:inline md:inline hidden">
            <br />
          </span>{" "}
          Infinite Opportunities
        </h1>
      </div>
      <div className="w-full lg:w-1/2 font-sans">
        <p
          className="font-sans text-[#fff] text-[15px] lg:text-[17px] font-[250]"
          style={{ lineHeight: "22px" }}
        >
          Leverage Our Bank APIs to seamlessly integrate a comprehensive suite
          of financial products into your existing customer journey,
          encompassing accounts, payments, credit, investments, and more.
        </p>
      </div>
      <div
        className="mt-5 mb-5 inline-block py-1 px-2 rounded-full"
        style={{ border: "1px solid white" }}
      >
        <h1 className="font-sans text-white text-center font-[500] text-sm md:text-base lg:text-[15px]">
          Talk to an Expert
        </h1>
      </div>
    </div>
  );
};

export default Hero;
