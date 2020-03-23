import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import Email from "../assets/icons8-important-mail-25.svg";
import Password from "../assets/icons8-lock-25.svg";
import Person from "../assets/icons8-person-25.svg";
import InputAdornment from "@material-ui/core/InputAdornment";

function Register(props) {
  const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(blue[800]),
      backgroundColor: blue[800],
      "&:hover": {
        backgroundColor: blue[600]
      }
    }
  }))(Button);

  const [UserData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  });

  const handleChanges = e => {
    setUserData({
      ...UserData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("registered");
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <div className="field">
        <TextField
          required
          name="first_name"
          label="First Name"
          value={UserData.first_name}
          onChange={handleChanges}
          variant="outlined"
          placeholder="First Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Person} alt="human icon" />
              </InputAdornment>
            )
          }}
        />
      </div>
      <div className="field">
        <TextField
          required
          name="last_name"
          label="Last Name"
          value={UserData.last_name}
          onChange={handleChanges}
          variant="outlined"
          placeholder="Last Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Person} alt="human icon" />
              </InputAdornment>
            )
          }}
        />
      </div>
      <div className="field">
        <TextField
          required
          name="email"
          label="Email"
          value={UserData.email}
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
          value={UserData.password}
          onChange={handleChanges}
          variant="outlined"
          placeholder="Password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <img src={Password} alt="password icon" />
              </InputAdornment>
            )
          }}
        />
      </div>
      <div className="field">
        <ColorButton
          id="register-button"
          variant="contained"
          color="secondary"
          type="submit"
        >
          Sign up for free
        </ColorButton>
      </div>
    </form>
  );
}

export default Register;
