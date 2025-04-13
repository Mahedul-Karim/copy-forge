import React from "react";
import Container from "../ui/Container";
import Box from "@mui/material/Box";
import Details from "./hero/Details";
import HeroBanner from "./hero/HeroBanner";

const Hero = () => {
  return (
    <Container
      sx={{
        paddingBlock: {
          md: "64px",
          xxs: "45px",
        },
        display: "grid",
        gridTemplateColumns: {
          md: "repeat(2,1fr)",
          xxs: "1fr",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Details />
      </Box>
      <HeroBanner />
    </Container>
  );
};

export default Hero;
