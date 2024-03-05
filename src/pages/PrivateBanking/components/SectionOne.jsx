import React from "react";
import image from "../../../assets/banking/image1.png";

const SectionOne = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen bg-[#fff]">
      {/* Left Section */}
      <div className="p-8 lg:mr-10 lg:text-left">
        <h1
          className="font-bold text-center lg:text-left text-2xl lg:text-6xl"
          style={{ lineHeight: "1.2" }}
        >
          Bespoke Services <br />{" "}
          <span
            className="font-bold"
            style={{
              background: "linear-gradient(to right, #794EF7, #BB4ADC)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            for You & Your Business
          </span>
        </h1>

        <p className="mb-10 mt-5 text-sm lg:text-base">
          With Choice's Private Banking, you gain access to an elite world of
          investment <br /> opportunities, innovative banking products, and a
          global network designed <br /> to empower your financial aspirations.
        </p>
        <p className="text-sm lg:text-base">
          Whether you are looking to grow your investment portfolio, secure your{" "}
          <br /> family's future, or manage your personal and business finances
          with efficiency <br /> and foresight, our private banking service is
          your gateway to achieving these <br /> goals with confidence and
          elegance.
        </p>
      </div>

      {/* Right Section */}
      <div className="mb-10 lg:mb-0">
        <img src={image} alt="Image" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default SectionOne;
