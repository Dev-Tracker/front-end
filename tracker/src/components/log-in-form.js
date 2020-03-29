import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import Email from "../assets/icons8-important-mail-25.svg";
import Password from "../assets/icons8-lock-25.svg";
import InputAdornment from "@material-ui/core/InputAdornment";
import axios from "axios";

function LogIn(props) {
  const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(blue[800]),
      backgroundColor: blue[800],
      "&:hover": {
        backgroundColor: blue[600]
      }
    }
  }))(Button);

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const handleChanges = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("https://developer-tracker.herokuapp.com/api/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.token);
      })
      .catch(err => {
        console.log("error", err);
      });

    console.log("submitted");
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <div className="field">
        <TextField
          required
          name="email"
          label="Email"
          value={credentials.email}
          onChange={handleChanges}
          variant="outlined"
          placeholder="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Email} alt="email icon" />
              </InputAdornment>
            )
          }}
        />
      </div>
      <div className="field">
        <TextField
          required
          type="password"
          name="password"
          label="Password"
          value={credentials.password}
          onChange={handleChanges}
          variant="outlined"
          placeholder="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Password} alt="email icon" />
              </InputAdornment>
            )
          }}
        />
      </div>
      <div className="field">
        <ColorButton
          id="signin-button"
          variant="contained"
          color="secondary"
          type="submit"
        >
          Continue
        </ColorButton>
      </div>
    </form>
  );
}

export default LogIn;
