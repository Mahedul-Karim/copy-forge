import React from "react";

import { AlignRight } from "lucide-react";

import Container from "../common/Container";
import Logo from "../common/Logo";
import NavActions from "../nav/NavActions";
import Nav from "../nav/Nav";
import { Button } from "../ui/button";

const Header = () => {

  return (
    <>
      <header className="border-b border-solid border-border bg-background dark:bg-paper py-2 sticky">
        <Container className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>
          <Nav className="hidden md:block" />
          <NavActions className="hidden md:flex" />
          <Button
            variant="ghost"
            className={"inline-flex md:hidden hover:bg-transparent"}
          >
            <AlignRight className="size-5 text-secondary" />
          </Button>
        </Container>
      </header>
    </>
  );
};

export default Header;
