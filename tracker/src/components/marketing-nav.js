import React from "react";
import { Button } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import { NavLink, Route, Switch } from "react-router-dom";
import Logo from "../tracker.png";
import LogInPage from "../pages/log-in";
import Register from "../pages/register";
import Marketing from "../pages/marketing";
import Corporate from "../pages/corporate";

const MarketingNav = () => {
  const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(blue[800]),
      backgroundColor: blue[800],
      "&:hover": {
        backgroundColor: blue[600]
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
        <Route exact path="/register" component={Register} />
        <Route path="/tos-privacy">{Corporate}</Route>
      </Switch>
    </>
  );
};

export default MarketingNav;
