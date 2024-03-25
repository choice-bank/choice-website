import image1 from "../../../assets/image1.png";

const Header = () => {
  return (
    <div
      className="min-h-screen flex font-sans flex-col pt-52 px-5 lg:pt-72 md:pt-72 mx-auto lg:justify-center justify-between"
      style={{ background: "linear-gradient(#778BB0, #F1ECE9)" }}
    >
      {/* Left section */}
      <div className="flex-shrink-0 md:mb-0  lg:ml-40 md:ml-10 ">
        <h1 className="font-[700] text-[42px]  lg:text-[90px] capitalize font-sans  leading-[38px] md:text-[68px] md:leading-tight lg:leading-[76px] lg:tracking-[-2.76px] tracking-[-1.26px]">
          <span
            style={{
              background:
                "linear-gradient(90deg, #0A0534 -29.56%, #BB4ADC 132.3%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Your ultimate
          </span>
        </h1>
        <h1 className="font-[700] text-[42px]  lg:text-[90px] capitalize font-sans  leading-[38px] md:text-[68px] md:leading-tight lg:leading-[76px] lg:tracking-[-2.76px] tracking-[-1.26px]">
          <span
            style={{
              background:
                "linear-gradient(90deg, #0A0534 -29.56%, #BB4ADC 132.3%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Choice for Banking
          </span>
        </h1>

        <p className="mb-8 font-sans font-[250] text-[17px] md:text-lg lg:text-[20px] mt-6 leading-[20px] lg:leading-[29px] md:leading-[29px]">
          A Bank built by bankers & techpreneurs for next-level private
          <span className="md:inline lg:inline hidden">
            <br />
          </span>
          API banking in Africa
        </p>
      </div>
      {/* right section */}
      <div className=" md:static md:flex md:flex-col md:items-end lg:self-end lg:mr-32">
        <img
          src={image1}
          alt="Hero Image"
          className="lg:w-[400px] md:w-[400px] object-contain"
        />
      </div>
    </div>
  );
};

export default Header;
