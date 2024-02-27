import image1 from "../../../assets/image1.png";

const Header = () => {
  return (
    <div
      className="min-h-screen flex"
      style={{
        background: "linear-gradient(#778BB0, #F1ECE9)",
        paddingTop: "200px",
        paddingLeft: "150px",
        paddingRight: "200px",
      }}
    >
      <div className="max-w-7xl">
        <div className="">
          <h1
            className="font-bold capitalize font-sans"
            style={{ fontSize: "90px", lineHeight: 1 }}
          >
            <span
              style={{
                background: "linear-gradient(to right, #0A0534, #BB4ADC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              your ultimate
            </span>
          </h1>
          <h1
            className="font-bold capitalize"
            style={{
              fontSize: "90px",
              lineHeight: "76px",
              marginBottom: "30px",
            }}
          >
            <span
              style={{
                background: "linear-gradient(to right, #0A0534, #BB4ADC)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Choice for Banking
            </span>
          </h1>
          <p
            className="mb-8"
            style={{ fontSize: "18px", color: "#0B0D2C", lineHeight: "29px" }}
          >
            A Bank built by bankers & techpreneurs for next-level private <br />
            & API banking in Africa
          </p>
        </div>

        <div className="float-right">
          <img
            src={image1}
            alt="Hero Image"
            className="h-96 w-96 object-contain rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
