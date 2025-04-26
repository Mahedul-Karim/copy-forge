import {
  Building2,
  CircleDollarSign,
  House,
  MonitorSmartphone,
} from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router";
import SheetCloseWrapper from "../common/SheetCloseWrapper";

const NAV_LINKS = [
  {
    to: "/",
    label: "Home",
    Icon: <House size={18} />,
  },
  {
    to: "/pricing",
    label: "Pricing",
    Icon: <CircleDollarSign size={18} />,
  },
  {
    to: "/about-us",
    label: "About Us",
    Icon: <Building2 size={18} />,
  },
  {
    to: "/contact-us",
    label: "Contact Us",
    Icon: <MonitorSmartphone size={18} />,
  },
];

const Nav = ({ className = "", closeOnClick = false }) => {
  const location = useLocation();

  return (
    <nav className={`${className}`}>
      <ul className="flex items-center gap-1 flex-col md:flex-row">
        {NAV_LINKS.map((nav, i) => (
          <li
            className={`whitespace-nowrap px-[10px] text-sm font-semibold py-[6px] hover:bg-primary transition-all duration-300 rounded-[8px] md:rounded-full group w-full md:w-auto ${
              location.pathname === nav.to
                ? "bg-amber-100 md:bg-primary"
                : "bg-transparent"
            }`}
            key={i}
          >
            <SheetCloseWrapper closeOnClick={closeOnClick}>
              <Link
                to={nav.to}
                className={`group-hover:text-[#333333] ${
                  location.pathname === nav.to
                    ? "text-amber-600 md:text-[#333333]"
                    : "text-text-primary"
                } text-center w-full flex py-1 md:py-0 items-center gap-2`}
              >
                <span className="flex items-center md:hidden">{nav.Icon}</span>{" "}
                {nav.label}
              </Link>
            </SheetCloseWrapper>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
