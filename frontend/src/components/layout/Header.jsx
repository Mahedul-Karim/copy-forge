import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";

import { Menu as HamMenu } from "lucide-react";

import Container from "../ui/Container";
import Logo from "../ui/Logo";
import NavActions from "../nav/NavActions";
import Nav from "../nav/Nav";
import { Box, Button } from "@mui/material";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        sx={{
          borderBottom: "1px solid",
          paddingBlock: "4px",
          borderColor: "divider",
          backgroundColor: "background.default",
          boxShadow: "none",
          transition: "background-color 0.3s ease",
        }}
        component={"header"}
        position="static"
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              "& .mobile-menu": {
                display: {
                  xxs: "inline-block",
                  md: "none",
                },
                color: "text.secondary",
              },
            }}
          >
            <Button
              disableRipple
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
                minWidth: 40,
              }}
              onClick={() => setOpen(true)}
            >
              <HamMenu className="mobile-menu" />
            </Button>
            <Logo />
          </Box>
          <Nav
            sx={{
              display: {
                xxs: "none",
                md: "block",
              },
            }}
          />
          <NavActions />
        </Container>
      </AppBar>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          width: {
            xxs: "70%",
            xs: "40%",
          },
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: {
              xxs: "70%",
              xs: "40%",
            },
            boxSizing: "border-box",
            padding: "16px",
          },
        }}
      >
        <Logo sx={{ justifyContent: "center" }} />
        <Nav />
      </Drawer>
    </>
  );
};

export default Header;
