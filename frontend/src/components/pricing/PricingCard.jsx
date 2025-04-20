import {
  alpha,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Check } from "lucide-react";

const PricingCard = ({
  isPremium,
  type,
  chargeBasis,
  price,
  features = [],
}) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        boxShadow:
          "0 10px 30px rgba(0, 0, 0, 0.03), 0 1px 8px rgba(0, 0, 0, 0.06)",
        backgroundColor: "background.default",
        borderRadius: "12px",
        border: isPremium ? "2px solid" : "1px solid",
        borderColor: "transparent",
        borderTop: "4px solid",
        borderTopColor: "primary.main",
        height: "max-content",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {isPremium && (
          <Chip
            color="primary"
            label="Recommended"
            component={"span"}
            sx={{
              alignSelf: "start",
              height: "28px",
              fontWeight: 500,
              fontSize: "12px",
              marginBottom: "10px",
            }}
          />
        )}
        <Typography
          component={"h2"}
          sx={{
            fontSize: "20px",
            fontWeight: 600,
            marginBottom: "20px",
          }}
        >
          {type}
        </Typography>
        <Typography component="p" sx={{ fontSize: "28px", fontWeight: 600 }}>
          ${price}{" "}
          <Typography
            component="span"
            sx={{ fontSize: "14px", fontWeight: 400, color: "text.secondary" }}
          >
            /{chargeBasis?.toLowerCase()}
          </Typography>
        </Typography>
        <Typography
          component={"p"}
          sx={{
            marginTop: "10px",
            marginBottom: "20px",
            fontWeight: 400,
            fontSize: "14px",
            color: "text.secondary",
          }}
        >
          {isPremium
            ? "For professionals and growing teams"
            : "Perfect for individuals getting started"}
        </Typography>
        <Divider
          sx={{
            marginBottom: "20px",
            marginTop: "10px",
          }}
        />
        <Stack spacing={2} sx={{ marginBottom: "20px" }}>
          {features.length > 0 &&
            features.map((feat) => (
              <Box
                key={feat.id}
                sx={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Typography
                  component={"span"}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& svg": {
                      stroke: !feat.available ? "#ccc" : "#FFD65A",
                    },
                  }}
                >
                  <Check size={20} />
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: "14px",
                    color: "text.secondary",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {feat.value} {feat.name}
                </Typography>
              </Box>
            ))}
        </Stack>
        <Button
          variant={isPremium ? "contained" : "outlined"}
          sx={{ borderRadius: "6px" }}
        >
          {isPremium ? "Get Started" : "Sign up for free"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
