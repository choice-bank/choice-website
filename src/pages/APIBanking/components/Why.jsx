import React from "react";
import {
  AccountBalance,
  Payments,
  PersonAddAlt1Outlined,
  Widgets,
} from "@mui/icons-material";

const items = [
  {
    title: "Compliance",
    icon: AccountBalance,
    paragraph: "Seamless compliance with industry regulations and standards.",
  },
  {
    title: "Payment processing with ease",
    icon: Payments,
    paragraph:
      "Top-notch security measures, providing peace of mind for you and your customers.",
  },
  {
    title: "Customer Onboarding & Account Management",
    icon: PersonAddAlt1Outlined,
    paragraph:
      "Flexibility to customize and tailor our services to suit your business needs and goals.",
  },
  {
    title: "KYC / KYB & AML",
    icon: Widgets,
    paragraph:
      "Allow your business to grow and expand without limitations, while maintaining oprimal performance and efficiency.",
  },
];

const Why = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white"
      style={{
        background: "radial-gradient(circle,#241B48, #392655, #0A0D25)",
      }}
    >
      <h1>Why Partner With Us!</h1>
      <Card items={items} />
      <div>
        <h1>Who we partner with</h1>
      </div>
      <ul>
        <li>Large Enterprises</li>
        <li>Fintech Startups</li>
        <li>E-Commerce Platform</li>
        <li>Small & Medium Sized Businesses</li>
        <li>International Businesses</li>
        <li>Non-Bank Financial Institutions</li>
      </ul>
    </div>
  );
};

const Card = ({ items }) => {
  return (
    <div className="flex items-center">
      {items.map((item, index) => (
        <div
          key={index}
          className="max-w-md w-full rounded overflow-hidden shadow-lg m-4 relative"
        >
          <div className="px-4 py-2 text-white ">{item.title}</div>
          <div className="px-4 py-2 text-white ">{item.paragraph}</div>
          <div className="absolute bottom-0 right-0 p-2 bg-gray-200">
            <item.icon fontSize="large" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Why;
