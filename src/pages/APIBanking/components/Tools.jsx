import React, { useState } from "react";
import {
  LoopOutlined,
  RocketLaunchOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import img1 from "../../../assets/api/img1.png";
import img2 from "../../../assets/api/img2.png";
import img3 from "../../../assets/api/img3.png";
import icon from "../../../assets/icon.svg";
import icon1 from "../../../assets/icons/icon1.png";
import icon2 from "../../../assets/icons/icon2.png";
import icon3 from "../../../assets/icons/icon3.png";

const items = [
  {
    id: 1,
    icon: WorkspacePremiumOutlined,
    icon_2: icon1,
    image: img1,
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
    icon_2: icon2,
    image: img2,
    title: "An All-in-One Platform",
    lists: ["Bank Accounts", "Payments", "Credit", "FX Investments and more"],
  },
  {
    id: 3,
    icon: RocketLaunchOutlined,
    icon_2: icon3,
    image: img3,
    title: "Easy Quick Launch",
    lists: [
      "Clear and well documented API",
      "Configurable products",
      "PROD-like Sandbox environment",
      "Easy-to-use partner dashboard",
    ],
  },
];

const Tools = ({ id }) => {
  const [activeItemId, setActiveItemId] = useState(1);

  const handleItemClick = (id) => {
    setActiveItemId(id);
  };

  return (
    <div id={id} className="flex flex-col lg:items-center">
      <div className="flex flex-col items-center lg:mb-10 mb-5 lg:w-1/2 w-full">
        <div className="pt-5">
          <div className="lg:mt-9 md:mt-9 inline-block bg-[#6043EC] rounded-full px-3 py-1 mb-5">
            <p className="font-sans text-white font-[500] text-sm md:text-base lg:text-[12px]">
              API Banking
            </p>
          </div>
        </div>

        <h1
          className="font-sans font-[700] text-sm lg:text-[45px]"
          style={{ lineHeight: "45px" }}
        >
          Add your own Tools
        </h1>
        <h1
          className="font-sans font-[700] text-sm lg:text-[45px] mb-3"
          style={{ lineHeight: "45px" }}
        >
          With Our Business API
        </h1>

        <p
          className="font-sans text-center text-sm lg:text-[14px] font-[400] p-5"
          style={{ lineHeight: "18px" }}
        >
          Connect your company's own applications to your Choice Business
          <br />
          account for a personalized customer experience.
        </p>
      </div>

      <div className="flex justify-center items-center gap-2  lg:space-x-6 lg:mb-8 ">
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
          className={`flex flex-col lg:flex-row md:flex-row p-5 justify-center items-center mb-8 ${
            activeItemId === item.id ? "" : "hidden"
          }`}
        >
          <img src={item.image} alt="lmg" className="lg:mr-6" />
          <div>
            <div>
              <img src={item.icon_2} />
              <p className="font-sans font-[500] text-lg lg:text-[20px]">
                {item.title}
              </p>

              {item.lists.map((list, i) => (
                <div className="flex" key={i}>
                  <img src={icon} className="mr-2" />
                  <p
                    className="flex font-sans font-[250] lg:items-center text-[17px] text-[#0A0534]"
                    style={{ lineHeight: "26px" }}
                  >
                    {list}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ToolItem = ({ item, isActive, onClick }) => {
  return (
    <div
      className={`items-center flex rounded-full md:py-3 md:px-5 lg:py-3 lg:px-5 cursor-pointer  ${
        isActive ? "bg-black text-white" : "bg-white border border-black"
      }`}
      onClick={onClick}
    >
      <item.icon />
      <p className="ml-2 font-sans text-[11px] lg:text-[12px]">{item.title}</p>
    </div>
  );
};

export default Tools;
