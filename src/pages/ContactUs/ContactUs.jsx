import React, { useState } from "react";
import { LocalPhone, SupportAgentTwoTone, Email } from "@mui/icons-material";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    emailHeader: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      emailHeader: "",
      message: "",
    });

    alert("Email sent successfully");
  };
  return (
    <div className=" flex flex-col lg:flex-row  lg:p-32 p-5">
      <div className="flex-grow max-w-md mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Get in touch by filling out the form below & we will get back to you.
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Email Header
            </label>
            <input
              type="text"
              name="emailHeader"
              value={formData.emailHeader}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="flex-shrink">
        <h1>Need more help?</h1>
        <h6>Call us on:</h6>
        <div className="flex mb-1">
          <SupportAgentTwoTone />
          <p className="text-[14px]">+254 203882206</p>
        </div>

        <div className="flex mb-1">
          <SupportAgentTwoTone />
          <p className="text-[14px]">+254 203882207</p>
        </div>

        <div className="flex mb-1">
          <LocalPhone />
          <p className="text-[14px]">+254731225879</p>
        </div>

        <div className="flex mb-1">
          <Email />
          <p className="text-[14px]">info@choice-bank.com</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
