import { Box, Button } from "@mui/material";
import React from "react";
import DarkMode from "../ui/button/DarkMode";

const NavActions = ({ sx = {} }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: {
          xs: "10px",
          xxs: "6px",
        },
        ...sx,
      }}
    >
      <DarkMode />
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          variant="contained"
          sx={{
            borderRadius: "999px",
            fontSize: {
              xxs: "12px",
              xs: "14px",
            },
            lineHeight: {
              xs: 1.75,
              xxs: 1.5,
            },
            fontWeight: 600,
          }}
          size="medium"
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default NavActions;
