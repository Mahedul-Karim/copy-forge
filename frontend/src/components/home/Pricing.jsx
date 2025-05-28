import React from "react";
import Container from "../common/Container";
import Title from "../common/section/Title";
import PricingCard from "../pricing/PricingCard";
import { PRICING_TABLE } from "@/lib/utils/data";
import RevealWrapper from "../common/RevealWrapper";
import Loader from "../common/loader/Loader";
import { useData } from "@/hooks/useData";

const Pricing = () => {
  const { data, isPending } = useData({
    queryKey: ["packages"],
    endpoint: "/package",
  });

  return (
    <RevealWrapper>
      <Container className="py-[45px] md:py-16">
        <Title
          highlight={"subscribe"}
          text={"Start with free, subscribe \n for more features."}
        />
        <div className="mt-10">
          {isPending && (
            <div className="flex items-center justify-center py-16">
              <Loader />
            </div>
          )}
          {data?.packages && !isPending && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[630px] mx-auto">
              {data?.packages?.map((table) => (
                <PricingCard
                  key={table._id}
                  isPremium={table.type === "Premium"}
                  type={table.type}
                  chargeBasis={table.chargeBasis}
                  features={table.features}
                  price={table.price}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </RevealWrapper>
  );
};

export default Pricing;
