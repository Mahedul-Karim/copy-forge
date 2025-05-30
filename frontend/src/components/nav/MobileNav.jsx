import React from "react";
import { AlignRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Logo from "../common/Logo";
import NavActions from "./NavActions";
import Nav from "./Nav";
import { Link } from "react-router";
import { useSelector } from "react-redux";

const MobileNav = () => {
  const { user } = useSelector((state) => state.user);

  const fallbackName = user?.fullName?.split(" ");

  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignRight className="size-6 text-secondary" />
        </SheetTrigger>
        <SheetContent className="bg-background dark:bg-paper border-border overflow-auto">
          <SheetHeader className="px-0 gap-0">
            <SheetTitle className="flex items-center justify-center border-b border-solid pb-1 border-border">
              <Logo closeOnClick />
            </SheetTitle>
            <SheetDescription className="sr-only">
              This is mobile nav
            </SheetDescription>
            {user && (
              <div className="p-4 bg-primary/30 flex items-center gap-2 flex-wrap">
                <Link to="/user" className="shrink-0">
                  <Avatar className="size-11 xs:size-13">
                    <AvatarImage src={user?.avatar?.url} />
                    <AvatarFallback className="bg-primary text-text-primary font-medium">
                      {fallbackName?.[0]?.[0] + fallbackName?.at(-1)?.at(0)}
                    </AvatarFallback>
                  </Avatar>
                </Link>
                <div>
                  <h3 className="text-sm xs:text-base font-medium text-text-primary">
                    John Doe
                  </h3>
                  <p className="text-xs xs:text-sm text-text-secondary">
                    test@gmail.com
                  </p>
                </div>
              </div>
            )}
          </SheetHeader>
          <Nav className="px-4" closeOnClick={true} />
          <SheetFooter className="px-0">
            <NavActions
              className="[&>button]:w-full border-t border-border border-solid px-4 pt-2"
              closeOnClick
            />
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
