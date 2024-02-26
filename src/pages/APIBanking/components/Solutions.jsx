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
      className="min-h-screen pt-24 px-16"
      style={{ backgroundColor: "rgba(217,217,217,0.17)" }}
    >
      <div className="text-center mb-20">
        <h4 className="text-lg font-medium" style={{ fontSize: "18px" }}>
          And that's not all we can offer
        </h4>
        <h1 className="font-bold" style={{ fontSize: "45px" }}>
          Meet our Global Solutions
        </h1>
        <h1
          className="font-bold"
          style={{
            fontSize: "45px",
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
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
    more: "Our API banking services provide enterprises with a robust global payments infrastructure that supports seamless multi-currency transactions.",
  },
  {
    image: pic2,
    alt: "E-Commerce",
    icon: <LocalMallOutlined style={{ color: "#6043ED" }} size={20} />,
    title: "E-Commerce",
    description:
      "We are committed to optimizing payment workflow for e-commerce platforms, enhancing the customer purchasing journey through a suite of advanced features.",
    more: "We empower fintech firms to rapidly deploy a wide range of services--including budgeting tools, credit solutions, payment processing, and international investment--through a straightforward API integration, typically within a matter of weeks.",
  },
  {
    image: pic3,
    alt: "Enterprise",
    icon: <ElectricalServicesOutlined style={{ color: "#6043ED" }} size={20} />,
    title: "Enterprise",
    description:
      "Our API banking services provide enterprises with a robust global payments infrastructure that supports seamless multi-currency transactions.",
    more: "We are committed to optimizing payment workflow for e-commerce platforms, enhancing the customer purchasing journey through a suite of advanced features.",
  },
];

export default Solutions;
