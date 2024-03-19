import React from "react";

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
      className="min-h-screen flex lg:items-center justify-center  py-10"
      style={{
        background: "linear-gradient(180deg, #F8F8F8 0%, #F9F9F9 100%)",
      }}
    >
      <div className="max-w-full lg:mx-auto">
        <div className="mb-10  text-center">
          <h4
            className="text-[#0A0534] text-sm md:text-xl lg:text-[19px] font-[250]"
            style={{ lineHeight: "22px" }}
          >
            And that's not all we can offer
          </h4>
          <h1
            className="text-[#0A0534] text-2xl md:text-4xl lg:text-[45px] font-[700] mb-1"
            style={{ lineHeight: "45px" }}
          >
            Meet Our Global
          </h1>
          <h1 className="text-2xl md:text-4xl lg:text-[45px] font-[700]">
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
        <div className="flex gap-2 flex-col lg:flex-row md:flex-row  lg:mx-32 h-[240px]">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg  p-2 lg:w-full w-full md:w-full"
            >
              <h2
                className="text-lg md:text-xl lg:text-[25px] font-[700]"
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
                className="text-lg md:text-xl lg:text-[25px] font-[700] mb-5"
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
                className="text-[#273740] text-sm md:text-sm lg:text-[14px] font-[400]"
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
