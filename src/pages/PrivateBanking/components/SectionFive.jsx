import React from "react";
import img from "../../../assets/banking/pic4.png";
import { ArrowForward } from "@mui/icons-material";

const SectionFive = () => {
  return (
    <div className="flex items-center justify-center lg:m-32 md:m-32">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center lg:justify-center md:justify-center  md:items-center">
        <div className="lg:w-2/5 md:w-3/4 w-full p-5">
          <h1 className="font-sans text-[36px] lg:text-[25px] font-[700] mb-4 leading-[36px] lg:leading-[25px]">
            Transparent{" "}
            <span className="lg:inline md:inline hidden">
              <br />
            </span>
            & Fair Pricing
          </h1>
          <p
            className="font-sans text-[15px] font=[400] mb-4"
            style={{ lineHeight: "22px" }}
          >
            With competitive exchange rates and low fees, we strive to provide
            you with the best value for your money transfers.
          </p>
          <p
            className="font-sans text-[15px] font=[400] mb-4"
            style={{ lineHeight: "22px" }}
          >
            Additionally, our transparent pricing approach allows you to know
            exactly what to expect when utilizing our services. In Choice, what
            you see is what you get.
          </p>
          <div className="inline-block">
            <div className="flex justify-center rounded-full items-center bg-[#6043ED] py-2 px-4 text-white mt-4">
              <p
                className="font-sans mr-2 text-[16px] font-[400]"
                style={{ lineHeight: "16px" }}
              >
                View Pricings
              </p>
              <ArrowForward />
            </div>
          </div>
        </div>
        <div className="md:block mb-5">
          <img src={img} alt="phone" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
