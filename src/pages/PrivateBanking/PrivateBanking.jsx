import React from "react";
import Header from "./components/Header";
import Navbar from "../../components/Navbar";
import logo from "../../assets/api/logo.png";
//import ActionCard from "../../components/ActionCard";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";

const PrivateBanking = () => {
  return (
    <div>
      <Navbar textColor="white" logo={logo} />
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      {/* <ActionCard
        title="Get Started"
        subTitle="Open an account in minutes - no credit check and no minimum deposit"
        button="Open an Account"
      /> */}
    </div>
  );
};

export default PrivateBanking;
