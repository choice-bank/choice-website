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
      <div className=" md:flex-row lg:flex-row flex flex-col mb-8 w-full lg:justify-center ">
        <div className="flex-1">
          <Link to="/">
            <img src={logo} alt="logo" className="object-contain" />
          </Link>
          <p>+254 203882206</p>
          <p>+254 203882207</p>
          <p>+254731225879</p>
          <p>info@choice-bank.com</p>
        </div>

        <div className="flex-1 w-full flex lg:flex-row justify-around md:mt-0 mt-10">
          {footerLinks.map((footerLink, i) => (
            <div key={i} className={`flex flex-col s:my-0 my-4`}>
              <h4 className="font-bold lg:text-sm ">{footerLink.title}</h4>

              <ul className="list-none mt-4">
                {footerLink.links.map((link, i) => (
                  <li
                    key={i}
                    className={`font-normal text-sm lg:text-sm hover:text-secondary cursor-pointer ${
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
        <p className=" text-center text-sm lg:text-sm">
          Ⓒ{currentYear} ChoiceBank. All Rights Reserved.
        </p>

        <div className="flex justify-between sm:flex-wrap lg:justify-between">
          <p>
            <Link to="#" className="text-sm lg:text-sm">
              Data Privacy Policy.
            </Link>
          </p>
          <p>
            <Link to="#" className="text-sm lg:text-sm">
              General Terms & Conditions
            </Link>
          </p>
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
