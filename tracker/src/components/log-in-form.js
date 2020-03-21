import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import Email from "../assets/icons8-important-mail-25.svg";
import Password from "../assets/icons8-lock-25.svg";
import InputAdornment from "@material-ui/core/InputAdornment";

function LogIn(props) {
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
        <Button
          id="signin-button"
          variant="contained"
          color="secondary"
          type="submit"
        >
          Continue
        </Button>
      </div>
    </form>
  );
}

export default LogIn;
