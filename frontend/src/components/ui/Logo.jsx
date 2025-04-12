import React from "react";
import Link from "./Link";
import Image from "./Image";
import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <Link
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "1px",
      }}
      to={"/"}
    >
      <Image
        src="/logo.png"
        alt="This is logo"
        sx={{ width: "50px", height: "50px", objectFit: "cover" }}
      />
      <Typography
        component={"p"}
        sx={{ fontSize: "16px", fontWeight: 600, color: "text.secondary" }}
      >
        CopyForge
      </Typography>
    </Link>
  );
};

export default Logo;
