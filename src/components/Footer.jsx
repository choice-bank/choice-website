import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { footerLinks } from "../constants";
import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import playstore from "../assets/home/playstore.jpg";
import appstore from "../assets/home/appstore.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="flex flex-col lg:px-16 p-6 lg:justify-center lg:items-center ">
      <div className=" md:flex-row flex flex-col mb-8 w-full">
        <Link to="/" className="flex-1">
          <img src={logo} alt="logo" className="object-contain" />
        </Link>

        <div className="flex-1 w-full flex lg:flex-row justify-between md:mt-0 mt-10">
          {footerLinks.map((footerLink, i) => (
            <div key={i} className={`flex flex-col s:my-0 my-4`}>
              <h4 className="font-bold lg:text-2xl ">{footerLink.title}</h4>

              <ul className="list-none mt-4">
                {footerLink.links.map((link, i) => (
                  <li
                    key={i}
                    className={`font-normal text-sm lg:text-lg hover:text-secondary cursor-pointer ${
                      i !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
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
        <p className=" font-bold text-center text-sm lg:text-lg">
          Ⓒ{currentYear} ChoiceBank. All Rights Reserved.
        </p>

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

      <div className=" mt-10">
        <div className="flex justify-around sm:flex-wrap lg:justify-between">
          <Link to="#" className="text-sm lg:text-lg">
            Privacy Policy.
          </Link>
          <Link to="#" className="text-sm lg:text-lg">
            Terms of Service.
          </Link>
          <Link to="#" className="text-sm lg:text-lg">
            Data Privacy.
          </Link>
          <Link to="#" className="text-sm lg:text-lg">
            Disclaimer.
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
