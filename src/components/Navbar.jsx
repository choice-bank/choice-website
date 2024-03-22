import { useState } from "react";
import { Close, KeyboardArrowDown, Login, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = ({ textColor, logo }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const hideLoginDropdown = () => {
    setShowLoginDropdown(false);
  };

  return (
    <nav className="p-4 z-30 absolute w-full font-sans">
      <div className="max-w-7xl  flex justify-between lg:items-center md:items-center lg:mx-40 md:ml-10">
        <div className="flex-shrink-0">
          <Link to="/" className="flex ">
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "160px",
                height: "24px",
                objectFit: "contain",
                marginRight: "1rem",
              }}
            />
          </Link>
        </div>

        <div className="p-2 bg-slate-500 lg:bg-transparent ">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              style={{ color: textColor }}
            >
              {showMenu ? (
                <Close className="h-6 w-6" color="red" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div
            className={`md:flex  flex-wrap items-center ${
              showMenu ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
              <Link
                to="/"
                className="px-3 py-2  text-sm uppercase whitespace-nowrap lg:text-[14px] font-[500]"
                style={{ color: textColor }}
                onClick={hideMenu}
              >
                Home
              </Link>
              <Link
                to="/private-banking"
                className="px-3 py-2  text-sm uppercase whitespace-nowrap lg:text-[14px] font-[500]"
                style={{ color: textColor }}
                onClick={hideMenu}
              >
                Private Banking
              </Link>
              <Link
                to="/api-banking"
                className="px-3 py-2  text-sm uppercase whitespace-nowrap lg:text-[14px] font-[500]"
                style={{ color: textColor }}
                onClick={hideMenu}
              >
                API Banking
              </Link>
              <Link
                to="/about-us"
                className="px-3 py-2  text-sm uppercase whitespace-nowrap lg:text-[14px] font-[500]"
                style={{ color: textColor }}
                onClick={hideMenu}
              >
                About Us
              </Link>
              <Link
                to="/contact-us"
                className="px-3 py-2  text-sm uppercase whitespace-nowrap lg:text-[14px] font-[500]"
                style={{ color: textColor }}
                onClick={hideMenu}
              >
                Contact Us
              </Link>
            </div>
            <div className="flex justify-between ml-2 relative">
              <div
                onClick={toggleLoginDropdown}
                className="text-white bg-[#D43A36] px-2 py-2  text-[11px]  focus:outline-none rounded-full lg:text-[14px] font-[500] flex items-center"
              >
                <Login
                  className=" inline-block -ml-1 mr-1 "
                  color="white"
                  style={{ width: "15px" }}
                />
                LOG IN
                <KeyboardArrowDown
                  className="inline-block ml-1"
                  style={{ width: "20px" }}
                />
              </div>
              {showLoginDropdown && (
                <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-md py-1">
                  <Link
                    to="https://baas-dashboard.choicedigitalbank.com/login?redirect=dashboard"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 lg:text-[14px] font-[500]"
                    onClick={hideLoginDropdown}
                  >
                    BaaS Dashboard
                  </Link>
                  <Link
                    to="https://business.choicedigitalbank.com/login"
                    target="_blank"
                    className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 lg:text-[14px] font-[500]"
                    onClick={hideLoginDropdown}
                  >
                    Business Internet Banking
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
