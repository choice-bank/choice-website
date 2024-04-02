import React from "react";
import globe from "../../../assets/banking/globe.png";

const items = [
  {
    h1: "Versatile FX",
    h2: "Services",
    description: "Currency exchange, international payment services",
  },
  {
    h1: "Competitive",
    h2: "Exchange Rates",
    description:
      "Benefit from favorable exchange rates for major global currencies USD, GBP, EUR and CNY, providing you with a competitive edge in the international marketplace.",
  },
  {
    h1: "Seamless",
    h2: "Execution",
    description:
      "Experience swift and seamless execution of real-time currency exchanges, ensuring efficient & immediate transactions to support your global financial operations with ease.",
  },
  {
    h1: "Expert Market",
    h2: "Insights",
    description:
      "Stay ahead of the curve in the dynamic global world, offering an understanding of currency trends & empowering you to make informed decisions.",
  },
];

const SectionSix = () => {
  return (
    <div
      className="min-h-screen flex lg:items-center justify-center  py-10 relative"
      style={{
        background: "linear-gradient(180deg, #F8F8F8 0%, #F9F9F9 100%)",
      }}
    >
      <img
        src={globe}
        alt=""
        className="mx-auto md:inline lg:inline hidden"
        style={{
          position: "absolute",
          left: "calc(50% - 250px)",
          top: "50px",
          width: "500px",
        }}
      />
      <div className="max-w-full lg:mx-auto">
        <div className="mb-10  text-center">
          <h4
            className="font-sans text-[#0A0534] text-[18px] md:text-xl lg:text-[19px] font-[250]"
            style={{ lineHeight: "22px" }}
          >
            And that's not all we can offer
          </h4>
          <h1 className="font-sans text-[#0A0534] text-[42px] md:text-4xl lg:text-[45px] font-[700] leading-[30px] lg:leading-[45px]">
            Meet Our Global
          </h1>
          <h1 className="font-sans text-[42px] md:text-4xl lg:text-[45px] font-[700]">
            <span
              style={{
                background:
                  "linear-gradient(90deg, #5A3A95 1.43%, #9E46C6 84.6%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Opportunities
            </span>
          </h1>
        </div>
        <div className="flex gap-7 flex-col lg:flex-row md:flex-row  lg:mx-32 h-[full] p-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white  rounded-lg  lg:p-5 md:p-4 p-2 lg:w-full w-full md:w-full border-b-2 border-t-2 lg:hover:border-[#9E46C6]  transition duration-500 lg:hover:scale-125 md:hover:scale:125"
              style={{
                boxShadow: "0px 7px 34px 0px rgba(25, 5, 121, 0.07)",
              }}
            >
              <h2
                className="font-sans text-[25px]  font-[700]"
                style={{ lineHeight: "27px" }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(270deg, #9D45C6 51.19%, #593994 83.75%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.h1}
                </span>
              </h2>
              <h2
                className="font-sans text-[25px]  font-[700] mb-5"
                style={{ lineHeight: "27px" }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(270deg, #9D45C6 51.19%, #593994 83.75%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {item.h2}
                </span>
              </h2>
              <p
                className="font-sans text-[#273740] text-sm md:text-sm lg:text-[14px] font-[400]"
                style={{ lineHeight: "17px" }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
