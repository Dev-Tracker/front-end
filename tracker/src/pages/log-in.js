import React from "react";
import LogIn from "../components/log-in-form";
import { NavLink, Route, Switch } from "react-router-dom";

const LogInPage = () => {
  return (
    <div className="logContainer">
      <h1>Log in</h1>
      <LogIn />
      <div className="signUp">
        <p className="account">
          Don't have an account?{" "}
          <span>
            {" "}
            <NavLink className="register" to="/register">
              Sign up
            </NavLink>{" "}
          </span>
        </p>
      </div>
      <NavLink className="forget" to="/reset-password">
        Forgot your password
      </NavLink>
      <Switch>
        <Route exact path="/register"></Route>
        <Route path="/reset-password"></Route>
      </Switch>
    </div>
  );
};

export default LogInPage;
