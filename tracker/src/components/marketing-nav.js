import React from "react";
import { Button } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import { NavLink, Route, Switch } from "react-router-dom";
import Logo from "../tracker.png";
import LogInPage from "../pages/log-in";
import Register from "../pages/register";
import Marketing from "../pages/marketing";
import Corporate from "../pages/corporate";

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
        <NavLink className="link" to="/">
          <img className="logo" src={Logo} alt="Tracker company logo" />
        </NavLink>
        <div className="buttons">
          <NavLink className="link" to="/log-in">
            <Button variant="outlined">Log in</Button>
          </NavLink>
          <NavLink className="link" to="register">
            <ColorButton variant="contained" color="primary">
              Sign up
            </ColorButton>
          </NavLink>
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          {Marketing}
        </Route>
        <Route path="/log-in">{LogInPage}</Route>
        <Route path="/register">{Register}</Route>
  <Route path="/tos-privacy">{Corporate}</Route>
      </Switch>
    </>
  );
};

export default marketingNav;
