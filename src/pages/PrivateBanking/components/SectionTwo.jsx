import React from "react";
import pic1 from "../../../assets/banking/image2.png";
import pic2 from "../../../assets/banking/image3.png";
import pic3 from "../../../assets/banking/image4.png";

const SectionTwo = () => {
  const cards = [
    {
      icon: "",
      title: "All-In-One Digital Banking Platforms",
      imageUrl: pic1,
    },
    {
      icon: "",
      title: "Top-Of-Market Rates",
      imageUrl: pic2,
    },
    {
      icon: "",
      title: "Dedicated Private Bankers",
      imageUrl: pic3,
    },
    {
      icon: "",
      title: "Global Investments",
      imageUrl: pic1,
    },
  ];
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-5"
      style={{
        background:
          "linear-gradient(180deg, #EFEDFE 0%, rgba(239, 236, 254, 0.00) 100%)",
      }}
    >
      <h1 className="mt-5 font-semibold text-[0A1D2B] mb-6 text-center text-lg lg:text-6xl md:text-6xl">
        Bank the way you want
      </h1>
      <p className="text-center w-full lg:w-1/2 mb-10 text-lg">
        With its automated features and smart technology, ChoiceBank gives you
        control of your money to help you reach your money goals{" "}
      </p>

      <div className=" justify-center">
        <div className="flex flex-col lg:flex-row md:flew-row">
          {cards.map((card, index) => (
            <div key={index} className="lg:w-3/4 md:w-3/4 p-4">
              <div
                className="relative bg-cover h-[400px] w-[300px] shadow-md "
                style={{
                  backgroundImage: `url(${cards[index].imageUrl})`,
                  borderRadius: "10px",
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="inline-block">
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.20)",
                        borderRadius: "50px",
                        padding: "3px 5px",
                        display: "inline-block",
                      }}
                    >
                      <h2 className=" uppercase font-bold text-white text-lg">
                        {card.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
