import React, { useState } from "react";
import {
  LoopOutlined,
  RocketLaunchOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import img from "../../../assets/api/img1.png";
import icon from "../../../assets/icon.svg";
import icon1 from "../../../assets/icons/icon1.png";
import icon2 from "../../../assets/icons/icon2.png";
import icon3 from "../../../assets/icons/icon3.png";

const items = [
  {
    id: 1,
    icon: WorkspacePremiumOutlined,
    icon_2: icon1,
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
    icon_2: icon2,
    image: img,
    title: "An All-in-One Platform",
    lists: ["Bank Accounts", "Payments", "Credit", "FX Investments and more"],
  },
  {
    id: 3,
    icon: RocketLaunchOutlined,
    icon_2: icon3,
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

const Tools = ({ id }) => {
  const [activeItemId, setActiveItemId] = useState(1);

  const handleItemClick = (id) => {
    setActiveItemId(id);
  };

  return (
    <div id={id} className="flex flex-col lg:items-center p-10">
      <div className="flex flex-col items-center lg:mb-10 mb-5 lg:w-1/2 w-full">
        <div>
          <div className="inline-block bg-[#6043EC] rounded-full px-3 py-1">
            <p className="text-white font-[500] text-sm md:text-base lg:text-[12px]">
              API Banking
            </p>
          </div>
        </div>

        <h1
          className="font-[700] text-sm lg:text-[45px]"
          style={{ lineHeight: "45px" }}
        >
          Add your own Tools
        </h1>
        <h1
          className="font-[700] text-sm lg:text-[45px]"
          style={{ lineHeight: "45px" }}
        >
          With Our Business API
        </h1>

        <p
          className="text-center text-lg lg:text-[14px] font-[400]"
          style={{ lineHeight: "18px" }}
        >
          Connect your company's own applications to your Choice Business
          <br />
          account for a personalized customer experience.
        </p>
      </div>

      <div className="flex justify-center items-center space-x-2 lg:space-x-6 lg:mb-8 ">
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
              <p className="font-[500] text-lg lg:text-[20px]">{item.title}</p>

              {item.lists.map((list, i) => (
                <div className="flex" key={i}>
                  <img src={icon} className="mr-2" />
                  <p
                    className="flex font-[250] lg:items-center text-[17px] text-[#0A0534]"
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

      {/* <div className="flex items-center mb-8">
        <div className="flex-grow border-t border-[#E4E4E4]"></div>
        <p className="mx-4">Trusted By</p>
        <div className="flex-grow border-t border-[#E4E4E4]"></div>
      </div>
      <img src={sponsor} alt="" className="mx-auto object-fit" /> */}
    </div>
  );
};

const ToolItem = ({ item, isActive, onClick }) => {
  return (
    <div
      className={`items-center flex rounded-full py-3 px-5 cursor-pointer  ${
        isActive ? "bg-black text-white" : "bg-white border border-black"
      }`}
      onClick={onClick}
    >
      <item.icon />
      <p className="ml-2 text-sm lg:text-[12px]">{item.title}</p>
    </div>
  );
};

export default Tools;
