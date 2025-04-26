import React from "react";
import { Link } from "react-router";
import SheetCloseWrapper from "./SheetCloseWrapper";

const Logo = ({ className = "", closeOnClick = false }) => {
  return (
    <SheetCloseWrapper closeOnClick={closeOnClick}>
      <Link className={`flex items-center gap-[1px] ${className}`} to={"/"}>
        <img
          src="/logo.png"
          alt="This is logo"
          className="size-[35px] xs:size-[50px] object-cover"
        />
        <p className="text-sm sm:text-base font-semibold text-text-secondary">
          Copy
          <span className="text-primary font-bold">Forge</span>
        </p>
      </Link>
    </SheetCloseWrapper>
  );
};

export default Logo;
