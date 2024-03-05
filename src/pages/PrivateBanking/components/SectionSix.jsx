import React from "react";

const items = [
  {
    title: "Versatile FX Services",
    description: "Currency exchange, international payment services",
  },
  {
    title: "Competitive Exchange Rates",
    description:
      "Benefit from favorable exchange rates for major global currencies USD, GBP, EUR and CNY, providing you with a competitive edge in the international marketplace.",
  },
  {
    title: "Seamless Execution",
    description:
      "Experience swift and seamless execution of real-time currency exchanges, ensuring efficient & immediate transactions to support your global financial operations with ease.",
  },
  {
    title: "Expert Market Insights",
    description:
      "Stay ahead of the curve in the dynamic global world, offering an understanding of currency trends & empowering you to make informed decisions.",
  },
];

const SectionSix = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center  py-16"
      style={{
        background: "linear-gradient(180deg, #F8F8F8 0%, #F9F9F9 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-10  text-center">
          <h4
            className="text-[#0A0534] text-lg lg:text-4xl"
            style={{ lineHeight: "22px" }}
          >
            And that's not all we can offer
          </h4>
          <h1
            className="text-[#0A0534] text-4xl lg:text-6xl font-bold mb-2"
            style={{ lineHeight: "45px" }}
          >
            Explore Our Global
          </h1>
          <h1
            className="text-4xl lg:text-6xl font-bold"
            style={{ lineHeight: "45px" }}
          >
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
        <div className="flex justify-center gap-2 flex-col lg:flex-row md:flex-row">
          {items.map((item, index) => (
            <div
              key={index}
              className=" bg-white shadow-md rounded-lg p-2"
              style={{ maxWidth: "250px", minWidth: "200px" }} // Fixed width for cards
            >
              <h2
                className="text-2xl lg:text-4xl mb-2"
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
                  {item.title}
                </span>
              </h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
