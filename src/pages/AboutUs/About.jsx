import image from "../../assets/aboutUs/img1.png";
const About = () => {
  return (
    <div
      className="min-h-screen flex flex-col "
      style={{
        background: "linear-gradient(#F1EEFF, #E6E4FF)",
        paddingTop: "200px",
        paddingLeft: "150px",
        paddingRight: "150px",
      }}
    >
      <div className="self-start" style={{ marginBottom: "5rem" }}>
        <h4 className="uppercase font-bold" style={{ fontSize: "11px" }}>
          about us
        </h4>
        <h1
          className="capitalize font-bold "
          style={{ fontSize: "56px", lineHeight: 1 }}
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
          className="capitalize font-bold "
          style={{ fontSize: "56px", lineHeight: 1 }}
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
      <div className="flex justify-around items-center">
        <div>
          <img
            src={image}
            alt="pic"
            className="h-full"
            style={{ objectFit: "contain" }}
          />
        </div>

        <div
          className=" ml-10 flex justify-center flex-col mb-10 p-10"
          style={{ width: "400px", height: "300px" }}
        >
          <h4 className="uppercase" style={{ fontSize: "11px" }}>
            who we are
          </h4>
          <h1 className="capitalize font-bold" style={{ fontSize: "28px" }}>
            the ChoiceBank Story
          </h1>
          <p className="mb-5" style={{ fontSize: "14px" }}>
            We are a licensed banking institution based in Kenya, dedicated to
            fostering full financial inclusion.
          </p>
          <p style={{ fontSize: "14px" }}>
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
