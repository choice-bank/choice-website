import React, { useState } from "react";
import {
  LoopOutlined,
  RocketLaunchOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import img from "../../../assets/api/img1.png";
import sponsor from "../../../assets/api/sponsors.png";

const items = [
  {
    id: 1,
    icon: WorkspacePremiumOutlined,
    image: img,
    title: "Compliant from Day 1",
    lists: [
      "Fully licensed Kenyan bank",
      "BaaS product approved by central bank",
      "KDIC Insured Deposits",
      "AML & Compliance",
    ],
  },
  {
    id: 2,
    icon: LoopOutlined,
    image: img,
    title: "An All-in-One Platform",
    lists: ["Bank Accounts", "Payments", "Credit", "FX Investments and more"],
  },
  {
    id: 3,
    icon: RocketLaunchOutlined,
    image: img,
    title: "Easy Quick Launch",
    lists: [
      "Clear and well documented API",
      "Configurable products",
      "PROD-like Sandbox environment",
      "Easy-to-use partner dashboard",
    ],
  },
];

const Tools = () => {
  const [activeItemId, setActiveItemId] = useState(1);

  const handleItemClick = (id) => {
    setActiveItemId(id);
  };

  return (
    <div className="min-h-screen pt-24 px-16">
      <div className="text-center mb-20">
        <div className="inline-block bg-[#6043EC] rounded-full px-10 py-3">
          <p className="text-white" style={{ fontSize: "12px" }}>
            API Banking
          </p>
        </div>

        <h1 className="font-bold" style={{ fontSize: "45px" }}>
          Add your own Tools
        </h1>
        <h1
          className="font-bold"
          style={{ fontSize: "45px", lineHeight: "45px" }}
        >
          With Our Business API
        </h1>
        <p className="text-center">
          Connect your company's own applications to your Choice Business
          account for a personalized customer experience.
        </p>
      </div>

      <div className="flex justify-center items-center space-x-6 mb-8">
        {items.map((item) => (
          <ToolItem
            key={item.id}
            item={item}
            isActive={activeItemId === item.id}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          className={`flex justify-center items-center mb-8 ${
            activeItemId === item.id ? "" : "hidden"
          }`}
        >
          <img src={item.image} alt="lmg" className="mr-6" />
          <div>
            <div>
              <item.icon />
              <p className="font-[500] text-[20px]">{item.title}</p>
              <ul className="list-none">
                {item.lists.map((list, i) => (
                  <li
                    key={i}
                    className="flex items-center"
                    style={{ fontSize: "17px", lineHeight: "26px" }}
                  >
                    <svg
                      className="w-4 h-4 text-[#9E4CE8] mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 2L8 8l-8 1.5 6 6-1.5 8 7-4 7 4-1.5-8 6-6-8-1.5-4-6z"
                      />
                    </svg>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

      <div className="flex items-center mb-8">
        <div className="flex-grow border-t border-[#E4E4E4]"></div>
        <p className="mx-4">Trusted By</p>
        <div className="flex-grow border-t border-[#E4E4E4]"></div>
      </div>
      <img src={sponsor} alt="" className="mx-auto" />
    </div>
  );
};

const ToolItem = ({ item, isActive, onClick }) => {
  return (
    <div
      className={`items-center flex rounded-full  ${
        isActive ? "bg-black text-white" : "bg-white border border-black"
      }`}
      onClick={onClick}
      style={{ cursor: "pointer", padding: "2px 10px" }}
    >
      <item.icon />
      <p className="ml-2" style={{ fontSize: "12px" }}>
        {item.title}
      </p>
    </div>
  );
};

export default Tools;
