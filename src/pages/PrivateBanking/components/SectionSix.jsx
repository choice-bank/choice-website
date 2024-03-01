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
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10">
          <h4 className="text-gray-600">And that's not all we can offer</h4>
          <h1 className="text-3xl font-bold mb-2">Explore Our Global</h1>
          <h1 className="text-3xl font-bold">Opportunities</h1>
        </div>
        <div className="flex justify-center gap-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-grow bg-white shadow-md rounded-lg p-6"
              style={{ maxWidth: "250px", minWidth: "200px" }} // Fixed width for cards
            >
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
