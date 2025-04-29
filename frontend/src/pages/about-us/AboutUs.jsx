import CTA from "@/components/about-us/CTA";
import Hero from "@/components/about-us/Hero";
import OurMission from "@/components/about-us/OurMission";
import Container from "@/components/common/Container";
import Trusted from "@/components/home/Trusted";
import React from "react";

const AboutUs = () => {
  return (
    <Container className="py-8 md:py-16">
      <Hero />
      <Trusted className="rounded-2xl" />
      <OurMission />
      <CTA />
    </Container>
  );
};

export default AboutUs;
