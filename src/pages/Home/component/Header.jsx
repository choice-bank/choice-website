import image1 from "../../../assets/image1.png";

const Header = () => {
  return (
    <div
      className="min-h-screen flex font-sans flex-col pt-20 lg:pt-32 mx-auto"
      style={{ background: "linear-gradient(#778BB0, #F1ECE9)" }}
    >
      {/* Left section */}
      <div className="flex-shrink-0 md:mb-0  lg:ml-40 md:ml-10 ">
        <h1 className="font-[700] text-2xl md:text-6xl lg:text-8xl capitalize font-sans  leading-normal md:text-4xl md:leading-tight p-5">
          <span
            style={{
              background:
                "linear-gradient(90deg, #0A0534 -29.56%, #BB4ADC 132.3%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Your ultimate <br />
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
          </span>
        </h1>

        <p
          className="mb-8 font-sans text-base md:text-lg lg:text-xl font-[250] p-5"
          style={{ color: "#0B0D2C", lineHeight: "29px" }}
        >
          A Bank built by bankers & techpreneurs for next-level private <br />&
          API banking in Africa
        </p>
      </div>
      {/* right section */}
      <div className=" md:static md:flex md:flex-col md:items-end lg:self-end">
        <img
          src={image1}
          alt="Hero Image"
          className="lg:w-[500px] md:w-[400px] object-contain rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Header;
