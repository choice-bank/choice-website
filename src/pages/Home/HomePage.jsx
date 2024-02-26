import {} from "react";
import Header from "./component/Header";
import HomeSectionOne from "./component/HomeSectionOne";
import HomeSectionTwo from "./component/HomeSectionTwo";
import SectionThree from "./component/SectionThree";
import SectionFour from "./component/SectionFour";
import ActionCard from "../../components/ActionCard";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HomeSectionOne />
      <HomeSectionTwo />
      <SectionThree />
      <SectionFour />
      <ActionCard
        title="Get started?"
        subTitle="join us for future banking"
        button="Let's talk"
      />
    </div>
  );
};

export default HomePage;
