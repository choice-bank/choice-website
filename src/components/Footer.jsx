import logo from "../assets/logo.png";
import { footerLinks, socialMedia } from "../constants";
import { styles } from "../styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section
      className={`${styles.flexCenter} ${styles.paddingY} flex-col  `}
      style={{ paddingLeft: "200px", paddingRight: "200px" }}
    >
      <div
        className={`${styles.flexStart} md:flex-row flex flex-col mb-8 w-full`}
      >
        <div className="flex-1 mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[160px] h-[24] object-contain"
          />
        </div>
        <div className="flex-1 w-full flex flex-row justify-between  md:mt-0 mt-10">
          {footerLinks.map((footerLink, i) => (
            <div key={i} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
              <h4 className="font-poppins font-medium text-[18px] leading-[27px]">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, i) => (
                  <li
                    key={i}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      i !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6  ">
        <p className="font-poppins font-normal text-center text-[14px] leading-[27px]">
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
      <div className="mx-auto mt-10">
        <div className="flex justify-between">
          <p className="pr-5">Privacy Policy.</p>
          <p className="pr-5">Terms of Service.</p>
          <p className="pr-5">Data Privacy Statement.</p>
          <p className="pr-5">Disclaimer.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
