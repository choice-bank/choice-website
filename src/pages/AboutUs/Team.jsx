import React from "react";
import profile from "../../assets/aboutUs/img3.png";

const items = [
  {
    name: "Alex Bouaziz",
    title: "Founder & CEO",
    profile: profile,
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    profile: profile,
  },
  {
    name: "Jane Doe",
    title: "Product Manager",
    profile: profile,
  },
  {
    name: "Alex Bouaziz",
    title: "Founder & CEO",
    profile: profile,
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    profile: profile,
  },
  {
    name: "Jane Doe",
    title: "Product Manager",
    profile: profile,
  },
  {
    name: "Alex Bouaziz",
    title: "Founder & CEO",
    profile: profile,
  },
  {
    name: "John Doe",
    title: "Software Engineer",
    profile: profile,
  },
  {
    name: "Jane Doe",
    title: "Product Manager",
    profile: profile,
  },
];

const Team = () => {
  return (
    <div
      className="min-h-screen flex items-center"
      style={{
        background: "linear-gradient(#EFEDFE, #EFECFE)",

        paddingLeft: "200px",
        paddingRight: "200px",
      }}
    >
      <div className="rounded">
        <div className="flex justify-around ">
          <div className=" w-3/4 mr-20 p-5">
            <h1 style={{ fontSize: "35px" }}>Our Team</h1>
          </div>
          <div className="float-right w-full  p-5">
            <p className="align-center " style={{ fontSize: "14px" }}>
              We're a diverse and determined team of innovators, movers and
              shakers, passionate about enabling our customers to do their best
              work.
            </p>
          </div>
        </div>

        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="min-h-screen grid grid-cols-3 gap-4">
      {items.map((member, index) => (
        <div
          key={index}
          className="max-w-md h-full w-3/4 rounded overflow-hidden bg-white-10 shadow-lg m-4"
        >
          <img
            className="w-1/2 h-30 object-cover mx-auto"
            src={member.profile}
            alt={member.name}
          />
          <div className="px-6 py-4 justify-center ">
            <h1 className="font-bold text-xl mb-2 text-center">
              {member.name}
            </h1>
            <p className="text-gray-700 text-base text-center">
              {member.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Team;
