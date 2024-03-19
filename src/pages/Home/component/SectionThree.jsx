import React from "react";
import image from "../../../assets/home/Image2.png";

const SectionThree = () => {
  return (
    <div className="min-h-screen  bg-[#0A0534]  flex flex-col lg:flex-row md:flex-row lg:justify-around  lg:p-20 p-10">
      <div className=" md:mr-10 mb-5 md:mb-0 flex flex-col lg:justify-center">
        <div>
          <div className="bg-gradient-to-r from-[#D43A36] via-[#9C45C5] to-[#576BCD] inline-block rounded-full py-2 px-2 mr-1 md:py-2 md:px-2">
            <h1
              className="capitalize text-white text-center text-sm md:text-sm lg:text-[17px] font-[250] md:whitespace-nowrap whitespace-nowrap"
              style={{ lineHeight: "22px" }}
            >
              api banking
            </h1>
          </div>
        </div>
        <p
          className="italic font-playfair text-white font-[400] text-lg md:text-2xl lg:text-[50px] leading-normal md:leading-tight"
          style={{ lineHeight: "51px" }}
        >
          We believe in a future where
          <br />
          <span
            className="not-italic font-sans text-[#794EF7] font-[700]"
            style={{ lineHeight: "51px", letterSpacing: "-1.5px" }}
          >
            finance comes to you, no <br />
            need to search for it.
          </span>
        </p>
      </div>
      <div className="lg:flex mb-10">
        <img
          src={image}
          alt="Image"
          className="object-contain max-w-full h-auto md:max-w-[500px]"
        />
      </div>
    </div>
  );
};

export default SectionThree;
