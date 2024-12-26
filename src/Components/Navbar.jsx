import React, { useState } from "react";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";
import ResponsiveMenu from "./ResponsiveMenu";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";

export const navLinks = [
  {
    id: "1",
    name: "Home",
    link: "/#",
  },

  {
    id: "2",
    name: "Cars",
    link: "/#cars",
  },

  {
    id: "3",
    name: "About",
    link: "/#about",
  },

  {
    id: "4",
    name: "Booking",
    link: "/#booking",
  },
];

const Navbar = ({ theme, setTheme }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="shadow-md py-2 bg-white dark:bg-dark dark:text-white duration-300 relative z-40">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="sm:text-3xl text-2xl font-bold font-serif">
              Car Rental
            </h1>
          </div>

          <div className="hidden md:block">
            <ul className="flex gap-8 items-center uppercase text-xl font-semibold">
              {navLinks.map((data) => {
                return (
                  <li className="py-4" key={data.id}>
                    <a
                      className="hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 font-medium text-lg"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            {/* Dark Mode icons toggle */}
            <div>
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-3xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-3xl"
                />
              )}
            </div>
            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                size={30}
                className="cursor-pointer transition-all"
              />
            )}
            </div>
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
