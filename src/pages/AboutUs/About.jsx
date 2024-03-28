import image from "../../assets/aboutUs/img1.png";
const About = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="mt-16 px-5 lg:ml-36 lg:mt-36 pt-10">
        <h4
          className="font-sans uppercase font-[500] lg:text-[11px] text-[14px]"
          style={{ lineHeight: "51px" }}
        >
          about us
        </h4>
        <h1
          className="font-sans capitalize font-[700] text-[42px] lg:text-[60px] leading-[40px] lg:leading-[56px]"
          style={{ letterSpacing: "-1.8px" }}
        >
          <span
            style={{
              background: "linear-gradient(to right, #0A0534, #BB4ADC)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            we're building banking{" "}
            <span className="lg:inline md:inline hidden">
              <br />
            </span>{" "}
            for the internet economy
          </span>
        </h1>
      </div>
      <div className="flex md:justify-center md:items-center lg:justify-center lg:items-center flex-col lg:flex-row md:flex-row justify-center items-center lg:p-40">
        <div className="flex-grow flex-shrink-1 p-5">
          <img
            src={image}
            alt="pic"
            className="h-full max-w-full object-contain"
          />
        </div>

        <div className="flex justify-center flex-col mb-10  lg:ml-0 flex-grow flex-shrink-1 lg:w-2/5 md:w-2/5 p-5">
          {" "}
          <h4 className="font-sans uppercase text-[11px] lg:text-[11px] font-[500] lg:leading-[51px]">
            who we are
          </h4>
          <h1
            className="font-sans capitalize font-[700] text-[31px] lg:text-[35px]"
            style={{ lineHeight: "45px" }}
          >
            the ChoiceBank Story
          </h1>
          <p
            className="font-sans text-[14px] mb-5 mt-5 text-lg lg:text-[14px] font-[400]"
            style={{ lineHeight: "22px" }}
          >
            We are a licensed banking institution based in Kenya, dedicated to
            fostering full financial inclusion.
          </p>
          <p
            className="font-sans mb-5 text-lg lg:text-[14px] font-[400]"
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
