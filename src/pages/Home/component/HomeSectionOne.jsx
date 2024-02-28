import image from "../../../assets/person1.png";

const HomeSectionOne = () => {
  return (
    <div
      className="flex  justify-around min-h-screen bg-[#0A0534]"
      style={{
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      {/* Left Section */}
      <div className="p-8 items-center">
        <div className="flex p-2">
          <div
            className="inline-block"
            style={{
              background: "linear-gradient(to left, #D43A36, #6043EC, #120670)",
              borderRadius: "50px",
              padding: "3px 5px",
              marginRight: "10px",
            }}
          >
            <h1
              className="capitalize text-white"
              style={{
                fontSize: "14px",
              }}
            >
              personal private banking
            </h1>
          </div>
          <div
            className="inline-block"
            style={{
              background: "linear-gradient(to left, #D43A36, #6043EC, #120670)",
              borderRadius: "50px",
              padding: "3px 5px",
              marginRight: "10px",
            }}
          >
            <h1
              className="capitalize text-white"
              style={{
                fontSize: "14px",
              }}
            >
              business private banking
            </h1>
          </div>
        </div>
        <div>
          <h2 className=" mb-4" style={{ fontSize: "50px" }}>
            <span className="text-white italic">We believe</span>{" "}
            <span
              className="font-bold"
              style={{
                background: "linear-gradient(to right, #794EF7, #BB4ADC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Less is More
            </span>
          </h2>
          <ul
            className="ml-6 list-outside"
            style={{
              listStyleType: "none",
              marginLeft: "1.5rem",
              fontSize: "17px",
            }}
          >
            <style>
              {`
                .custom-bullet::before {
                  content: '★';
                  color: #BB4ADC;
                  margin-right: 0.5rem;
                }
              `}
            </style>
            <li
              className="text-lg font-aeonik text-[#D8D8DB] mb-2 custom-bullet"
              style={{ fontSize: "17px" }}
            >
              Next-level digital banking experience
            </li>
            <li
              className="text-lg text-[#D8D8DB] mb-2 custom-bullet"
              style={{ fontSize: "17px" }}
            >
              24 hour business and support team
            </li>
            <li
              className="text-lg text-[#D8D8DB] mb-2 custom-bullet"
              style={{ fontSize: "17px" }}
            >
              Best FX deals, customized interest rates
            </li>
            <li
              className="text-lg text-[#D8D8DB] mb-2 custom-bullet"
              style={{ fontSize: "17px" }}
            >
              Send, receive & invest funds globally
            </li>
          </ul>
        </div>
      </div>

      {/* Right Section */}
      <div className="mb-10">
        <img src={image} alt="Image" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default HomeSectionOne;
