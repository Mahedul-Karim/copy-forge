import React from "react";
import Container from "../common/Container";
import Details from "./hero/Details";
import HeroBanner from "./hero/HeroBanner";

const Hero = () => {
  return (
    <Container className="py-[45px] md:py-16 grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center items-center">
        <Details />
      </div>
      <HeroBanner />
    </Container>
  );
};

export default Hero;
