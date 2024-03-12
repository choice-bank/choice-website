import React from "react";
import img from "../../../assets/banking/dashboard.png";

const SectionThree = () => {
  return (
    <div className="bg-[#0A0534] min-h-screen flex flex-col  justify-center text-white p-5">
      <div className="container mx-auto flex flex-col md:flex-col lg:flex-row justify-center items-center md:justify-between md:items-start lg:justify-center lg:items-center">
        <div className="max-w-lg mr-10 items-center">
          <h3 className="lg:text-4xl text-xl md:text-2xl font-bold mb-4">
            Online and <br /> Mobile Banking
          </h3>
          <p className=" text:sm md:text-lg lg:text-lg mb-8">
            Access your accounts and make payments anytime, anywhere with our
            convenient online and mobile banking platforms, providing you with
            ultimate flexibility and control.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex flex-col justify-center mr-5">
              <div className="mb-5">
                <h1 className="text-lg md:text-xl lg:text-2xl font-[500] text-[#9C45C5]">
                  A great experience
                </h1>
                <p className="text-white text:sm md:text-lg lg:text-lg font-[250]">
                  Fast, reliable, and cost-efficient payouts for your business
                  and customers.
                </p>
              </div>
              <div className="mb-5">
                <h1 className="text-lg md:text-xl lg:text-2xl font-[500] text-[#9C45C5]">
                  Manage your finances
                </h1>
                <p className="text-white text:sm md:text-lg lg:text-lg font-[250]">
                  Easily keep track of your payments and manage your accounts.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="mb-5">
                <h1 className="text-lg md:text-xl lg:text-2xl font-[500] text-[#9C45C5]">
                  Easily implemented
                </h1>
                <p className="text-white text:sm md:text-lg lg:text-lg font-[250]">
                  Integrate with our API or set up payouts in seconds.
                </p>
              </div>
              <div className="mb-5">
                <h1 className="text-lg md:text-xl lg:text-2xl font-[500] text-[#9C45C5]">
                  Built with security in mind
                </h1>
                <p className="text-white text:sm md:text-lg lg:text-xl  font-[250]">
                  We use two-factor authentication and invest heavily in
                  sophisticated fraud detection.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-[500] ">
              Transfer methods
            </h2>
            <h3 className="text-lg md:text-xl lg:text-2xl font-[500] text-[#9C45C5]">
              supported;
            </h3>
            <div className="flex justify-between gap-2 lg:flex-row lg:justify-between mb-2">
              <div
                className="rounded-full p-2"
                style={{
                  background: "rgba(255, 255, 255, 0.13)",
                  border: "1px solid #586ECF",
                }}
              >
                Choice Internal Transfer
              </div>
              <div
                className="rounded-full p-2"
                style={{
                  background: "rgba(255, 255, 255, 0.13)",
                  border: "1px solid #586ECF",
                }}
              >
                Pesalink
              </div>
              <div
                className="rounded-full p-2"
                style={{
                  background: "rgba(255, 255, 255, 0.13)",
                  border: "1px solid #586ECF",
                }}
              >
                RTGS
              </div>
            </div>
            <div className="flex justify-between gap-2 md:flex-row lg:flex-row md:justify-between lg:justify-between mb-2">
              <div
                className="rounded-full p-2"
                style={{
                  background: "rgba(255, 255, 255, 0.13)",
                  border: "1px solid #586ECF",
                }}
              >
                Mobile Money
              </div>
              <div
                className="rounded-full p-2"
                style={{
                  background: "rgba(255, 255, 255, 0.13)",
                  border: "1px solid #586ECF",
                }}
              >
                Paybill
              </div>
              <div
                className="rounded-full p-2"
                style={{
                  background: "rgba(255, 255, 255, 0.13)",
                  border: "1px solid #586ECF",
                }}
              >
                Till
              </div>
              <div
                className="rounded-full p-2"
                style={{
                  background: "rgba(255, 255, 255, 0.13)",
                  border: "1px solid #586ECF",
                }}
              >
                EFT
              </div>
              <div
                className="rounded-full p-2"
                style={{
                  background: "rgba(255, 255, 255, 0.13)",
                  border: "1px solid #586ECF",
                }}
              >
                SWIFT
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full h-full lg:h-full ">
          <img src={img} alt="bg" className="object-contain " />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
