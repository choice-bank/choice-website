import image1 from "../../../assets/image1.png";

const Header = () => {
  return (
    <div
      className="min-h-screen flex font-sans"
      style={{
        background: "linear-gradient(#778BB0, #F1ECE9)",
        paddingTop: "200px",
        paddingLeft: "150px",
        paddingRight: "150px",
      }}
    >
      <div className="max-w-7xl">
        <div className="">
          <h1
            className="font-[700] text-[90px] capitalize font-sans"
            style={{ lineHeight: "-2.7px" }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, #0A0534 -29.56%, #BB4ADC 132.3%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              your ultimate
            </span>
          </h1>
          <h1
            className="font-[700] text-[90px] capitalize font-sans mb-10"
            style={{ lineHeight: "-2.7px" }}
          >
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
          <p
            className="mb-8 font-sans text-[25px] font-[250]"
            style={{ color: "#0B0D2C", lineHeight: "29px" }}
          >
            A Bank built by bankers & techpreneurs for next-level private <br />
            & API banking in Africa
          </p>
        </div>

        <div className="float-right">
          <img
            src={image1}
            alt="Hero Image"
            className="w-[250px] object-contain rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
