import React from "react";
import img from "../../../assets/banking/pic4.png";
import { ArrowForward } from "@mui/icons-material";

const SectionFive = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10">
          <h1 className="text-4xl font-bold">Versatile Transfer</h1>
          <h2 className="text-3xl font-bold">Methods Supported</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <div className="text-left max-w-md">
            <h1 className="text-3xl font-bold mb-4">
              Transparent & Fair Pricing
            </h1>
            <p className="text-lg mb-4">
              With competitive exchange rates and low fees, we strive to provide
              you with the best value for your money transfers.
            </p>
            <p className="text-lg mb-6">
              Additionally, our transparent pricing approach allows you to know
              exactly what to expect when utilizing our services. In Choice,
              what you see is what you get.
            </p>
            <div className="flex items-center">
              <p className="text-lg mr-2">View Pricings</p>
              <ArrowForward />
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
