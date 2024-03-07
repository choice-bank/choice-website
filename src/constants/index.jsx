import playstore from "../assets/home/playstore.jpg";
import appstore from "../assets/home/appstore.jpg";
import { X, LinkedIn, Instagram } from "@mui/icons-material";

export const footerLinks = [
  {
    title: "Private Banking",
    links: [
      {
        name: "Business Private Banking",
        url: "/private-banking",
      },
      {
        name: "Personal Private Banking",
        url: "/",
      },
    ],
  },
  {
    title: "API Banking",
    links: [
      {
        name: "Our Solutions",
        url: "/api-banking#solution",
      },
      {
        name: "Use Cases",
        url: "/api-banking#use-case",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Who we are",
        url: "about-us",
      },
      {
        name: "Why Choice",
        url: "/",
      },
    ],
  },

  {
    title: "Support",
    links: [
      {
        name: "Get Help",
        url: "#",
      },
    ],
  },
];

export const socialMedia = [
  {
    icon: <X />,
    link: "https://twitter.com/choicemfbbank",
  },
  {
    icon: <LinkedIn />,
    link: "https://www.linkedin.com/company/choice-microfinance-bank/mycompany/",
  },
  {
    icon: <Instagram />,
    link: "https://www.instagram.com/choicemfbbank/",
  },
  {
    icon: appstore,
    link: "#",
  },
  {
    icon: playstore,
    link: "#",
  },
];
