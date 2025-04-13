import React from "react";
import Link from "./Link";
import Image from "./Image";
import { Typography } from "@mui/material";

const Logo = ({ sx = {} }) => {
  return (
    <Link
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1px",
        ...sx,
      }}
      to={"/"}
    >
      <Image
        src="/logo.png"
        alt="This is logo"
        sx={{
          width: {
            xs: "50px",
            xxs: "35px",
          },
          height: {
            xs: "50px",
            xxs: "35px",
          },
          objectFit: "cover",
        }}
      />
      <Typography
        component={"p"}
        sx={{
          fontSize: {
            xs: "16px",
            xxs: "13px",
          },
          fontWeight: 600,
          color: "text.secondary",
        }}
      >
        Copy
        <Typography
          component={"span"}
          sx={{
            color: "#FFD343",
            fontWeight: 700,
            fontSize: {
              xs: "16px",
              xxs: "13px",
            },
          }}
        >
          Forge
        </Typography>
      </Typography>
    </Link>
  );
};

export default Logo;
