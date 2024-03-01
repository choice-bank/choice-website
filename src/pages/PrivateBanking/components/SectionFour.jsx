import React from "react";
import img from "../../../assets/banking/pic3.png";

const SectionFour = () => {
  return (
    <div className="min-h-screen flex items-center justify-center   py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">
          Your Ideal Money <br /> Transfer Partner
        </h1>
        <p className="text-lg mb-8">
          We offer a range of secure and reliable money transfer services <br />{" "}
          designed to meet your specific needs.
        </p>
        <p className="text-lg mb-8">
          Whether you are sending money to family overseas or making <br />{" "}
          business payments, our advanced technology and network of trusted{" "}
          <br /> partners ensure that your funds are transferred quickly and
          efficiently.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-3">
              Enter Recipient Details
            </h1>
            <p>Enter the recipient's details and the amount you wish to send</p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-3">
              Choose Transfer Method
            </h1>
            <p>Just select the transfer method that suits your need.</p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl font-semibold mb-3">Confirm and Pay</h1>
            <p>
              Review your transaction details and make a secure payment using
              your preferred method.
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <img src={img} alt="phone" className="max-w-sm" />
      </div>
    </div>
  );
};

export default SectionFour;
