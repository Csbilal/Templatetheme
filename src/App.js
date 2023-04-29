import { CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { useMemo, useState } from "react";
import { createCustomTheme } from "./utils/CustomTheme";
import { responsiveFontSizes } from "@mui/material/styles";
import Header from "./Component/Header";
import Login from "./Pages/login/Login";
import Register from "./Pages/Register/Register";

import SideBar from "./Component/SideBar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./Component/Drawer";

function App() {
  const [mode, setMode] = useState("light");

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
        <Router>
          {/* <Nav mode={mode} toggleMode={toggleMode}> */}
          <SideBar mode={mode} toggleMode={toggleMode} />
          {/* <Header mode={mode} toggleMode={toggleMode}></Header> */}
          <Routes>
            <Route path="/signin" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/drawer" element={<Drawer />} /> */}
          </Routes>
          {/* </Nav> */}
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
