import { CssBaseline, ThemeProvider } from "@mui/material";
import {  lightTheme } from "./util/theme";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
