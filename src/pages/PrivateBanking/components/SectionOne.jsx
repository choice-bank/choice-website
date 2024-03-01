import React from "react";
import image from "../../../assets/banking/image1.png";

const SectionOne = () => {
  return (
    <div
      className="flex  justify-around min-h-screen bg-[#fff]"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      {/* Left Section */}
      <div className="p-8 items-center">
        <div>
          <h1 className="font-bold" style={{ fontSize: "50px" }}>
            Bespoke Services
          </h1>
          <h1 className=" mb-4" style={{ fontSize: "50px" }}>
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
          <p className="mb-10">
            With Choice's Private Banking, you gain access to an elite world of
            investment <br /> opportunities, innovative banking products, and a
            global network designed <br /> to empower your financial
            aspirations.
          </p>
          <p>
            Whether you are looking to grow your investment portfolio, secure
            your <br /> family's future, or manage your personal and business
            finances with efficiency <br /> and foresight, our private banking
            service is your gateway to achieving these <br /> goals with
            confidence and elegance.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="mb-10">
        <img src={image} alt="Image" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default SectionOne;
