import React from "react";
import img from "../../../assets/banking/pic1.png";

const SectionThree = () => {
  return (
    <div className="bg-[#0A0534] min-h-screen flex flex-col  justify-center text-white p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <div className="max-w-lg mr-10 items-center">
          <h3
            className="lg:text-4xl text-2xl font-bold mb-4"
            style={{ lineHeight: "35px" }}
          >
            Online and <br /> Mobile Banking
          </h3>
          <p className=" text:lg mb-8" style={{ lineHeight: "21px" }}>
            Access your accounts and make payments anytime, anywhere with our
            convenient online and mobile banking platforms, providing you with
            ultimate flexibility and control.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-col justify-center mr-5">
              <div className="mb-5">
                <h1 className="text-lg lg:text-xl font-[500] text-[#9C45C5]">
                  A great experience
                </h1>
                <p
                  className="text-white text-lg font-[250]"
                  style={{ lineHeight: "18px" }}
                >
                  Fast, reliable, and cost-efficient payouts for your business
                  and customers.
                </p>
              </div>
              <div className="mb-5">
                <h1 className="text-lg lg:text-xl font-[500] text-[#9C45C5]">
                  Manage your finances
                </h1>
                <p
                  className="text-white text-lg font-[250]"
                  style={{ lineHeight: "18px" }}
                >
                  Easily keep track of your payments and manage your accounts.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="mb-5">
                <h1 className="text-lg lg:text-xl font-[500] text-[#9C45C5]">
                  Easily implemented
                </h1>
                <p
                  className="text-white text-lg font-[250]"
                  style={{ lineHeight: "18px" }}
                >
                  Integrate with our API or set up payouts in seconds.
                </p>
              </div>
              <div className="mb-5">
                <h1 className="text-lg lg:text-xl font-[500] text-[#9C45C5]">
                  Built with security in mind
                </h1>
                <p
                  className="text-white text-lg  font-[250]"
                  style={{ lineHeight: "18px" }}
                >
                  We use two-factor authentication and invest heavily in
                  sophisticated fraud detection.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="block relative">
          <img src={img} alt="bg" className="" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
