import React from "react";
import AppNavigation from "../app-components/app-navigation";
import { NavLink, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <NavLink to="/app">
        <AppNavigation />
      </NavLink>

      <Route path="/app">Hello user</Route>
    </div>
  );
};

export default App;
