import React from "react";
import Container from "../common/Container";
import Logo from "../common/Logo";

const Footer = () => {
  return (
    <footer className="bg-background dark:bg-paper border-t border-solid border-border">
      <Container className="py-8">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <hr className="my-4 border-border border-dashed" />
        <p className="text-center font-semibold text-secondary text-xs" >&copy; {new Date().getFullYear()}, CopyForge</p>
      </Container>
    </footer>
  );
};

export default Footer;
