import {
  Facebook,
  Google,
  Twitter,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onChange, value, ...otherProps }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleKeepSignedInChange = (event) => {
    setKeepSignedIn(event.target.checked);
  };
  return (
    <Box mt={5}>
      <Container maxWidth="sm">
        <Box
          sx={{
            padding: "2.3rem",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            height: "auto",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography sx={{ fontSize: "1.5rem", fontWeight: "600" }}>
              Login
            </Typography>
            <Typography
              sx={{
                color: "rgb(24, 144, 255)",
                fontSize: "1remem",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Don't have an account?
            </Typography>
          </Box>
          <Box mt={5}>
            <Typography sx={{ fontSize: "1rem", fontWeight: "400", mb: 1.5 }}>
              Email Address
            </Typography>

            <TextField
              variant="outlined"
              placeholder="Enter email address"
              fullWidth
              type="text"
            />
          </Box>
          <Box mt={4}>
            <Typography sx={{ fontSize: "1rem", fontWeight: "400", mb: 1.5 }}>
              Password
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter password"
              fullWidth
              type={showPassword ? "text" : "password"}
              value={value}
              onChange={onChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={togglePasswordVisibility}
                      onMouseDown={(e) => e.preventDefault()}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              {...otherProps}
            />
          </Box>

          <Box
            display="flex"
            mt={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={keepSignedIn}
                    onChange={handleKeepSignedInChange}
                  />
                }
                label="Keep me signed in"
              />
            </Box>
            <Typography>Forget Password ?</Typography>
          </Box>
          <Box mt={3}>
            <Button
              fullWidth
              variant="contained"
              sx={{ padding: "0.7rem 0rem" }}
            >
              Login
            </Button>
          </Box>
          <Box mt={3} textAlign="center">
            Login with
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }} mt={2}>
            <Box
              sx={{
                padding: "0.5rem 1rem",
                border: "1px solid black",
                display: "flex",
                gap: 1,
              }}
            >
              <Google sx={{ color: "#1890FF" }} />
              <Box>Goolge</Box>
            </Box>
            <Box
              sx={{
                padding: "0.5rem 1rem",
                border: "1px solid black",
                display: "flex",
                gap: 1,
              }}
            >
              <Twitter sx={{ color: "#1890FF" }} />
              <Box>Twiiter</Box>
            </Box>
            <Box
              sx={{
                padding: "0.5rem 1rem",
                border: "1px solid black",
                display: "flex",
                gap: 1,
              }}
            >
              <Facebook sx={{ color: "#1890FF" }} />
              <Box>FaceBook</Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
