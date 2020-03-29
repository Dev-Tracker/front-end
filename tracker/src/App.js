import React, { useEffect } from "react";
import "./sass/index.scss";
import Nav from "./components/marketing-nav";
import AppNav from "./app-components/app-navigation";

function App() {
  useEffect(() => {
    if (localStorage.getItem("token")) {
      return <AppNav />;
    } else {
      return <Nav />;
    }
  });

  return <>{localStorage.getItem("token") ? <AppNav /> : <Nav />}</>;
}

export default App;
