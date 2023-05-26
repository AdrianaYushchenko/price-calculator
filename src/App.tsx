import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

import { Header } from "./components/Header";
import { PriceCalculator } from "./components/PriceCalculator";

function App() {
  const THEME = createTheme({
    typography: {
      fontFamily: `"Gilroy", sans-serif`,
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
  });
  return (
    <ThemeProvider theme={THEME}>
      <Box>
        <Header />
        <PriceCalculator />
      </Box>
    </ThemeProvider>
  );
}

export default App;
