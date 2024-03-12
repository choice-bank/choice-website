import image from "../../../assets/person1.png";
import icon from "../../../assets/icon.svg";

const HomeSectionOne = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-around   bg-[#0A0534] lg:p-20 md:flex-row md:p-5">
      {/* Left Section */}
      <div className="flex flex-col lg:justify-center lg:w-1/2">
        <div className="flex mb-5">
          <div
            className="inline-block rounded-full py-2 px-2 mr-1 md:py-2 md:px-2 "
            style={{
              background:
                "linear-gradient(90deg, #D43A36 -10.29%, #6043EC 35.97%, #120670 91.38%)",
            }}
          >
            <h1
              className="capitalize text-white text-center text-sm md:text-sm lg:text-[17px] font-[250] md:whitespace-nowrap whitespace-nowrap"
              style={{ lineHeight: "22px" }}
            >
              personal private banking
            </h1>
          </div>
          <div
            className="inline-block  rounded-full py-2 px-2 md:py-2 md:px-2"
            style={{
              background:
                "linear-gradient(90deg, #D43A36 -10.29%, #6043EC 35.97%, #120670 91.38%)",
            }}
          >
            <h1
              className="capitalize text-white text-center text-sm md:text-sm md:whitespace-nowrap whitespace-nowrap lg:text-[17px] font-[250]"
              style={{ lineHeight: "22px" }}
            >
              business private banking
            </h1>
          </div>
        </div>

        <div>
          <h2 className="mb-4 font-[400] text-white text-lg lg:text-[50px]">
            <span className="italic" style={{ lineHeight: "46px" }}>
              We believe{" "}
            </span>
            <span
              className="font-[700]"
              style={{
                background:
                  "linear-gradient(90deg, #794EF7 -29.56%, #BB4ADC 132.3%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: "76px",
              }}
            >
              Less is More
            </span>
          </h2>
          <div className="flex">
            <img src={icon} />
            <p
              className="text-[17px] font-[250] text-[#D8D8DB]"
              style={{ lineHeight: "26px" }}
            >
              Next-level digital banking experience
            </p>
          </div>
          <div className="flex">
            <img src={icon} />
            <p
              className="text-[17px] font-[250] text-[#D8D8DB]"
              style={{ lineHeight: "26px" }}
            >
              24 hour business and support team
            </p>
          </div>
          <div className="flex">
            <img src={icon} />
            <p
              className="text-[17px] font-[250]  text-[#D8D8DB]"
              style={{ lineHeight: "26px" }}
            >
              Best FX deals, customized interest rates
            </p>
          </div>
          <div className="flex">
            <img src={icon} />
            <p
              className="text-[17px] font-[250] text-[#D8D8DB]"
              style={{ lineHeight: "26px" }}
            >
              Send, receive & invest funds globally
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex mb-10">
        <img src={image} alt="Image" className="h-full w-full object-contain" />
      </div>
    </div>
  );
};

export default HomeSectionOne;
