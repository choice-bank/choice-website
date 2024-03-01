import React from "react";

const Header = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-end   bg-[#0B0D2C]"
      style={{
        paddingBottom: "100px",
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
          Private banking
        </h1>
      </div>
      <div className="w-3/4 mb-10">
        <h1
          className="text-white font-bold"
          style={{ fontSize: "50px", lineHeight: 1 }}
        >
          Innovative Banking Services <br /> for Exclusive Clients
        </h1>
      </div>
    </div>
  );
};

export default Header;
