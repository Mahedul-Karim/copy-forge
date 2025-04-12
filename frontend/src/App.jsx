import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./util/theme";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes";

import { useSelector } from "react-redux";

function App() {
  const { isDarkMode } = useSelector((state) => state.dark);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
