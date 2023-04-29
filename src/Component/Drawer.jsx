import * as React from "react";
import { alpha, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  AdminPanelSettings,
  AdminPanelSettingsOutlined,
  Analytics,
  AnalyticsOutlined,
  Apps,
  ContactPageOutlined,
  DashboardOutlined,
  DonutLarge,
  ExpandLess,
  ExpandMore,
  GraphicEqSharp,
  HomeOutlined,
  KeyboardArrowDownOutlined,
  Language,
  LightMode,
  Lock,
  Login,
  Logout,
  MenuOpen,
  Nightlight,
  Notifications,
  Search,
  Settings,
  ShowChartOutlined,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Collapse,
  InputBase,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 180;

const openedMixin = (theme) => ({
  width: drawerWidth,

  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Iconbutton = styled(IconButton)`
  border-radius: 0px;
`;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    "@media (max-width: 800px)": {
      width: "100%",
    },
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "@media (max-width: 800px)": {
    display: "none",
  },
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const Drawer2 = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  display: "none",

  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  "@media (max-width: 800px)": {
    display: "flex",
  },
}));

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

export const Nav = (props) => {
  const { mode, toggleMode } = props;

  const theme = useTheme();
  const [opened, setOpened] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpened(!opened);
  };

  const handleDrawerClose = () => {
    setOpened(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const handleDropdownClose = () => {
    setIsDropdownOpen(false);
  };
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
    <Box sx={{ width: "100%", height: "100% " }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={opened}
        sx={{
          backgroundColor: "white",
          color: "gray",
          height: "60px",
          display: { md: "flex" },

          "@media (max-width: 800px)": {
            position: "absolute",
            zIndex: -1,
          },
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              minWidth: "100%",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <MenuOpen
                onClick={handleDrawerOpen}
                sx={{
                  "@media (max-width: 800px)": {
                    display: opened ? "none" : "flex",
                  },
                  mr: 2,
                  backgroundColor: "lightcyan",
                  fontSize: "20px",
                  color: "black",

                  cursor: "pointer",
                }}
              />
              <InputBase
                placeholder="ctrl + k"
                sx={{
                  border: "1px solid #ccc",
                  fontSize: "10px",
                  paddingLeft: "40px",
                }}
              />
              <Search sx={{ fontSize: "16px", marginLeft: "-160px", mt: 1 }} />
            </Box>
            <Box sx={{ display: { md: "flex", sm: "none", xs: "none" } }}>
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
              <Box
                sx={{
                  borderLeft: "1px solid #ccc",
                  pl: 2,
                  ml: 2,
                  fontSize: "12px",
                  display: "flex",
                }}
              >
                <Box sx={{ mr: 1 }}>
                  <Avatar sx={{ width: "30px", height: "30px" }} />
                </Box>
                <Typography sx={{ fontSize: "12px", mt: "5px" }}>
                  Jhon carter
                </Typography>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={opened}
        mr={20}
        sx={{
          "@media (max-width: 800px)": {
            position: "absolute",
            zIndex: 1,
          },
        }}
      >
        <DrawerHeader
        // sx={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   height: "60px",
        // }}
        >
          {/* <MenuOpen
            onClick={handleDrawerOpen}
            sx={{
              "@media (min-width: 600px)": {
                display: "none",
              },
              mr: 5,
              backgroundColor: "lightcyan",
              fontSize: "20px",
              color: "black",

              cursor: "pointer",
            }}
          /> */}
        </DrawerHeader>
        <Divider sx={{ marginTop: "-5px" }} />

        <List>
          <ListItem disablePadding>
            <ListItem
              sx={{
                flexDirection: "column",
                minHeight: 48,
                justifyContent: opened ? "initial" : "center",
                px: 2.5,
                cursor: "pointer",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: opened ? 0 : "-113px",
                  justifyContent: "center",
                }}
              >
                <ListItemButton
                  onClick={toggleDropdown}
                  sx={{ mr: isDropdownOpen ? 2 : 0 }}
                >
                  <DashboardOutlined
                    sx={{
                      mr: isDropdownOpen ? 1 : 1,
                      fontSize: "20px",
                      color: "black",
                    }}
                  />
                  <ListItemText
                    primary="Dashboard"
                    button
                    sx={{
                      opacity: opened ? 1 : 0,
                      color: "black",
                    }}
                  />
                  {isDropdownOpen ? (
                    <ExpandLess
                      sx={{
                        opacity: opened ? 1 : 0,
                      }}
                    />
                  ) : (
                    <ExpandMore
                      sx={{
                        opacity: opened ? 1 : 0,
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItemIcon>
              {opened ? (
                <>
                  <Collapse
                    in={isDropdownOpen}
                    timeout="auto"
                    sx={{
                      borderLeft: "1px solid #ccc",
                      height: "100%",
                      marginLeft: "-10px",
                    }}
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem component={Link} to="/analyst">
                        <AnalyticsOutlined sx={{ fontSize: "12px" }} />
                        <Typography sx={{ fontSize: "12px", ml: 1 }}>
                          Analyst
                        </Typography>
                      </ListItem>

                      <ListItem component={Link} to="/home">
                        <HomeOutlined sx={{ fontSize: "14px", mr: 1 }} />
                        <Typography sx={{ fontSize: "12px" }}>Home</Typography>
                      </ListItem>
                      <ListItem component={Link} to="/charts">
                        <GraphicEqSharp sx={{ fontSize: "12px" }} />
                        <Typography sx={{ fontSize: "12px", ml: 1 }}>
                          Charts
                        </Typography>
                      </ListItem>
                      <ListItem component={Link} to="/charts">
                        <AdminPanelSettingsOutlined sx={{ fontSize: "12px" }} />
                        <Typography sx={{ fontSize: "12px", ml: 1 }}>
                          Admin
                        </Typography>
                      </ListItem>
                    </List>
                  </Collapse>
                </>
              ) : (
                <Collapse in={isDropdownOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem component={Link} to="/analyst">
                      <Analytics sx={{ fontSize: "12px" }} />
                      <ListItemText />
                    </ListItem>

                    <ListItem component={Link} to="/home">
                      <HomeOutlined sx={{ fontSize: "12px" }} />
                      <ListItemText />
                    </ListItem>
                    <ListItem component={Link} to="/charts">
                      <GraphicEqSharp sx={{ fontSize: "12px" }} />
                      <ListItemText />
                    </ListItem>
                    <ListItem component={Link} to="/charts">
                      <AdminPanelSettings sx={{ fontSize: "12px" }} />
                      <ListItemText />
                    </ListItem>
                  </List>
                </Collapse>
              )}
              <ListItemButton
                sx={{
                  display: "flex",
                  minWidth: 0,
                  mr: opened ? 3 : "auto",
                  justifyContent: "center",
                  marginLeft: opened ? "-35px" : "-16px",
                }}
              >
                <HomeOutlined
                  sx={{ mr: 1, mt: 1, fontSize: "20px", color: "black" }}
                />
                <ListItemText
                  primary="Home"
                  sx={{ opacity: opened ? 1 : 0, color: "black" }}
                />
              </ListItemButton>

              <ListItemButton
                sx={{
                  minWidth: 0,
                  mr: opened ? 3 : "auto",
                  justifyContent: "center",
                  marginLeft: opened ? "-5px" : "-16px",
                }}
              >
                <ContactPageOutlined
                  sx={{ mr: 1, fontSize: "20px", color: "black" }}
                />
                <ListItemText
                  primary="Contact us"
                  sx={{
                    opacity: opened ? 1 : 0,
                    color: "black",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </ListItem>
          {/* ))} */}
        </List>
      </Drawer>
      <Box
        sx={{
          opacity: opened ? "1" : 0,
        }}
      >
        <Drawer2
          variant="permanent"
          open={!opened}
          mr={20}
          sx={{
            "@media (max-width: 800px)": {
              position: "absolute",
              zIndex: 1,
            },
          }}
        >
          <DrawerHeader
          // sx={{
          //   display: "flex",
          //   justifyContent: "space-between",
          //   height: "60px",
          // }}
          >
            <MenuOpen
              onClick={handleDrawerOpen}
              sx={{
                mr: 5,
                backgroundColor: "lightcyan",
                fontSize: "20px",
                color: "black",

                cursor: "pointer",
              }}
            />
          </DrawerHeader>
          <Divider sx={{ marginTop: "-5px" }} />

          <List
            sx={{
              display: opened ? "flex" : "none",
            }}
          >
            <ListItem disablePadding>
              <ListItem
                sx={{
                  flexDirection: "column",
                  minHeight: 48,
                  justifyContent: opened ? "initial" : "center",
                  px: 2.5,
                  cursor: "pointer",
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: opened ? 0 : "-113px",
                    justifyContent: "center",
                    display: opened ? "flex" : "none",
                  }}
                >
                  <ListItemButton
                    onClick={toggleDropdown}
                    sx={{ mr: isDropdownOpen ? 2 : 0 }}
                  >
                    <DashboardOutlined
                      sx={{
                        mr: isDropdownOpen ? 1 : 1,
                        fontSize: "20px",
                        color: "black",
                      }}
                    />
                    <ListItemText
                      primary="Dashboard"
                      button
                      sx={{
                        color: "black",
                      }}
                    />
                    {isDropdownOpen ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore
                        sx={{
                          opacity: opened ? 1 : 0,
                        }}
                      />
                    )}
                  </ListItemButton>
                </ListItemIcon>

                <>
                  <Collapse
                    in={isDropdownOpen}
                    timeout="auto"
                    sx={{
                      borderLeft: "1px solid #ccc",
                      height: "100%",
                      marginLeft: "-10px",
                    }}
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      <ListItem component={Link} to="/analyst">
                        <AnalyticsOutlined sx={{ fontSize: "12px" }} />
                        <Typography sx={{ fontSize: "12px", ml: 1 }}>
                          Analyst
                        </Typography>
                      </ListItem>

                      <ListItem component={Link} to="/home">
                        <HomeOutlined sx={{ fontSize: "14px", mr: 1 }} />
                        <Typography sx={{ fontSize: "12px" }}>Home</Typography>
                      </ListItem>
                      <ListItem component={Link} to="/charts">
                        <GraphicEqSharp sx={{ fontSize: "12px" }} />
                        <Typography sx={{ fontSize: "12px", ml: 1 }}>
                          Charts
                        </Typography>
                      </ListItem>
                      <ListItem component={Link} to="/charts">
                        <AdminPanelSettingsOutlined sx={{ fontSize: "12px" }} />
                        <Typography sx={{ fontSize: "12px", ml: 1 }}>
                          Admin
                        </Typography>
                      </ListItem>
                    </List>
                  </Collapse>
                </>

                <ListItemButton
                  sx={{
                    display: "flex",
                    minWidth: 0,
                    mr: 3,
                    justifyContent: "center",
                    marginLeft: "-35px",
                  }}
                >
                  <HomeOutlined
                    sx={{ mr: 1, mt: 1, fontSize: "20px", color: "black" }}
                  />
                  <ListItemText primary="Home" sx={{ color: "black" }} />
                </ListItemButton>

                <ListItemButton
                  sx={{
                    minWidth: 0,
                    mr: opened ? 3 : "auto",
                    justifyContent: "center",
                    marginLeft: opened ? "-5px" : "-16px",
                  }}
                >
                  <ContactPageOutlined
                    sx={{ mr: 1, fontSize: "20px", color: "black" }}
                  />
                  <ListItemText
                    primary="Contact us"
                    sx={{
                      opacity: opened ? 1 : 0,
                      color: "black",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </ListItem>
            {/* ))} */}
          </List>
        </Drawer2>

        {/* {props.children} */}
      </Box>
      <Box>{props.children}</Box>
    </Box>
  );
};
