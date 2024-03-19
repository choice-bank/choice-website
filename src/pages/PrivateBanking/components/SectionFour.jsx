import React from "react";
import img from "../../../assets/banking/pic3.png";

const SectionFour = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row lg:flex-row items-center justify-center lg:justify-center md:justify-center lg:items-center md:items-center ">
      <div className="lg:w-1/4 md:w-3/4 w-full p-5">
        <h1
          className="lg:text-[35px] md:text-2xl text-xl font-[500]"
          style={{ lineHeight: "36px" }}
        >
          Your Ideal Money
        </h1>
        <h1
          className="lg:text-[35px] md:text-2xl text-xl font-[500]"
          style={{ lineHeight: "36px" }}
        >
          Transfer Partner
        </h1>
        <p
          className="text-[15px] mb-4  font-[400]"
          style={{ lineHeight: "22px" }}
        >
          We offer a range of secure and reliable money transfer services
          designed to meet your specific needs.
        </p>
        <p
          className="text-[15px] mb-8 ] font-[400]"
          style={{ lineHeight: "22px" }}
        >
          Whether you are sending money to family overseas or making business
          payments, our advanced technology and network of trusted partners
          ensure that your funds are transferred quickly and efficiently.
        </p>
      </div>
      <div className="md:block h-full">
        <img src={img} alt="phone" className="object-contain" />
      </div>
    </div>
  );
};

export default SectionFour;
