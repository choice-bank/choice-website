import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { footerLinks } from "../constants";
import {
  Facebook,
  Instagram,
  LinkedIn,
  X,
  LocalPhone,
  SupportAgentTwoTone,
  Email,
} from "@mui/icons-material";
import playstore from "../assets/home/playstore.jpg";
import appstore from "../assets/home/appstore.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="flex flex-col lg:px-16 pb-24 pt-10 lg:justify-center lg:items-center ">
      <div className=" md:flex-row lg:flex-row flex flex-col mb-8 w-full lg:justify-between ">
        <div className="flex-1">
          <Link to="/">
            <img src={logo} alt="logo" className="object-contain mb-4" />
          </Link>
          <div className="flex mb-1">
            <SupportAgentTwoTone style={{ color: "red" }} />
            <p className="text-[14px]">+254 203882206</p>
          </div>

          <div className="flex mb-1">
            <SupportAgentTwoTone style={{ color: "red" }} />
            <p className="text-[14px]">+254 203882207</p>
          </div>

          <div className="flex mb-1">
            <LocalPhone style={{ color: "red" }} />
            <p className="text-[14px]">+254731225879</p>
          </div>

          <div className="flex mb-1">
            <Email style={{ color: "red" }} />
            <p className="text-[14px]">info@choice-bank.com</p>
          </div>
          <p className="text-red-500 font-bold text-[15px]">
            Choice Bank is regulated by the Central Bank of Kenya
          </p>
        </div>

        <div className="flex-1 w-full flex lg:flex-row justify-center gap-10 md:mt-0 mt-10">
          {footerLinks.map((footerLink, i) => (
            <div key={i} className={`flex flex-col s:my-0 my-2`}>
              <h4
                className="font-[500] lg:text-[13px] text-[#0A0534]"
                style={{ lineHeight: "24px" }}
              >
                {footerLink.title}
              </h4>

              <ul className="list-none mt-2">
                {footerLink.links.map((link, i) => (
                  <li
                    key={i}
                    className={`font-[400] text-sm lg:text-[12px]  hover:text-secondary cursor-pointer ${
                      i !== footerLink.links.length - 1 ? "mb-2" : "mb-0"
                    }`}
                  >
                    <Link to={link.url} key={i}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex-col-reverse flex justify-between items-center md:flex-row  lg:flew-col pt-6 ">
        <p className=" text-center text-sm lg:text-sm">
          Ⓒ{currentYear} ChoiceBank. All Rights Reserved.
        </p>

        <div className="flex justify-between sm:flex-wrap lg:justify-between gap-5">
          <div>
            <Link
              to="https://drive.google.com/file/d/1X3ptbMT795y1jVTDZUryhoNU2sMDqtZh/view?usp=sharing"
              target="_blank"
              className="text-sm lg:text-sm text-blue-700"
            >
              Data Privacy Policy.
            </Link>
          </div>
          <div>
            <Link
              to="https://drive.google.com/file/d/1lWWKCKLeWcLms5nhqxzZBMkJlBCi1Tnu/view?usp=sharing"
              target="_blank"
              className="text-sm lg:text-sm text-blue-700"
            >
              General Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="flex flex-row md:mt-0 mt-6 lg:justify-between">
          <a
            href="https://twitter.com/choicemfbbank"
            target="_blank"
            rel="noreferrer"
          >
            <X />
          </a>
          <a
            href="https://www.instagram.com/choicemfbbank/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/company/choice-microfinance-bank/mycompany/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <Facebook />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src={appstore}
              className="w-[100px] h-[30px] object-contain cursor-pointer"
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src={playstore}
              className="w-[100px] h-[30px] object-contain cursor-pointer"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
