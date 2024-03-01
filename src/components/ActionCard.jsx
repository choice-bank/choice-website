import React from "react";
import { ArrowForward } from "@mui/icons-material";
import bg from "../assets/card.png";

const ActionCard = ({ title, subTitle, button }) => {
  return (
    <div
      className="flex justify-center mt-20"
      style={{ height: "50vh" }} // Adjust the height as needed
      id="outer"
    >
      <div
        className="text-white p-6"
        style={{
          borderRadius: "10px",
          width: "70%",
          height: "300px",
          backgroundImage: `url(${bg})`,
        }}
        id="second"
      >
        <div className="flex flex-col justify-center h-full">
          <h2
            className="text-lg font-bold mb-10 text-center"
            style={{ fontSize: "36px" }}
          >
            {title}
          </h2>
          <p className="text-sm mb-4 text-center">{subTitle}</p>
          <div
            className="flex justify-center items-center mx-auto py-3 px-10"
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
