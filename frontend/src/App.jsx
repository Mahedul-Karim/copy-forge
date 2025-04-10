import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./util/theme";
import { RouterProvider } from "react-router";
import { router } from "./routes/routes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
