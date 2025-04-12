import { styled } from "@mui/material";
import { Link as RouterLink } from "react-router";

const Link = styled(RouterLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

export default Link;
