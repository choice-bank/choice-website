import {} from "react";
import Hero from "./components/Hero";
import ActionCard from "../../components/ActionCard";
import Tools from "./components/Tools";
import Solutions from "./components/Solutions";
import Navbar from "../../components/Navbar";

const ApiBanking = () => {
  return (
    <div>
      <Navbar textColor="white" />
      <Hero />
      <Tools />
      <Solutions />
      <ActionCard
        title="Ready to collaborate?"
        subTitle="Start building and get ahead of the curve before your competitors do"
        button="Become a Partner"
      />
    </div>
  );
};

export default ApiBanking;
