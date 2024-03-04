import React from "react";
import image from "../../../assets/image2.png";

const SectionThree = () => {
  return (
    <div className="bg-[#0A0534] min-h-screen flex flex-col md:flex-row md:items-center lg:items-center justify-center p-10">
      <div className="flex-shrink-0 md:mr-10 mb-5 md:mb-0 ">
        <div
          className="bg-gradient-to-r from-[#D43A36] via-[#9C45C5] to-[#576BCD] rounded-full py-2 px-4 mb-4 inline-block"
          style={{ borderRadius: "50px", padding: "3px 8px" }}
        >
          <h1 className="capitalize text-white text-center text-sm md:text-base">
            api banking
          </h1>
        </div>

        <p className="italic text-white font-[400] text-lg md:text-4xl leading-normal md:leading-tight">
          We believe in a future where
          <br />
          <span className="not-italic text-[#BB4ADC] font-bold">
            finance comes to you, no <br />
            need to search for it.
          </span>
        </p>
      </div>
      <div className="flex-shrink-0">
        <img
          src={image}
          alt="Image"
          className="object-contain max-w-full h-auto md:max-w-[400px]"
        />
      </div>
    </div>
  );
};

export default SectionThree;
