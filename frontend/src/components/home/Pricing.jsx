import React from "react";
import Container from "../common/Container";
import Title from "../common/section/Title";
import { Box } from "@mui/material";
import PricingCard from "../pricing/PricingCard";
import { PRICING_TABLE } from "@/lib/utils/data";

const Pricing = () => {
  return (
    <Container className="py-[45px] md:py-16">
      <Title
        highlight={"subscribe"}
        text={"Start with free, subscribe \n for more features."}
      />
      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[630px] mx-auto">
          {PRICING_TABLE.map((table) => (
            <PricingCard
              key={table.id}
              isPremium={table.type === "Premium"}
              type={table.type}
              chargeBasis={table.chargeBasis}
              features={table.features}
              price={table.price}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Pricing;
