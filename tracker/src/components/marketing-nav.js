import React from "react";
import { Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import { Link, Route } from "react-router-dom";

const marketingNav = () => {
  const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(red[800]),
      backgroundColor: red[800],
      "&:hover": {
        backgroundColor: red[600]
      }
    }
  }))(Button);
  return (
    <>
      <nav>
        <Link to="/log-in">
          <Button variant="outlined">Log in</Button>
        </Link>
        <Link to="register">
          <ColorButton variant="contained" color="primary">
            Register
          </ColorButton>
        </Link>
      </nav>
      <Route path="/log-in">Log in Here</Route>
      <Route path="/register">Register Here</Route>
    </>
  );
};

export default marketingNav;
