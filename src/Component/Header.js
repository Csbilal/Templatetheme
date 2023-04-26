import * as React from "react";

import { Button, Container, Box, useTheme, Typography } from "@mui/material";
import { LightMode, Nightlight } from "@mui/icons-material";

function Header({ toggleMode, mode }) {
  const theme = useTheme();
  return (
    <>
      <Box sx={{ background: `${theme.palette.background.hard}` }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "5px",
            }}
          >
            <Typography variant="h6">Home</Typography>
            <Box>
              <Button
                sx={{
                  background: `${theme.palette.background.hard}`,
                  color: `${theme.palette.text.lightgreen}`,
                  marginRight: "5px",
                  "&:hover": {
                    color: `${theme.palette.text.lightgreen}`,
                  },
                }}
                onClick={() => toggleMode()}
              >
                {mode === "dark" ? <LightMode /> : <Nightlight />}
              </Button>
              <Button variant="btn2">Login Account</Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Header;
