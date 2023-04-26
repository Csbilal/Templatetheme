import { CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { createCustomTheme } from "./utils/CustomTheme";
import { responsiveFontSizes } from "@mui/material/styles";
import Header from "./Component/Header";

function App() {
  const [mode, setMode] = useState("dark");

  // const theme = useTheme();

  const toggleMode = () => {
    setMode((val) => (val === "light" ? "dark" : "light"));
  };

  const theme = useMemo(() => {
    let theme = createCustomTheme(mode);
    theme = responsiveFontSizes(theme);
    return theme;
  }, [mode]);

  console.log(mode, "");
  return (
    <>
      <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
        <Header mode={mode} toggleMode={toggleMode}>
          Header
        </Header>
      </ThemeProvider>
    </>
  );
}

export default App;
