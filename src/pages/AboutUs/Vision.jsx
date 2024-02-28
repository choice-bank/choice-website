import image from "../../assets/aboutUs/vision.png";
import location from "../../assets/aboutUs/location.png";
import connection from "../../assets/aboutUs/img2.png";
const Vision = () => {
  return (
    <div
      className="min-h-screen flex"
      style={{
        background: "linear-gradient(#EFEDFE, #EFECFE)",
        paddingTop: "50px",
        paddingLeft: "200px",
        paddingRight: "200px",
      }}
    >
      <div className="bg-white rounded" style={{ borderRadius: "10px" }}>
        <div
          className=" mx-auto w-1/2 h-1/2 bg-cover"
          style={{ paddingTop: "50px" }}
        >
          <img src={location} alt="location-icon" className="mx-auto" />
          <h1 className="text-center font-bold" style={{ fontSize: "35px" }}>
            Our Vision
          </h1>
          <p className="text-center" style={{ fontSize: "14px" }}>
            Our vision is to empower individuals and businesses with
            comprehensive, affordable, and high-quality financial services
            tailored to your specific needs, fostering economic growth and
            prosperity across the continent.
          </p>
        </div>
        <div
          className="w-1/2 mx-auto mt-10 bg-cover"
          style={{ backgroundImage: `url(${image})` }}
        >
          <img src={connection} alt="connection" className="cover" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
