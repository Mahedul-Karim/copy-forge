import React from "react";
import { Link, useLocation } from "react-router";

const NAV_LINKS = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/pricing",
    label: "Pricing",
  },
  {
    to: "/about-us",
    label: "About Us",
  },
  {
    to: "/contact-us",
    label: "Contact Us",
  },
];

const Nav = ({ className = "" }) => {
  const location = useLocation();

  return (
    <nav className={`${className}`}>
      <ul className="flex items-center gap-1 flex-col md:flex-row">
        {NAV_LINKS.map((nav, i) => (
          <li
            className={`whitespace-nowrap px-[10px] text-sm font-semibold py-[6px] hover:bg-primary transition-all duration-300 rounded-[8px] md:rounded-full group ${
              location.pathname === nav.to ? "bg-primary" : "bg-transparent"
            }`}
            key={i}
          >
            <Link
              to={nav.to}
              className={`group-hover:text-[#333333] ${
                location.pathname === nav.to ? "text-[#333333]" : "text-text-primary"
              } text-center w-full`}
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
