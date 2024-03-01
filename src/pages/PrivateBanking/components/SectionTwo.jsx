import React from "react";
import pic1 from "../../../assets/banking/image2.png";
import pic2 from "../../../assets/banking/image3.png";
import pic3 from "../../../assets/banking/image4.png";
import pic4 from "../../../assets/banking/image1.png";

const SectionTwo = () => {
  const cards = [
    {
      icon: "",
      title: "All-In-One Digital",
      description: "Banking Platforms",
      imageUrl: pic1,
    },
    {
      icon: "",
      title: "Top-Of-Market",
      description: "Rates",
      imageUrl: pic2,
    },
    {
      icon: "",
      title: "Dedicated Private",
      description: "Bankers",
      imageUrl: pic3,
    },
    {
      icon: "",
      title: "Global",
      description: "Investments",
      imageUrl: pic4,
    },
  ];
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(180deg, #EFEDFE 0%, rgba(239, 236, 254, 0.00) 100%)",
      }}
    >
      <h1
        className=" font-semibold text-[0A1D2B] mb-6 text-center"
        style={{ fontSize: "35px" }}
      >
        Unparalleled Banking <br />
        Experience
      </h1>

      <div className=" justify-center">
        <div className="flex">
          {cards.map((card, index) => (
            <div key={index} className="w-3/4 p-4">
              <div
                className="relative bg-cover h-[400px] w-[250px] rounded-lg shadow-md "
                style={{ backgroundImage: `url(${cards[index].imageUrl})` }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="inline-block">
                    <div
                      style={{
                        background: "white",
                        borderRadius: "50px",
                        padding: "3px 5px",
                        display: "inline-block",
                      }}
                    >
                      <h2
                        className=" uppercase font-bold"
                        style={{
                          margin: "0",
                          fontSize: "10px",
                        }}
                      >
                        {card.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-white" style={{ fontSize: "10px" }}>
                    {card.description}
                  </p>
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
