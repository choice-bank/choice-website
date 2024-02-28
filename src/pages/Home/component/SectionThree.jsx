import React from "react";
import image from "../../../assets/image2.png";

const SectionThree = () => {
  return (
    <div className="bg-[#0A0534] min-h-screen  flex items-center justify-around">
      <div>
        <div
          className="bg-gradient-to-r from-[#D43A36] via-[#9C45C5] to-[#576BCD] rounded-full py-2 px-4 mb-4  inline-block "
          style={{ borderRadius: "50px", padding: "5px 5px" }}
        >
          <h1
            className="capitalize text-white text-center"
            style={{
              fontSize: "14px",
            }}
          >
            api banking
          </h1>
        </div>

        <p className="italic text-white" style={{ fontSize: "50px" }}>
          We believe in a future where
          <br />
          <span className="not-italic text-[#BB4ADC] font-bold">
            finance comes to you, no <br />
            need to search for it.
          </span>
        </p>
      </div>
      <div>
        <img src={image} alt="Image" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default SectionThree;
