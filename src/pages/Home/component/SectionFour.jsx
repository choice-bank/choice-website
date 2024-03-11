import React from "react";
import image from "../../../assets/home/stack.png";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

const SectionFour = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-auto lg:mx-auto p-6 lg:p-20">
      <h3 className="font-bold text-lg lg:text-xl text-[0A1D2B] mb-6 text-center">
        Powerful API Banking <br />
        Solution
      </h3>
      <div className="flex justify-around items-center  flex-col md:flex-row lg:flex-row">
        <div className="">
          <img
            src={image}
            alt="Image"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/2 mx-4">
          <div className=" flex mb-4 p-2">
            <div className="mr-2">01.</div>
            <div>
              <h3 className="font-bold text-sm md:text-sm lg:text-xl">
                Bank Accounts
              </h3>
              <p className="text-sm md:text-sm lg:text-lg">
                Build bank & wallet accounts within your ecosystem via our APIs
                for individuals and businesses.
              </p>
            </div>
          </div>
          <div className=" flex mb-4 p-2">
            <div className="mr-2 ">02.</div>
            <div>
              <h3 className="font-bold text-sm md:text-sm lg:text-xl">
                Payments
              </h3>
              <p className="text-sm md:text-sm lg:text-lg">
                Build aggregated payment solutions within your network,
                including mobile money, bank transfer, cards and more.
              </p>
            </div>
          </div>
          <div className="flex mb-4 p-2">
            <div className="mr-2">03.</div>
            <div>
              <h3 className="font-bold text-sm md:text-sm lg:text-xl">
                Lending
              </h3>
              <p className="text-sm md:text-sm lg:text-lg">
                Offer credit products to your customers and ecosystem players
                with our API-driven lending engine, such as business working
                capital facility, person loan and more.
              </p>
            </div>
          </div>
          <div className="flex mb-4 p-2">
            <div className="mr-2">04.</div>
            <div>
              <h3 className="font-bold text-sm md:text-sm lg:text-xl">
                Other products
              </h3>
              <p className="text-sm md:text-sm lg:text-lg">
                Embed FX, remittance, and investment products into your existing
                customer journey, delivering added value seamlessly
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/api-banking"
        className="flex justify-center items-center bg-purple-500 py-2 px-4 text-white mt-4"
        style={{ borderRadius: "50px" }}
      >
        <p className="mr-2 text-sm">Learn More</p>
        <ArrowForward />
      </Link>
    </div>
  );
};

export default SectionFour;
