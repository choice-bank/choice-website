import React from "react";
import image from "../../../assets/banking/image1.png";

const SectionOne = () => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col mt-32">
        <div className="self-center flex flex-col items-center  mb-5 lg:w-1/2 w-full">
          <div className="inline-block bg-[#6043EC] rounded-full px-3 py-1">
            <p className="text-white font-[500] text-sm md:text-base lg:text-[12px]">
              Private Banking
            </p>
          </div>

          <h1
            className="font-[700] text-sm lg:text-[35px]"
            style={{ lineHeight: "38px" }}
          >
            Bespoke Services
          </h1>
          <h1
            className="font-[700] text-sm lg:text-[35px]"
            style={{ lineHeight: "38px" }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #5A3A95 1.43%, #9E46C6 84.6%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              FOr You & Your Business
            </span>
          </h1>
        </div>
        <div className="self-center flex flex-col lg:flex-row md:flex-row justify-center items-center w-[950px]">
          <div className="w-2/5">
            <p
              className="mb-10 mt-5 text-sm md:text-lg lg:text-[13px] font-[400]"
              style={{ lineHeight: "21px" }}
            >
              With Choice's Private Banking, you gain access to an elite world
              of investment opportunities, innovative banking products, and a
              global network designed to empower your financial aspirations.
            </p>
            <p
              className="text-sm md:text-lg lg:text-[13px] font-[400]"
              style={{ lineHeight: "21px" }}
            >
              Whether you are looking to grow your investment portfolio, secure
              your family's future, or manage your personal and business
              finances with efficiency and foresight, our private banking
              service is your gateway to achieving these goals with confidence
              and elegance.
            </p>
          </div>
          <div>
            <img
              src={image}
              alt="Image"
              className="h-full w-4/5  object-contain lg:m-10 md:m-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
