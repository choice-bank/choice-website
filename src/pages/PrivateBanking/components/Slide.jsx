import React, { useState } from "react";
import img1 from "../../../assets/home/app1.png";
import img2 from "../../../assets/home/app2.png";
import { ArrowForwardOutlined, ArrowBackOutlined } from "@mui/icons-material";

const items = [
  {
    id: 1,
    title: "Enter Recipient Details",
    description:
      "Enter the recipient's details and the amount you wish to send",
    image: img1,
  },
  {
    id: 2,
    title: "Choose Transfer Method",
    description: "Just select the transfer method that suits your need.",
    image: img1,
  },
  {
    id: 3,
    title: "Confirm and Pay",
    description:
      "Review your transaction details and make a secure payment using your preferred method.",
    image: img2,
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleButtonClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="p-5 justify-center flex flex-col items-center">
      <div className="relative">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center">
            <img
              src={items[currentIndex].image}
              alt=""
              className="w-50 h-auto"
            />
            <div className="ml-4 lg:w-[400px]">
              <h2 className="text-lg font-semibold">
                {items[currentIndex].title}
              </h2>
              <p>{items[currentIndex].description}</p>
            </div>
          </div>
        </div>
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-2xl"
          onClick={handlePrev}
        >
          <ArrowBackOutlined />
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-2xl"
          onClick={handleNext}
        >
          <ArrowForwardOutlined />
        </button>
      </div>
      <div className="flex mt-4">
        {items.map((item, index) => (
          <button
            key={index}
            className={`w-4 h-4 mx-2 rounded-full ${
              index === currentIndex ? "bg-gray-500" : "bg-gray-300"
            }`}
            onClick={() => handleButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
