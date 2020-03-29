import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Logo from "../tracker.png";
import TemporaryDrawer from "./avatar";

const AppNavigation = () => {
  return (
    <>
      <nav>
        <NavLink className="link" to="/app">
          <img className="logo" src={Logo} alt="Tracker company logo" />
        </NavLink>
        <div className="appNavContainer">
          <NavLink className="link" to="/app">
            Dashboard
          </NavLink>
          <NavLink className="link" to="/app/network">
            Network
          </NavLink>
          <NavLink className="link" to="/app/material">
            Material
          </NavLink>
          <NavLink className="link" to="/app/resources">
            Resources
          </NavLink>
          <TemporaryDrawer className="Link" id="appAvatar" />
        </div>
      </nav>
      <Switch>
        <Route exact path="/app/">
          Hello, You're in for now
        </Route>
        <Route path="/app/log-in"></Route>
        <Route path="/app/register"></Route>
        <Route path="/app/tos-privacy"></Route>
      </Switch>
    </>
  );
};

export default AppNavigation;
