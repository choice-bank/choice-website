import { useState } from "react";
import pic1 from "../../../assets/pic1.png";
import pic2 from "../../../assets/pic2.png";
import pic3 from "../../../assets/pic3.png";
import pic4 from "../../../assets/pic4.png";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

const HomeSectionTwo = () => {
  // Dummy data for cards
  const [cards] = useState([
    {
      id: 1,
      title: "regulated bank & insured deposits",
      imageUrl: pic1,
      description:
        "Security is our top priority. Our Bank is regulated by the Central Bank of Kenya (CBK) and deposits are insured by Kenya Deposit Insurance Corporation (KDIC)",
    },
    {
      id: 2,
      title: "next level digital banking",
      imageUrl: pic2,
      description:
        "We build digital banking based on your daily use, not complicated banking language. We listen to your suggestions and are quick to upgrade. ",
    },
    {
      id: 3,
      title: "always on 24/7",
      imageUrl: pic3,
      description:
        "An agile business and support team is at your disposal anytime for your everday banking needs and long-term financial planning.",
    },
    {
      id: 4,
      title: "best deals",
      imageUrl: pic4,
      description:
        "We build digital banking based on your daily use, not complicated banking language. We listen to your suggestions and are quick to upgrade.",
    },
  ]);

  // State to manage visible cards
  const [visibleCardIndex, setVisibleCardIndex] = useState(0);

  // Function to show the previous card
  const showPreviousCard = () => {
    setVisibleCardIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  // Function to show the next card
  const showNextCard = () => {
    setVisibleCardIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get the indices of the visible cards
  const visibleIndices = [
    visibleCardIndex,
    (visibleCardIndex + 1) % cards.length,
    (visibleCardIndex + 2) % cards.length,
    (visibleCardIndex + 3) % cards.length,
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1
        className=" font-semibold text-[0A1D2B] mb-6 text-center"
        style={{ fontSize: "35px" }}
      >
        Unparalleled Banking <br />
        Experience
      </h1>

      <div className=" justify-center">
        <div className="flex">
          {visibleIndices.map((index) => (
            <div key={cards[index].id} className="w-3/4 p-4">
              <div
                className="relative bg-cover h-[400px] w-[250px] rounded-lg shadow-md "
                style={{ backgroundImage: `url(${cards[index].imageUrl})` }}
              >
                {/** Overlay */}
                <div className="absolute inset-0 bg-black opacity-70 rounded-lg">
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
                          {cards[index].title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-white" style={{ fontSize: "10px" }}>
                      {cards[index].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex space-x-4 float-right">
          <div
            className="bg-purple-600 hover:bg-purple-300 text-white font-semibold py-2 px-4 flex justify-center items-center"
            style={{ borderRadius: "50%", height: "30px", width: "30px" }}
          >
            <ArrowBack onClick={showPreviousCard} />
          </div>
          <div
            className="bg-purple-600 hover:bg-blue-300 text-white font-semibold py-2 px-4 flex justify-center items-center"
            style={{ borderRadius: "50%", height: "30px", width: "30px" }}
          >
            <ArrowForward onClick={showNextCard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSectionTwo;
