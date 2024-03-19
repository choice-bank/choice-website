import React from "react";
import img from "../../../assets/banking/dashboard.png";

const SectionThree = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col lg:flex-row md:flex-col text-white">
      {/* left side */}
      <div className="flex flex-col bg-[#0A0534] lg:flex-grow lg:p-20 md:p-20 p-5">
        <h3
          className="font-sans lg:text-[45px] text-xl md:text-2xl font-[700] mb-4"
          style={{ lineHeight: "39px" }}
        >
          <span
            style={{
              background:
                "linear-gradient(90deg, #4B368A -17.3%, #9F45C7 102.19%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Online Banking
          </span>
        </h3>
        <p
          className="font-sans text:sm md:text-lg lg:text-[15px] mb-8 font-[400]"
          style={{ lineHeight: "22px" }}
        >
          Access your accounts and make payments anytime, anywhere with our
          convenient online and mobile banking platforms, providing you with
          ultimate flexibility and control.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="flex flex-col justify-center mr-5">
            <div className="mb-5">
              <h1
                className="font-sans text-lg md:text-xl lg:text-[16px] font-[250] mb-2 "
                style={{ lineHeight: "16px" }}
              >
                A great experience
              </h1>
              <p
                className="font-sans text-[#C4C4C4] text:sm md:text-lg lg:text-[14px] font-[250]"
                style={{ lineHeight: "18px" }}
              >
                Fast, reliable, and cost-efficient payouts for your business and
                customers.
              </p>
            </div>
            <div className="mb-5">
              <h1
                className="font-sans text-lg md:text-xl lg:text-[16px] font-[250] mb-2 "
                style={{ lineHeight: "16px" }}
              >
                Manage your finances
              </h1>
              <p
                className="font-sans text-[#C4C4C4] text:sm md:text-lg lg:text-[14px] font-[250]"
                style={{ lineHeight: "18px" }}
              >
                Easily keep track of your payments and manage your accounts.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-5">
              <h1
                className="font-sans text-lg md:text-xl lg:text-[16px] font-[250] mb-2 "
                style={{ lineHeight: "16px" }}
              >
                Easily implemented
              </h1>
              <p
                className="font-sans text-[#C4C4C4] text:sm md:text-lg lg:text-[14px] font-[250]"
                style={{ lineHeight: "18px" }}
              >
                Integrate with our API or set up payouts in seconds.
              </p>
            </div>
            <div className="mb-5">
              <h1
                className="font-sans text-lg md:text-xl lg:text-[16px] font-[250] mb-2 "
                style={{ lineHeight: "16px" }}
              >
                Built with security in mind
              </h1>
              <p
                className="font-sans text-[#C4C4C4] text:sm md:text-lg lg:text-[14px] font-[250]"
                style={{ lineHeight: "18px" }}
              >
                We use two-factor authentication and invest heavily in
                sophisticated fraud detection.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2
            className="font-sans text-lg md:text-xl lg:text-[15px] font-[500] mb-1"
            style={{ lineHeight: "16px" }}
          >
            Transfer methods
          </h2>
          <h3
            className="font-sans text-lg md:text-xl lg:text-[15px] font-[500] mb-5"
            style={{ lineHeight: "16px" }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #4B368A -17.3%, #9F45C7 102.19%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              supported
            </span>
          </h3>
          <div className="flex  gap-2 lg:flex-row  mb-2">
            <div
              className="rounded-full p-2"
              style={{
                background: "rgba(255, 255, 255, 0.13)",
                border: "1px solid #586ECF",
              }}
            >
              <p className="font-sans text-[14px] font-[400]">
                Choice Internal Transfer
              </p>
            </div>
            <div
              className="rounded-full p-2"
              style={{
                background: "rgba(255, 255, 255, 0.13)",
                border: "1px solid #586ECF",
              }}
            >
              <p className="font-sans text-[14px] font-[400]">Pesalink</p>
            </div>
            <div
              className="rounded-full p-2"
              style={{
                background: "rgba(255, 255, 255, 0.13)",
                border: "1px solid #586ECF",
              }}
            >
              <p className="font-sans text-[14px] font-[400]">RTGS</p>
            </div>
          </div>
          <div className="flex  gap-2 md:flex-row lg:flex-row  mb-2">
            <div
              className="rounded-full p-2"
              style={{
                background: "rgba(255, 255, 255, 0.13)",
                border: "1px solid #586ECF",
              }}
            >
              <p className="font-sans text-[14px] font-[400]">Mobile Money</p>
            </div>
            <div
              className="rounded-full p-2"
              style={{
                background: "rgba(255, 255, 255, 0.13)",
                border: "1px solid #586ECF",
              }}
            >
              <p className="font-sans text-[14px] font-[400]">Paybill</p>
            </div>
            <div
              className="rounded-full p-2"
              style={{
                background: "rgba(255, 255, 255, 0.13)",
                border: "1px solid #586ECF",
              }}
            >
              <p className="font-sans text-[14px] font-[400]">Till</p>
            </div>
            <div
              className="rounded-full p-2"
              style={{
                background: "rgba(255, 255, 255, 0.13)",
                border: "1px solid #586ECF",
              }}
            >
              <p className="font-sans text-[14px] font-[400]">EFT</p>
            </div>
            <div
              className="rounded-full p-2"
              style={{
                background: "rgba(255, 255, 255, 0.13)",
                border: "1px solid #586ECF",
              }}
            >
              <p className="font-sans text-[14px] font-[400]">SWIFT</p>
            </div>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="bg-[#F2F1FF] lg:flex-shrink-0 flex">
        <img src={img} alt="bg" className="object-contain " />
      </div>
    </div>
  );
};

export default SectionThree;
