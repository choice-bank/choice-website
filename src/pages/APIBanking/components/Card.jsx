import React from "react";
import { AccessTime, SupportAgent, Lan, Widgets } from "@mui/icons-material";

const Card = () => {
  const items = [
    {
      icon: AccessTime,
      title: "Accelerated Time-to-Market",
      paragraph:
        "We help you lsunch new financial products and services quickly",
    },
    {
      icon: SupportAgent,
      title: "Enhanced Customer Experience",
      paragraph:
        "Deliver seamless and integrated financial services to customers, improving overall user experience and satisfaction.",
    },
    {
      icon: AccessTime,
      title: "Cost-Efficiency",
      paragraph:
        "Reduce the cost & complexity of developing and  maintaining banking infrastructure.",
    },
    {
      icon: AccessTime,
      title: "Regulatory Compliance",
      paragraph:
        "Ensure seamless compliance with industry regulations & standards, mitigating risk and maintaining trust.",
    },
    {
      icon: Lan,
      title: "Innovation & Differentiation",
      paragraph:
        "Empower partners to innovate and differentiate their offerings.",
    },
    {
      icon: Widgets,
      title: "Easy-to-use Dashboard",
      paragraph: "Partner Dashboard allows you to view and management.",
    },
  ];
  return (
    <div className="flex flex-wrap justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className="max-w-md w-full rounded overflow-hidden shadow-lg m-4"
        >
          <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 bg-gray-200 text-gray-600 rounded">
            <item.icon fontSize="large" />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base">{item.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
