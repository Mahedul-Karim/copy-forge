import { Button, styled } from "@mui/material";

export const ResponsiveButton = styled(Button)(() => ({
  fontSize: {
    xxs: "12px",
    xs: "14px",
  },
  lineHeight: {
    xs: 1.75,
    xxs: 1.5,
  },
  fontWeight: 600,
}));
