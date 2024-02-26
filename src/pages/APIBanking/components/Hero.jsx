import React from "react";

const Hero = () => {
  return (
    <div
      className="min-h-screen   bg-[#0B0D2C]"
      style={{
        paddingTop: "200px",
        paddingLeft: "150px",
        paddingRight: "200px",
      }}
    >
      <div className="bg-gradient-to-r from-[#0C0E2D] via-[#6043EC] to-[#D43A36] rounded-full py-2 px-4 mb-4 w-1/5">
        <h1
          className="capitalize text-white text-center"
          style={{
            borderRadius: "50px",
            padding: "3px 5px",
            fontSize: "17px",
          }}
        >
          api banking
        </h1>
      </div>
      <div className="w-3/4 mb-10">
        <h1
          className="text-white font-bold"
          style={{ fontSize: "50px", lineHeight: 1 }}
        >
          One Platform <br /> Infinite Opportunities
        </h1>
      </div>
      <div className="w-3/5">
        <p className="text-white " style={{ fontSize: "11px" }}>
          Leverage Our Bank APIs to seamlessly integrate a comprehensive suite
          of financial products into your existing customer journey,
          encompassing accounts, payments, credit, investments, and beyond.
        </p>
      </div>
      <div
        className="mt-10 w-1/5 p-3"
        style={{ border: "1px solid white", borderRadius: "50px" }}
      >
        <h1 className="text-white text-center font-bold">Talk to an Expart</h1>
      </div>
    </div>
  );
};

export default Hero;
