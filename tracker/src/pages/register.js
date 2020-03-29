import React from "react";
import RegisterForm from "../components/register-form";
import { NavLink, Route, Switch } from "react-router-dom";
import Corporate from "./corporate";
import Login from "./log-in";

const Register = () => {
  return (
    <div className="logContainer">
      <div className="saying">
        <h1>Create your free account</h1>
        <h2 className="slogan">Master the job search</h2>
      </div>
      <RegisterForm />
      <div className="signUp">
        <p className="account">
          Already have an account?{" "}
          <span>
            {" "}
            <NavLink className="register" to="/log-in">
              Log in
            </NavLink>{" "}
          </span>
        </p>
      </div>
      <div className="policy">
        <p className="agree">By continuing, you agree to Trackr's </p>
        <NavLink className="forget" to="/tos-privacy">
          Terms of Service and Privacy Policy
        </NavLink>
      </div>
      <Switch>
        <Route path="/log-in">{Login}</Route>
        <Route path="/tos-privacy">{Corporate}</Route>
      </Switch>
    </div>
  );
};

export default Register;
