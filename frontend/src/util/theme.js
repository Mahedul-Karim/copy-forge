import { createTheme } from "@mui/material/styles";

const muiButtons = {
  styleOverrides: {
    root: ({ theme }) => ({
      color: "#333333",
      "&:hover": {
        backgroundColor: theme.palette.action.hover,
        boxShadow: "none",
      },
      boxShadow: "none",
      textTransform: "none",
      fontSize: "16px",
    }),
    outlined:({theme})=>({
        color:theme.palette.primary.main,
        backgroundColor:'transparent',
        border:'1px solid',
        "&:hover": {
        backgroundColor: 'transparent',
      }
    }),
  },
};

const defaultStyles = {
  breakpoints: {
    values: {
      xxs: 0,
      xs: 400,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FFD65A",
    },
    secondary: {
      main: "#4B4F58",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F9F9F9",
    },
    text: {
      primary: "#333333",
      secondary: "#6C6C6C",
    },
    divider: "#E0E0E0",
    action: {
      hover: "#FFB84C",
    },
  },
  components: {
    MuiButton: muiButtons,
  },
  ...defaultStyles,
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFD65A",
    },
    secondary: {
      main: "#B0B3B8",
    },
    background: {
      default: "#121212",
      paper: "#1D1D1D",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#B0B3B8",
    },
    divider: "#333333",
    action: {
      hover: "#FFB84C",
    },
  },
  components: {
    MuiButton: muiButtons,
  },
  ...defaultStyles,
});

export { lightTheme, darkTheme };
