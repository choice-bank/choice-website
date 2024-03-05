import React from "react";
import img from "../../../assets/banking/pic4.png";
import { ArrowForward } from "@mui/icons-material";

const SectionFive = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10">
          <h1 className="text-4xl lg:text-6xl font-bold">Versatile Transfer</h1>
          <h2 className="text-2xl lg:text-6xl font-bold">
            <span
              style={{
                background:
                  "linear-gradient(90deg, #5A3A95 1.43%, #9E46C6 84.6%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              methods supported
            </span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="text-left ">
            <h1
              className="text-2xl lg:text-4xl font-bold mb-4"
              style={{ lineHeight: "25px" }}
            >
              Transparent <br />& Fair Pricing
            </h1>
            <p className="text-lg font=[400] mb-4">
              With competitive exchange rates and low fees, we strive to provide
              you with the best value for your money transfers.
            </p>
            <p className="text-lg font=[400] mb-6">
              Additionally, our transparent pricing approach allows you to know
              exactly what to expect when utilizing our services. In Choice,
              what you see is what you get.
            </p>
            <div className="inline-block">
              <div
                className="flex justify-center items-center bg-[#6043ED] py-2 px-4 text-white mt-4"
                style={{ borderRadius: "50px" }}
              >
                <p className="mr-2">View Pricings</p>
                <ArrowForward />
              </div>
            </div>
          </div>
          <div>
            <img src={img} alt="phone" className="max-w-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
