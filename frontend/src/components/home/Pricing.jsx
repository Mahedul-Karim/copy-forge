import React from "react";
import Container from "../ui/Container";
import Title from "../ui/section/Title";
import { Box } from "@mui/material";
import PricingCard from "../pricing/PricingCard";

const featuresList = [
  { key: "dailyLimit", label: "3 contents per day" },
  { key: "saves", label: "5 saves" },
  { key: "totalLimit", label: "20 contents total" },
  { key: "reset", label: "Resets at midnight" },
  { key: "noCard", label: "No credit cards" },
];

const PRICING_TABLE = [
  {
    id: 1,
    type: "Free",
    price: "0",
    chargeBasis: "Month",
    features: [
      {
        name: "Contents Per Day",
        key: "dailyLimit",
        value: 3,
        available: true,
      },
      {
        name: "Saves Total",
        key: "saveLimit",
        value: 5,
        available: true,
      },
      {
        name: "Total Contents",
        key: "totalContentLimit",
        value: 20,
        available: true,
      },
      {
        name: "Access new features early",
        key: "newFeatures",
        value: false,
        available: false,
      },
      {
        name: "24/7 support",
        key: "support",
        value: false,
        available: false,
      },
      {
        name: "Refund policy",
        key: "refund",
        value: false,
        available: false,
      },
    ],
  },
  {
    id: 2,
    type: "Premium",
    price: "20",
    chargeBasis: "Month",
    features: [
      {
        name: "Contents Per Day",
        key: "dailyLimit",
        value: 50,
        available: true,
      },
      {
        name: "Saves Total",
        key: "saveLimit",
        value: 2000,
        available: true,
      },
      {
        name: "Total Contents",
        key: "totalContentLimit",
        value: 20000,
        available: true,
      },
      {
        name: "Access new features early",
        key: "newFeatures",
        value: true,
        available: true,
      },
      {
        name: "24/7 support",
        key: "support",
        value: true,
        available: true,
      },
      {
        name: "Refund policy",
        key: "refund",
        value: true,
        available: true,
      },
    ],
  },
];

const Pricing = () => {
  return (
    <Container
      sx={{
        paddingBlock: {
          xxs: "45px",
          md: "64px",
        },
      }}
    >
      <Title>
        Start with free, <span className="text-gradient">subscribe</span> <br />{" "}
        for more features.
      </Title>
      <Box sx={{ marginTop: "40px" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              sm:"repeat(2,1fr)"
            },
            gap: "20px",
            maxWidth: "630px",
            marginInline: "auto",
          }}
        >
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
        </Box>
      </Box>
    </Container>
  );
};

export default Pricing;
