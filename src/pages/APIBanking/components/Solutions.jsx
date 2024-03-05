import React, { useState } from "react";
import pic1 from "../../../assets/api/pic1.png";
import pic2 from "../../../assets/api/pic2.png";
import pic3 from "../../../assets/api/pic3.png";
import {
  AirlineStopsOutlined,
  ElectricalServicesOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
  LocalMallOutlined,
} from "@mui/icons-material";

const Solutions = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggleExpand = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null);
    } else {
      setExpandedItem(index);
    }
  };

  const isExpanded = (index) => expandedItem === index;

  return (
    <div
      className="min-h-screen lg:pt-24 lg:px-16 p-10"
      style={{ backgroundColor: "rgba(217,217,217,0.17)" }}
    >
      <div className="text-center mb-20">
        <h4 className="text-lg lg:text-2xl font-medium">
          And that's not all we can offer
        </h4>
        <h1 className="font-[700] text-4xl lg:text-8xl">Meet out Global</h1>
        <h1
          className="font-bold text-4xl lg:text-8xl"
          style={{
            backgroundImage:
              "linear-gradient(rgba(90,58,149,1), rgba(158,70,198,1))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundSize: "cover",
          }}
        >
          Solutions
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">
        {solutions.map((solution, index) => (
          <div key={index} className="">
            <div className="mb-8">
              <img src={solution.image} alt={solution.alt} />
              <div className="flex items-center  mt-6">
                {solution.icon}
                <h1
                  className="font-bold text-2xl ml-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(90,58,149,1), rgba(158,70,198,1))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundSize: "cover",
                  }}
                >
                  {solution.title}
                </h1>
              </div>
            </div>
            <p className="text-lg ">
              {isExpanded(index) ? solution.more : solution.description}
            </p>
            <div
              className="flex items-center mt-4"
              onClick={() => handleToggleExpand(index)}
            >
              <p className="font-bold">
                {isExpanded(index) ? "Read Less" : "Read More"}
              </p>
              {isExpanded(index) ? (
                <KeyboardArrowUpOutlined className="ml-1" />
              ) : (
                <KeyboardArrowDownOutlined className="ml-1" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const solutions = [
  {
    image: pic1,
    alt: "Fintech",
    icon: <AirlineStopsOutlined style={{ color: "#6043ED" }} size={20} />,
    title: "Fintech",
    description:
      "We empower fintech firms to rapidly deploy a wide range of services--including budgeting tools, credit solutions, payment processing, and international investment--through a straightforward API integration, typically within a matter of weeks.",
    more: "We empower fintech firms to rapidly deploy a wide range of services--including budgeting tools, credit solutions, payment processing, and international investment--through a straightforward API integration, typically within a matter of weeks. By eliminating the burdensome expenses and intricate processes associated with building and upholding a banking framework, we enable our partners to focus on innovation and tailor their financial products to stand out in the market,",
  },
  {
    image: pic2,
    alt: "E-Commerce",
    icon: <LocalMallOutlined style={{ color: "#6043ED" }} size={20} />,
    title: "E-Commerce",
    description:
      "Our API suite allows e-commerce platforms to integrate direct bank payments, automate refunds, manage merchant fund settlements, and offer flexible financing options like Buy Now Pay Later (BNPL) at checkout. ",
    more: "Our API suite allows e-commerce platforms to integrate direct bank payments, automate refunds, manage merchant fund settlements, and offer flexible financing options like Buy Now Pay Later (BNPL) at checkout. With real-time payment tracking and reconciliation, e-commerce businesses can enhance operational efficiency, reduce cart abandonment rates, and build customer trust. By streamlining financial operations, e-commerce sites can focus on expanding their product lines and improving user experience, driving growth and customer loyalty.",
  },
  {
    image: pic3,
    alt: "Enterprise",
    icon: <ElectricalServicesOutlined style={{ color: "#6043ED" }} size={20} />,
    title: "Enterprise",
    description:
      "Our comprehensive solution, including automated payroll services, expense tracking, and real-time financial reporting, is designed to integrate efforlessly with existing corporate' systems via API.",
    more: "Our comprehensive solution, including automated payroll services, expense tracking, and real-time financial reporting, is designed to integrate efforlessly with existing corporate' systems via API. Our scalable services enable enterprises to facilitate B2B payments and access global markets with multi-currency accounts and FX services. We ensure compliance with regional and international regulations, minimizing legal risks while handling cross-border transactions. By leveraging our API banking services, enterprises can gain a competitive edge through enhanced financial agility and deliver superior value to their clients and stakeholders.",
  },
];

export default Solutions;
