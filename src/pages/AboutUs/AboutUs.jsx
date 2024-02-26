import {} from "react";
import About from "./About";

import VisionTeam from "./VisionTeam";
import ActionCard from "../../components/ActionCard";

const AboutUs = () => {
  return (
    <div>
      <About />
      <VisionTeam />
      <ActionCard
        title="Ready to collaborate?"
        subTitle="Start building and get ahead of the curve before your competitors do"
        button="Become a Partner"
      />
    </div>
  );
};

export default AboutUs;
