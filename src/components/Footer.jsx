import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { footerLinks, socialMedia } from "../constants";

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

        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, i) => (
            <img
              src={social.icon}
              alt="con"
              key={i}
              className={`w-[24px] h-[24px] object-contain cursor-pointer ${
                i !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>

      <div className=" mt-10">
        <div className="flex justify-around sm:flex-wrap lg:justify-between">
          <p className="text-sm lg:text-lg">Privacy Policy.</p>
          <p className="text-sm lg:text-lg">Terms of Service.</p>
          <p className="text-sm lg:text-lg">Data Privacy.</p>
          <p className="text-sm lg:text-lg">Disclaimer.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
