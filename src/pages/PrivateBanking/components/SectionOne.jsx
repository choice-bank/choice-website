import React from "react";
import image from "../../../assets/banking/image1.png";

const SectionOne = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row lg:justify-around min-h-screen bg-[#fff]">
      {/* Left Section */}
      <div className="p-2 lg:mr-5 lg:text-left">
        <h1
          className="font-bold text-2xl lg:text-6xl"
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

        <p className="mb-10 mt-5 text-sm md:text-lg lg:text-base">
          With Choice's Private Banking, you gain access to an elite world of
          investment <br /> opportunities, innovative banking products, and a
          global network designed <br /> to empower your financial aspirations.
        </p>
        <p className="text-sm md:text-lg lg:text-base">
          Whether you are looking to grow your investment portfolio, secure your{" "}
          <br /> family's future, or manage your personal and business finances
          with efficiency <br /> and foresight, our private banking service is
          your gateway to achieving these <br /> goals with confidence and
          elegance.
        </p>
      </div>

      {/* Right Section */}

      <img
        src={image}
        alt="Image"
        className="h-full w-full lg:w-[600px] md:w-[500px] object-contain lg:m-10 md:m-10"
      />
    </div>
  );
};

export default SectionOne;
