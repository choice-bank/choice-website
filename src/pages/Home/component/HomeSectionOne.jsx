import image from "../../../assets/person1.png";

const HomeSectionOne = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-around  bg-[#0A0534] lg:p-20">
      {/* Left Section */}
      <div className="p-8 items-center lg:w-1/2">
        <div className="flex mb-5">
          <div
            className="inline-block rounded-full py-2 px-4 mr-5 "
            style={{
              background:
                "linear-gradient(90deg, #D43A36 -10.29%, #6043EC 35.97%, #120670 91.38%)",
              borderRadius: "50px",
              padding: "3px 5px",
            }}
          >
            <h1 className="capitalize text-white text-center text-sm md:text-base">
              personal private banking
            </h1>
          </div>
          <div
            className="inline-block  rounded-full py-2 px-"
            style={{
              background:
                "linear-gradient(90deg, #D43A36 -10.29%, #6043EC 35.97%, #120670 91.38%)",
              borderRadius: "50px",
              padding: "3px 8px",
            }}
          >
            <h1 className="capitalize text-white text-center text-sm md:text-base">
              business private banking
            </h1>
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-[400] text-white text-lg lg:text-6xl">
            <span className="italic">We believe </span>
            <span
              className="font-bold"
              style={{
                background:
                  "linear-gradient(90deg, #794EF7 -29.56%, #BB4ADC 132.3%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Less is More
            </span>
          </h2>
          <ul
            className="ml-6 list-outside text-white"
            style={{
              listStyleType: "none",
              marginLeft: "1.5rem",
              fontSize: "clamp(16px, 1vw, 18px)",
            }}
          >
            <li className="text-lg font-aeonik mb-2 custom-bullet">
              Next-level digital banking experience
            </li>
            <li className="text-lg mb-2 custom-bullet">
              24 hour business and support team
            </li>
            <li className="text-lg mb-2 custom-bullet">
              Best FX deals, customized interest rates
            </li>
            <li className="text-lg mb-2 custom-bullet">
              Send, receive & invest funds globally
            </li>
          </ul>
        </div>
      </div>

      <div className="lg:flex mb-10">
        {" "}
        {/* Show only on large screens */}
        <img src={image} alt="Image" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default HomeSectionOne;
