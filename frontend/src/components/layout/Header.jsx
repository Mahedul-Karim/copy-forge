import React from "react";

import Container from "../common/Container";
import Logo from "../common/Logo";
import NavActions from "../nav/NavActions";
import Nav from "../nav/Nav";
import MobileNav from "../nav/MobileNav";

const Header = () => {
  return (
    <>
      <header className="border-b border-solid border-border bg-background dark:bg-paper py-2 sticky top-0 z-[2]">
        <Container className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>
          <Nav className="hidden md:block" />
          <NavActions className="hidden md:flex" />
          <MobileNav />
        </Container>
      </header>
    </>
  );
};

export default Header;
