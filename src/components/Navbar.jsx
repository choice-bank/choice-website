import { useState } from "react";
import { KeyboardArrowDown, Login, Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = ({ textColor, logo }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="p-4 z-30 absolute w-full font-sans">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-shrink-0">
          {" "}
          {/* Logo on the left */}
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
        <div className="md:hidden">
          {" "}
          {/* Mobile menu icon */}
          <button
            onClick={toggleMenu}
            className="text-gray-800 focus:outline-none"
          >
            {showMenu ? (
              <KeyboardArrowDown className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        <div
          className={`md:flex flex-wrap items-center ${
            showMenu ? "block" : "hidden"
          }`}
        >
          {/* Links */}
          <div className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
            {/* Home */}
            <Link
              to="/"
              className="px-3 py-2 font-semibold text-sm uppercase whitespace-nowrap"
              style={{ color: textColor }}
              onClick={hideMenu}
            >
              Home
            </Link>
            {/**Private Banking */}
            <Link
              to="/private-banking"
              className="px-3 py-2 font-semibold text-sm uppercase whitespace-nowrap"
              style={{ color: textColor }}
              onClick={hideMenu}
            >
              Private Banking
            </Link>

            <Link
              to="/api-banking"
              className="px-3 py-2 font-semibold text-sm uppercase whitespace-nowrap"
              style={{ color: textColor }}
              onClick={hideMenu}
            >
              API Banking
            </Link>
            <Link
              to="/about-us"
              className="px-3 py-2 font-semibold text-sm uppercase whitespace-nowrap"
              style={{ color: textColor }}
              onClick={hideMenu}
            >
              About Us
            </Link>
          </div>

          {/* Login Button */}
          <div className="flex items-center ml-4">
            {" "}
            {/* Added some margin for spacing */}
            <button
              onClick={toggleMenu} // Toggle menu instead of toggleLoginDropdown
              className="text-white bg-[#D43A36] px-3 py-2 rounded-md text-sm font-semibold focus:outline-none"
              style={{ borderRadius: "100px" }}
            >
              <Login
                className="h-5 w-5 inline-block -ml-1 mr-1"
                color="white"
              />
              LOG IN
              <KeyboardArrowDown className="h-5 w-5 inline-block ml-1" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
