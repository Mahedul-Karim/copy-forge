import React from "react";
import { AlignRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter
} from "@/components/ui/sheet";
import Logo from "../common/Logo";
import NavActions from "./NavActions";
import Nav from "./Nav";

const MobileNav = () => {
  return (
    <div className="block md:hidden" >
    <Sheet>
      <SheetTrigger>
        <AlignRight className="size-6 text-secondary" />
      </SheetTrigger>
      <SheetContent className="bg-background dark:bg-paper border-border">
        <SheetHeader className='px-0'>
          <SheetTitle className="flex items-center justify-center border-b border-solid pb-1 border-border">
            <Logo closeOnClick />
          </SheetTitle>
          <SheetDescription className="sr-only" >
            This is mobile nav
          </SheetDescription>
        </SheetHeader>
        <Nav className="px-4" closeOnClick={true} />
        <SheetFooter className="px-0" >
          <NavActions className="[&>button]:w-full border-t border-border border-solid px-4 pt-2" closeOnClick />
        </SheetFooter>
      </SheetContent>
    </Sheet>
    </div>
  );
};

export default MobileNav;
