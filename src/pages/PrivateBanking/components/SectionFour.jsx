import React from "react";
import img from "../../../assets/banking/pic3.png";

const SectionFour = () => {
  return (
    <div className="min-h-screen flex items-center justify-center lg:justify-around   py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h1
          className="lg:text-4xl text-xl font-bold mb-8"
          style={{ lineHeight: "35px" }}
        >
          Your Ideal Money <br />{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, #5A3A95 1.43%, #9E46C6 84.6%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Transfer Partner
          </span>
        </h1>
        <p
          className="text-[13px] mb-8 text-[#738A97] font-[400px]"
          style={{ lineHeight: "21px" }}
        >
          We offer a range of secure and reliable money transfer services <br />{" "}
          designed to meet your specific needs.
        </p>
        <p
          className="text-[13px] mb-8 text-[#738A97] font-[400px]"
          style={{ lineHeight: "21px" }}
        >
          Whether you are sending money to family overseas or making <br />{" "}
          business payments, our advanced technology and network of trusted{" "}
          <br /> partners ensure that your funds are transferred quickly and
          efficiently.
        </p>
        {/* <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="">
            <h1
              className="text-[16px] font-[700] mb-3"
              style={{ lineHeight: "21px" }}
            >
              Enter Recipient Details
            </h1>
            <p
              className="text-[13px] mb-8 text-[#738A97] font-[400px]"
              style={{ lineHeight: "20px" }}
            >
              Enter the recipient's details and the amount you wish to send
            </p>
          </div>
          <div className="">
            <h1
              className="text-[16px] font-[700] mb-3"
              style={{ lineHeight: "20px" }}
            >
              Choose Transfer Method
            </h1>
            <p
              className="text-[13px] mb-8 text-[#738A97] font-[400px]"
              style={{ lineHeight: "20px" }}
            >
              Just select the transfer method that suits your need.
            </p>
          </div>
          <div className="">
            <h1
              className="text-[16px] font-[700] mb-3"
              style={{ lineHeight: "21px" }}
            >
              Confirm and Pay
            </h1>
            <p
              className="text-[13px] mb-8 text-[#738A97] font-[400px]"
              style={{ lineHeight: "21px" }}
            >
              Review your transaction details and make a secure payment using
              your preferred method.
            </p>
          </div>
        </div> */}
      </div>
      <div className="hidden md:block">
        <img src={img} alt="phone" className="max-w-sm" />
      </div>
    </div>
  );
};

export default SectionFour;
