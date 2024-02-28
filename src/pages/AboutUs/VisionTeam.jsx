import React from "react";
import Vision from "./Vision";
import Team from "./Team";

const VisionTeam = () => {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(#EFEDFE, #EFECFE)",
      }}
    >
      <Vision /> <Team />{" "}
    </div>
  );
};

export default VisionTeam;
