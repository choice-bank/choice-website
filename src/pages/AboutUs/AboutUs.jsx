import About from "./About";
//import ActionCard from "../../components/ActionCard";
import Vision from "./Vision";

const AboutUs = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(180deg, #EFEDFE 0%, rgba(239, 236, 254, 0.00) 100%)",
      }}
    >
      <About />
      <Vision />
      {/* <ActionCard
        title="Ready to collaborate?"
        subTitle="Start building and get ahead of the curve before your competitors do"
        button="Become a Partner"
      /> */}
    </div>
  );
};

export default AboutUs;
