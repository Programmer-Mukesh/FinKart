import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Grid, Container, Button, Paper, Alert } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const UserLogin = ({
  title,
  subTitle,
  password,
  setPassword,
  setEmail,
  email,
  handleAction,
  btnText,
  pageLogin,
  setPageLogin,
  name,
  setName,
  error,
}) => {
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
    setPassword(values.password);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <Paper elevation={12} sx={{ marginTop: "30px" }}>
        <Grid container>
          <Grid item md={4} xs={12} className="bgImage" paddingRight={2}>
            <h2 className="title">{title}</h2>
            <div className="subTitle">{subTitle}</div>
          </Grid>
          <Grid item md={6} xs={12} padding={2}>
            {error && (
              <Alert variant="filled" severity="error">
                {error}
              </Alert>
            )}

            {!pageLogin && (
              <TextField
                id="name"
                label="Enter Name"
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <TextField
              id="email"
              label="Enter Email"
              variant="standard"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormControl variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Enter Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <p className="smallText">
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </p>
            <Button
              variant="contained"
              sx={{
                background: "#fb641b",
                "&:hover": { background: "#fb641b", opacity: 0.9 },
              }}
              onClick={handleAction}
            >
              {btnText}
            </Button>
            {pageLogin ? (
              <p className="attention" onClick={() => setPageLogin(false)}>
                New to Finkart? Create an account
              </p>
            ) : (
              <p className="attention" onClick={() => setPageLogin(true)}>
                Existing User? Log in
              </p>
            )}
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default UserLogin;
