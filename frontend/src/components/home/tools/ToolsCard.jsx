import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { Layers } from "lucide-react";

const ToolsCard = ({ Icon, title, description }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.05)",
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        backgroundColor: `${
          theme.palette.mode === "dark"
            ? theme.palette.background.paper
            : theme.palette.background.default
        } `,
        overflow: "clip",
        "&:hover": {
          transform: "translateY(-10px)",
        },
        borderRadius: "12px",
      }}
    >
      <CardContent
        sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <Box>
          <Box
            sx={{
              backgroundColor: "#FEF3C7",
              display: "inline-flex",
              padding: "8px",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
            }}
          >
            <Icon color="#CA8A04" />
          </Box>
        </Box>
        <Typography
          component={"h2"}
          sx={{
            fontWeight: 700,
            fontSize: {
              xs: "18px",
              xxs: "16px",
            },
          }}
        >
          {title}
        </Typography>

        <Typography
          component="p"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            overflow: "hidden",
            fontSize: {
              xxs: "12px",
              xs: "14px",
            },
            color: "text.secondary",
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ToolsCard;
