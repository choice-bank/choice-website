import { useState } from "react";

import { KeyboardArrowDown, Login } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = ({ textColor, logo }) => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
  };

  const hideDropdownMenus = () => {
    setShowLoginDropdown(false);
  };

  return (
    <nav className="p-4 z-30 absolute  w-full font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0 mr-20">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "160px",
                height: "24px",
                objectFit: "contain",
              }}
            />
          </Link>
        </div>
        <div className="flex flex-1 justify-around flex-wrap ">
          {/* Home */}
          <Link
            to="/"
            className="px-3 py-2 font-[500] text-[14px] uppercase whitespace-nowrap"
            style={{ color: textColor }}
          >
            Home
          </Link>
          {/**Private Banking */}
          <Link
            to="/private-banking"
            className="  px-3 py-2 font-[500] text-[14px] uppercase whitespace-nowrap"
            style={{ color: textColor }}
          >
            private banking
          </Link>

          <Link
            to="/api-banking"
            className=" px-3 py-2 font-[500] text-[14px] uppercase whitespace-nowrap"
            style={{ color: textColor }}
          >
            API Banking
          </Link>
          <Link
            to="/about-us"
            className="  px-3 py-2 font-[500] text-[14px] uppercase whitespace-nowrap"
            style={{ color: textColor }}
          >
            About Us
          </Link>

          {/* Login Button */}
          <div className="flex items-center">
            <button
              onClick={toggleLoginDropdown}
              className="text-white bg-[#D43A36] px-3 py-2 rounded-md text-sm font-bold focus:outline-none"
              style={{ borderRadius: "100px" }}
            >
              <Login
                className="h-5 w-5 inline-block -ml-1 mr-1"
                color="white"
              />
              LOG IN
              <KeyboardArrowDown className="h-5 w-5 inline-block ml-1" />
            </button>
            {showLoginDropdown && (
              <div className="absolute z-10 mt-2 w-48 bg-white shadow-lg rounded-md py-1">
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={hideDropdownMenus}
                >
                  Profile
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={hideDropdownMenus}
                >
                  Settings
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
