import React from "react";

import Box from "@mui/material/Box";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import NavActions from "../nav/NavActions";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        borderBottom: "1px solid",
        paddingBlock: "4px",
        borderColor: "divider",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <nav></nav>
        <NavActions />
      </Container>
    </Box>
  );
};

export default Header;
