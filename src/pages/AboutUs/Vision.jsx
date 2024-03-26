import image from "../../assets/aboutUs/vision.png";
import location from "../../assets/aboutUs/location.png";
import connection from "../../assets/aboutUs/img2.png";
const Vision = () => {
  return (
    <div
      className="lg:min-h-screen md:min-h-screen lg:p-20"
      style={{
        background: "linear-gradient(#EFEDFE, #EFECFE)",
      }}
    >
      <div className="bg-white h-full rounded mb-10 lg:mx-auto lg:w-[1100px] lg:h-full  px-5">
        <div className=" lg:mx-auto w-full h-full bg-cover lg:w-[800px] pt-10 lg:pt-34">
          <img src={location} alt="location-icon" className="mx-auto" />
          <h1
            className="font-sans text-center font-[700] text-[24px] lg:text-[35px] py-5"
            style={{ lineHeight: "46px" }}
          >
            Our Vision
          </h1>
          <p
            className="font-sans lg:text-center text-lg lg:text-[20px] font-[400]"
            style={{ lineHeight: "26px" }}
          >
            Our vision is to empower individuals and businesses with
            comprehensive, affordable, and high-quality financial services
            tailored to your specific needs, fostering economic growth and
            prosperity across the continent.
          </p>
        </div>
        <div
          className="w-full  mt-10 bg-cover bg-no-repeat lg:w-1/2 lg:mx-auto lg:py-10"
          style={{ backgroundImage: `url(${image})` }}
        >
          <img src={connection} alt="connection" className="image-cover" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
