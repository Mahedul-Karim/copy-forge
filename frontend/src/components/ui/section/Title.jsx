import { Typography } from "@mui/material";
import React from "react";

const Title = ({ children, highlight }) => {
  return (
    <Typography
      component={"h3"}
      sx={{
        textAlign: "center",
        fontSize: {
          sm: "36px",
          xs: "26px",
          xxs: "24px",
        },
        fontWeight: 700,
        lineHeight: 1.3,
      }}
    >
      {children}
      <span className="text-gradient">{highlight}</span>
    </Typography>
  );
};

export default Title;
