import image from "../../assets/aboutUs/img1.png";
const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center"
      style={{
        background: "linear-gradient(#F1EEFF, #E6E4FF)",
      }}
    >
      <div className="mt-16 px-5 lg:ml-36 lg:mt-36 pt-10">
        <h4
          className="uppercase font-[500] lg:text-[11px] text-sm"
          style={{ lineHeight: "51px" }}
        >
          about us
        </h4>
        <h1
          className="capitalize font-[700] text-xl lg:text-[60px] "
          style={{ lineHeight: "56px", letterSpacing: "-1.8px" }}
        >
          <span
            style={{
              background: "linear-gradient(to right, #0A0534, #BB4ADC)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            we're building banking
          </span>
        </h1>
        <h1
          className="capitalize font-[700] text-xl lg:text-[60px]"
          style={{ lineHeight: "56px", letterSpacing: "-1.8px" }}
        >
          <span
            style={{
              background: "linear-gradient(to right, #0A0534, #BB4ADC)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            for the internet economy
          </span>
        </h1>
      </div>
      <div className="flex lg:justify-center lg:items-center flex-col lg:flex-row justify-center items-center lg:p-40">
        <div className="flex-grow flex-shrink-1 p-5">
          <img
            src={image}
            alt="pic"
            className="h-full max-w-full object-contain"
          />
        </div>

        <div className="flex justify-center flex-col mb-10  lg:ml-0 flex-grow flex-shrink-1 lg:w-2/5">
          {" "}
          {/* Added ml-10 and lg:ml-0 classes */}
          <h4
            className="uppercase text-sm lg:text-[11px] font-[500]"
            style={{ lineHeight: "51px" }}
          >
            who we are
          </h4>
          <h1
            className="capitalize font-[700] text-xl lg:text-[35px]"
            style={{ lineHeight: "45px" }}
          >
            the ChoiceBank Story
          </h1>
          <p
            className="mb-5 mt-5 text-lg lg:text-[14px] font-[400]"
            style={{ lineHeight: "22px" }}
          >
            We are a licensed banking institution based in Kenya, dedicated to
            fostering full financial inclusion.
          </p>
          <p
            className="mb-5 text-lg lg:text-[14px] font-[400]"
            style={{ lineHeight: "22px" }}
          >
            Being flexible and dynamic in business, adapting swiftly to market
            changes and addressing the evolving needs of our customers, are the
            key priorities for the development of our Bank.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
