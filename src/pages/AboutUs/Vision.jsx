import image from "../../assets/aboutUs/vision.png";
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
          style={{ backgroundImage: `url(${image})`, paddingTop: "50px" }}
        >
          <h1
            className="text-center font-bold"
            style={{ fontSize: "35px", marginTop: "50px" }}
          >
            Our Vision
          </h1>
          <p className="text-center" style={{ fontSize: "14px" }}>
            Our vision is to empower individuals and businesses with
            comprehensive, affordable, and high-quality financial services
            tailored to your specific needs, fostering economic growth and
            prosperity across the continent.
          </p>
        </div>
        <div className="w-1/2 mx-auto mt-10">
          <img src={connection} alt="connection" className="cover" />
        </div>
      </div>
    </div>
  );
};

export default Vision;
