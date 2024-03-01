import React from "react";
import img from "../../../assets/banking/pic1.png";

const SectionThree = () => {
  return (
    <div className="bg-[#0A0534] min-h-screen flex flex-col items-center justify-center text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="max-w-lg mr-10">
          <h3 className="text-3xl font-bold mb-4">
            Online and <br /> Mobile Banking
          </h3>
          <p className="text-lg mb-8">
            Access your accounts and make payments anytime, anywhere <br /> with
            our convenient online and mobile banking platforms, providing <br />{" "}
            you with ultimate flexibility and control.
          </p>
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col justify-center mr-5">
              <div className="mb-5">
                <h1 className="text-xl font-semibold">A great experience</h1>
                <p className="text-gray-300">
                  Fast, reliable, and cost-efficient payouts for your business
                  and customers.
                </p>
              </div>
              <div className="mb-5">
                <h1 className="text-xl font-semibold">Manage your finances</h1>
                <p className="text-gray-300">
                  Easily keep track of your payments and manage your accounts.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center ml-5 ">
              <div className="mb-5">
                <h1 className="text-xl font-semibold">Easily implemented</h1>
                <p className="text-gray-300">
                  Integrate with our API or set up payouts in seconds.
                </p>
              </div>
              <div className="mb-5">
                <h1 className="text-xl font-semibold">
                  Built with security in mind
                </h1>
                <p className="text-gray-300">
                  We use two-factor authentication and invest heavily in
                  sophisticated fraud detection.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block relative">
          <img
            src={img}
            alt="bg"
            className="absolute bottom-0 right-0 max-w-xs mb-8 mr-8"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
