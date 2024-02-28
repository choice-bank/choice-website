import React from "react";
import image from "../../../assets/person1.png";
import { ArrowForward } from "@mui/icons-material";

const SectionFour = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-auto mx-auto">
      <h3
        className="font-semibold text-[0A1D2B] mb-6 text-center"
        style={{ fontSize: "35px" }}
      >
        Powerful API Banking <br />
        Solution
      </h3>
      <div className="flex justify-around items-center">
        <div className="">
          <img
            src={image}
            alt="Image"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="w-full sm:w-1/2 md:w-2/3 lg:w-1/4 mx-4">
          <div className=" flex mb-4 p-4">
            <div className="mr-4">01.</div>
            <div>
              <h3 className="font-bold">Bank Accounts</h3>
              <p>
                Build bank & wallet accounts within your ecosystem via our APIs
                for individuals and businesses.
              </p>
            </div>
          </div>
          <div className=" flex mb-4 p-4">
            <div className="mr-4 ">02.</div>
            <div>
              <h3 className="font-bold">Payments</h3>
              <p>
                Build aggregated payment solutions within your network,
                including mobile money, bank transfer, cards and more.
              </p>
            </div>
          </div>
          <div className="flex mb-4 p-4">
            <div className="mr-4">03.</div>
            <div>
              <h3 className="font-bold">Lending</h3>
              <p>
                Offer credit products to your customers and ecosystem players
                with our API-driven lending engine, such as business working
                capital facility, person loan and more.
              </p>
            </div>
          </div>
          <div className="flex mb-4 p-4">
            <div className="mr-4">04.</div>
            <div>
              <h3 className="font-bold">Other products</h3>
              <p>
                Embed FX, remittance, and investment products into your existing
                customer journey, delivering added value seamlessly
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center bg-purple-500 py-2 px-4 text-white mt-4"
        style={{ borderRadius: "50px" }}
      >
        <p className="mr-2">Learn More</p>
        <ArrowForward />
      </div>
    </div>
  );
};

export default SectionFour;
