import BreadcrumbComponent from "@/components/common/breadcrumb/BreadcrumbComponent";
import Container from "@/components/common/Container";
import Pricing from "@/components/home/Pricing";
import React from "react";

const PricingPage = () => {
  return (
   
    <Container className="py-8 md:py-16">
      <BreadcrumbComponent />
      <Pricing />
    </Container>
  );
};

export default PricingPage;
