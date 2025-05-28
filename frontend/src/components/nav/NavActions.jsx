import React from "react";
import DarkMode from "../common/button/DarkMode";
import { Button } from "../ui/button";
import SheetCloseWrapper from "../common/SheetCloseWrapper";
import { Link, useNavigate } from "react-router";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSelector } from "react-redux";

const NavActions = ({ className = "", closeOnClick = false }) => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  const fallbackName = user?.fullName?.split(" ");

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
      {!user ? (
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
      ) : (
        <Link to="/user" className="hidden md:inline-block">
          <Avatar className="size-10">
            <AvatarImage src={user?.avatar?.url} />
            <AvatarFallback >
              {fallbackName?.[0]?.[0] + fallbackName?.at(-1)?.at(0)}
            </AvatarFallback>
          </Avatar>
        </Link>
      )}
    </div>
  );
};

export default NavActions;
