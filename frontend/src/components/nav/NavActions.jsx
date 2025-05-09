import React from "react";
import DarkMode from "../common/button/DarkMode";
import { Button } from "../ui/button";
import SheetCloseWrapper from "../common/SheetCloseWrapper";
import { useNavigate } from "react-router";

const NavActions = ({ className = "", closeOnClick = false }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex items-center flex-col md:flex-row gap-[6px] xs:gap-[10px] ${className}`}
    >
      <div className="flex  w-full md:w-auto items-center justify-between">
        <p className="text-sm text-text-primary font-medium block md:hidden">
          Dark Mode
        </p>
        <DarkMode />
      </div>
      <SheetCloseWrapper closeOnClick={closeOnClick}>
        <Button
          className={
            "font-semibold rounded-md md:rounded-full transition-all duration-300"
          }
          onClick={() => navigate("/auth/login")}
        >
          Login
        </Button>
      </SheetCloseWrapper>
    </div>
  );
};

export default NavActions;
