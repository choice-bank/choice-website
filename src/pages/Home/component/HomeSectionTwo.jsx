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
        "Security is our top priority. Our Bank is regulated by the Central Bank of Kenya (CBK) and deposits are insured by Kenya Deposit Insurance Corporation (KDIC).",
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
        "An agile business and support team is at your disposal anytime for your everyday banking needs and long-term financial planning.",
    },
    {
      id: 4,
      title: "best deals",
      imageUrl: pic4,
      description:
        "You grow, we grow. As your partner, we always push the best deals for you in transactions, savings, FX, investments and much more.",
    },
    {
      id: 5,
      title: "global outreach",
      imageUrl: pic2,
      description:
        "We have built seamless remittance and investment products connecting you to the world effortlessly.",
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
    <div className="min-h-screen flex flex-col p-5 lg:p-20 md:p-10">
      <h1
        className="font-sans font-[500] text-[0A1D2B] mb-6 text-center text-[35px] md:text-xl lg:text-[35px] "
        style={{ lineHeight: "35px" }}
      >
        Unparalleled Banking <br />
        Experience
      </h1>

      <div className="flex flex-col md:justify-around md:items-center  lg:justify-around lg:items-center lg:flex-row md:flex-row">
        {visibleIndices.map((index) => (
          <div
            key={cards[index].id}
            className="relative lg:w-[600px] md:w-full md:m-3 m-5 bg-cover bg-no-repeat rounded-lg h-[450px]"
            style={{
              backgroundImage: `url(${cards[index].imageUrl})`,
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div
                className="inline-block rounded-full py-2 px-2  md:py-2 md:px-2 mb-2"
                style={{
                  background: "white",
                }}
              >
                <h2 className="font-sans uppercase font-[500] text-center text-[11px] ">
                  {cards[index].title}
                </h2>
              </div>

              <p
                className="font-sans text-white text-[12px] font-[400]"
                style={{ lineHeight: "16px" }}
              >
                {cards[index].description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex space-x-4 justify-center lg:justify-end md:justify-end ">
        <div
          className="bg-[#6043ED] hover:bg-purple-300 text-white font-semibold py-2 px-4 flex justify-center items-center"
          style={{ borderRadius: "50%", height: "30px", width: "30px" }}
        >
          <ArrowBack onClick={showPreviousCard} />
        </div>
        <div
          className="bg-[#6043ED] hover:bg-blue-300 text-white font-semibold py-2 px-4 flex justify-center items-center"
          style={{ borderRadius: "50%", height: "30px", width: "30px" }}
        >
          <ArrowForward onClick={showNextCard} />
        </div>
      </div>
    </div>
  );
};

export default HomeSectionTwo;
