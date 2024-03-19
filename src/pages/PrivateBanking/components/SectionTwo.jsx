import React from "react";
import pic1 from "../../../assets/banking/image2.png";
import pic2 from "../../../assets/banking/image3.png";
import pic3 from "../../../assets/banking/image4.png";
import icon1 from "../../../assets/banking/icon1.png";
import icon2 from "../../../assets/banking/icon2.png";
import icon3 from "../../../assets/banking/icon3.png";
import icon4 from "../../../assets/banking/icon4.png";

const SectionTwo = () => {
  const cards = [
    {
      icon: icon1,
      h1: "All-In-One Digital",
      h2: "Banking Platforms",
      imageUrl: pic1,
    },
    {
      icon: icon2,
      h1: "Top-Of-Market",
      h2: "Rates",
      imageUrl: pic2,
    },
    {
      icon: icon3,
      h1: "Dedicated Private",
      h2: "Bankers",
      imageUrl: pic3,
    },
    {
      icon: icon4,
      h1: "Global",
      h2: "Investments",
      imageUrl: pic1,
    },
  ];
  return (
    <div
      className="lg:pb-10 p-5"
      style={{
        background:
          "linear-gradient(180deg, #EFEDFE 0%, rgba(239, 236, 254, 0.00) 100%)",
      }}
    >
      <h1
        className="mt-5 font-[700] text-[0A1D2B] mb-6 text-center text-lg lg:text-[35px] md:text-xl"
        style={{ lineHeight: "51px" }}
      >
        Bank the way you want
      </h1>
      <div className="lg:w-[550px] lg:mx-auto md:w-[700px] md:mx-auto flex lg:items-center lg:justify-center">
        <p
          className="text-center  mb-10 text-sm lg:text-[14px] md:text-lg font-[400]"
          style={{ lineHeight: "22px" }}
        >
          With its automated features and smart technology, ChoiceBank gives you
          control of your money to help you reach your money goals{" "}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row md:flex-row justify-center gap-6 items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-cover bg-no-repeat h-[500px] w-[300px] md:h-[300px] lg:h-[400px] shadow-md"
            style={{
              backgroundImage: `url(${cards[index].imageUrl})`,
              borderRadius: "10px",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div
                className="lg:p-2 flex lg:gap-2"
                style={{
                  background: "rgba(255, 255, 255, 0.20)",
                  borderRadius: "13px",
                }}
              >
                <img src={card.icon} className="object-contain" />
                <div>
                  <h2 className="uppercase text-white text-sm md:text-sm lg:text-[14px] font-[500]">
                    {card.h1}
                  </h2>
                  <h2 className="uppercase text-white text-sm md:text-sm lg:text-[14px] font-[500]">
                    {card.h2}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
