import { Box, List, ListItem } from "@mui/material";
import React from "react";
import Link from "../ui/Link";
import { useLocation } from "react-router";

const NAV_LINKS = [
  {
    to: "/",
    label: "Home",
  },
  {
    to: "/pricing",
    label: "Pricing",
  },
  {
    to: "/about-us",
    label: "About Us",
  },
  {
    to: "/contact-us",
    label: "Contact Us",
  },
];

const Nav = ({ sx = {} }) => {
  const location = useLocation();

  return (
    <Box sx={{ ...sx }} component={"nav"}>
      <List sx={{ display: "flex", alignItems: "center",gap:'4px',flexDirection:{
        xxs:'column',
        md:'row'
      } }}>
        {NAV_LINKS.map((nav, i) => (
          <ListItem
            sx={{
              whiteSpace: "nowrap",
              paddingLeft:'10px',
              paddingRight:'10px',
              fontSize: "14px",
              fontWeight: 600,
              paddingTop: "6px",
              paddingBottom: "6px",
              "&:hover": {
                backgroundColor: "primary.main",
                "& .child": {
                  color: "#333333",
                },
              },
              transition: "all 0.3s",
              borderRadius: {
                md:"999px",
                xxs:'8px'
              },
              backgroundColor:
                location.pathname === nav.to ? "primary.main" : "transparent",
              "& .child": {
                color:
                  location.pathname === nav.to ? "#333333" : "text.primary",
                  textAlign:'center',
                  width:'100%'
              },
            }}
            key={i}
          >
            
            <Link to={nav.to} className="child">
              {nav.label}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Nav;
