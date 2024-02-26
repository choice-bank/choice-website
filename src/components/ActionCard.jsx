import React from "react";
import { ArrowForward } from "@mui/icons-material";

const ActionCard = ({ title, subTitle, button }) => {
  return (
    <div
      className="flex justify-center mt-20"
      style={{ height: "50vh" }} // Adjust the height as needed
      id="outer"
    >
      <div
        className="text-white bg-[#0A0534] p-6"
        style={{
          borderRadius: "10px",
          width: "70%",
          height: "300px",
        }}
        id="second"
      >
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-lg font-bold mb-2 text-center"
            style={{ fontSize: "36px" }}
          >
            {title}
          </h2>
          <p className="text-sm mb-4 text-center">{subTitle}</p>
          <div
            className="flex justify-center w-2/5 mx-auto py-3 px-10"
            style={{
              background: "white",
              color: "black",
              borderRadius: "20px",
            }}
          >
            <p className="font-bold mr-3">{button}</p>
            <ArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
