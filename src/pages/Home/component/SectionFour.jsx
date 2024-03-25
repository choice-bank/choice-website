import React from "react";
import image from "../../../assets/home/stack.png";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SectionFour = () => {
  return (
    <div className="min-h-screen flex flex-col  px-auto lg:mx-auto p-6 lg:p-20">
      <h3 className="font-[500] text-[35px] lg:text-[35px] text-[0A1D2B] mb-6 text-center leading-[39px] lg:leading-[51px] md:leading-[51px]">
        Powerful API Banking <br />
        Solution
      </h3>
      <div className="flex lg:justify-around items-center  flex-col md:flex-row lg:flex-row">
        <div className="hidden lg:inline md:inline">
          <img
            src={image}
            alt="Image"
            className="h-[400px] w-[400px] object-contain"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-[400px] mx-4">
          <div className=" flex mb-4 p-2">
            <p className="mr-2">01.</p>
            <div>
              <h3
                className="font-[500] lg:text-[15px] text-[15px] md:text-sm  text-[#0A0534] font-sans"
                style={{ lineHeight: "16px" }}
              >
                Bank Accounts
              </h3>
              <p
                className="text-[14px] md:text-sm lg:text-[14px] font-[400] text-[#3C5665] font-sans"
                style={{ lineHeight: "18px" }}
              >
                Build bank & wallet accounts within your ecosystem via our APIs
                for individuals and businesses.
              </p>
            </div>
          </div>
          <div className=" flex mb-4 p-2">
            <p className="mr-2">02.</p>
            <div>
              <h3
                className="font-[500] lg:text-[15px] text-[15px] md:text-sm text-[#0A0534] font-sans"
                style={{ lineHeight: "16px" }}
              >
                Payments
              </h3>
              <p
                className="text-[14px] md:text-sm lg:text-[14px] font-[400] text-[#3C5665] font-sans"
                style={{ lineHeight: "18px" }}
              >
                Build aggregated payment solutions within your network,
                including mobile money, bank transfer, cards and more.
              </p>
            </div>
          </div>
          <div className="flex mb-4 p-2">
            <p className="mr-2">03.</p>
            <div>
              <h3
                className="font-[500] lg:text-[15px] text-[15px] md:text-sm text-[#0A0534] font-sans"
                style={{ lineHeight: "16px" }}
              >
                Lending
              </h3>
              <p
                className="text-[14px] md:text-sm lg:text-[14px] font-[400] text-[#3C5665] font-sans"
                style={{ lineHeight: "18px" }}
              >
                Offer credit products to your customers and ecosystem players
                with our API-driven lending engine, such as business working
                capital facility, person loan and more.
              </p>
            </div>
          </div>
          <div className="flex mb-4 p-2">
            <p className="mr-2">04.</p>
            <div>
              <h3
                className="font-[500] lg:text-[15px] text-[15px] md:text-sm text-[#0A0534] font-sans"
                style={{ lineHeight: "16px" }}
              >
                Other products
              </h3>
              <p
                className="text-[14px] md:text-sm lg:text-[14px] font-[400] text-[#3C5665] font-sans"
                style={{ lineHeight: "18px" }}
              >
                Embed FX, remittance, and investment products into your existing
                customer journey, delivering added value seamlessly
              </p>
            </div>
          </div>
        </div>
      </div>

      <Link
        to="/api-banking"
        className="w-[200px] self-center flex justify-center items-center bg-[#6043ED] py-2 px-4 text-white mt-4"
        style={{ borderRadius: "50px" }}
      >
        <p
          className="font-sans mr-2 text-[16px] font-[400]"
          style={{ lineHeight: "16px" }}
        >
          Learn More
        </p>
        <ArrowForward />
      </Link>
    </div>
  );
};

export default SectionFour;
