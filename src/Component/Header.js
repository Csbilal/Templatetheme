import * as React from "react";

import {
  Button,
  Container,
  Box,
  useTheme,
  Typography,
  Avatar,
  styled,
  Menu,
  alpha,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  Archive,
  Edit,
  FileCopy,
  KeyboardArrowDown,
  LightMode,
  Login,
  Logout,
  MoreHoriz,
  Nightlight,
  Settings,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function Header({ toggleMode, mode }) {
  const theme = useTheme();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ background: `${theme.palette.background.hard}` }}>
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "15px",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </Typography>
            </Box>
            <Box display="flex" gap={4} alignItems="center">
              <Box mt={1}>
                <Settings
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  disableElevation
                  onClick={handleClick}
                  sx={{ cursor: "pointer" }}
                ></Settings>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      gap={2}
                    >
                      <Typography>Theme mode</Typography>
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
                    </Box>
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <Login />
                    <Button
                      onClick={() => {
                        navigate("/signin");
                      }}
                    >
                      SigIn
                    </Button>
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple>
                    <Logout />
                    Logout
                  </MenuItem>
                </StyledMenu>
              </Box>
              <Box display="flex" gap={2} alignItems="center">
                <Avatar sx={{ width: "30px", height: "30px" }} />
                <Typography sx={{ fontSize: "20px " }}>jhon</Typography>
              </Box>

              {/* <Button
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
              <Button
                variant="btn2"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Login Account
              </Button> */}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Header;
