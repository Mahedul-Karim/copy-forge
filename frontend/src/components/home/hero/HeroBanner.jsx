import { Box } from "@mui/material";
import React from "react";
import Image from "../../ui/Image";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src="/banner.png"
        sx={{
          maxHeight: {
            md: "450px",
            xs: "350px",
            xxs: "250px",
          },
          flexShrink: 0,
        }}
      />
    </Box>
  );
};

export default HeroBanner;
