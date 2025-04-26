import React from "react";
import DarkMode from "../common/button/DarkMode";
import { Button } from "../ui/button";

const NavActions = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-[6px] xs:gap-[10px] ${className}`}>
      <DarkMode />
      <Button
        className={"font-semibold rounded-full transition-all duration-300"}
      >
        Login
      </Button>
    </div>
  );
};

export default NavActions;
