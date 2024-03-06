import React from "react";
import img from "../../../assets/banking/pic4.png";
import { ArrowForward } from "@mui/icons-material";

const SectionFive = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  py-5 px-8">
      <div className="max-w-4xl mx-auto text-center">
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
              <div className="flex justify-center rounded-full items-center bg-[#6043ED] py-2 px-4 text-white mt-4">
                <p className="mr-2">View Pricings</p>
                <ArrowForward />
              </div>
            </div>
          </div>
          <div className="w-full">
            <img src={img} alt="phone" className="max-w-lg w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
