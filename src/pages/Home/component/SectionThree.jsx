import React from "react";
import image from "../../../assets/person1.png";

const SectionThree = () => {
  return (
    <div className="bg-[#0A0534] min-h-screen  flex items-center justify-around">
      <div>
        <div className="bg-gradient-to-r from-red-500 via-blue-500 to-purple-600 rounded-full py-2 px-4 mb-4 w-2/5">
          <h1
            className="capitalize text-white text-center"
            style={{
              borderRadius: "50px",
              padding: "3px 5px",
              fontSize: "17px",
            }}
          >
            api banking
          </h1>
        </div>

        <p className="italic text-white" style={{ fontSize: "30px" }}>
          We believe in a future where{" "}
          <span className="not-italic text-[#BB4ADC]">
            finance <br />
            comes to you, no need to search for it.
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
