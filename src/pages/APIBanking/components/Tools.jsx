import React from "react";
import {
  LoopOutlined,
  RocketLaunchOutlined,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import img from "../../../assets/api/img1.png";
import sponsor from "../../../assets/api/sponsors.png";

const Tools = () => {
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
        <h1 className="font-bold" style={{ fontSize: "45px" }}>
          With Our Business API
        </h1>
        <p>
          Connect your company's own applications to your Choice Business
          account for a personalized customer experience.
        </p>
      </div>

      <div className="flex justify-center items-center space-x-6 mb-8">
        <ToolItem
          icon={<WorkspacePremiumOutlined />}
          text="Compliant from Day 1"
        />
        <ToolItem icon={<LoopOutlined />} text="An All-in-One Platform" />
        <ToolItem icon={<RocketLaunchOutlined />} text="Easy Quick Launch" />
      </div>

      <div className="flex justify-center items-center mb-8">
        <img src={img} alt="lmg" className="mr-6" />
        <div>
          <ToolItem
            icon={<WorkspacePremiumOutlined />}
            text="Compliant from Day 1"
          >
            <ul className="list-none">
              <li className="flex items-center" style={{ fontSize: "17px" }}>
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
                Fully licensed Kenya bank
              </li>
              <li className="flex items-center" style={{ fontSize: "17px" }}>
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
                BaaS product approved by central bank
              </li>
              <li className="flex items-center" style={{ fontSize: "17px" }}>
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
                KDIC Insured Deposits
              </li>
              <li className="flex items-center" style={{ fontSize: "17px" }}>
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
                AML & Compliance
              </li>
            </ul>
          </ToolItem>
        </div>
      </div>

      <div className="flex items-center mb-8">
        <div className="flex-grow border-t border-[#E4E4E4]"></div>
        <p className="mx-4">Trusted By</p>
        <div className="flex-grow border-t border-[#E4E4E4]"></div>
      </div>
      <img src={sponsor} alt="" className="mx-auto" />
    </div>
  );
};

const ToolItem = ({ icon, text, children }) => {
  return (
    <div className="items-center">
      {icon}
      <p className="ml-2 font-bold" style={{ fontSize: "20px" }}>
        {text}
      </p>
      {children && <div className="ml-8">{children}</div>}
    </div>
  );
};

export default Tools;
