import React from "react";
import CommandCenter from "../components/command-center";
import Organize from "../components/organize";
import StandOut from "../components/stand-out";
import Panel from "../components/panel";
import Bootcamp from "../components/jobSeekers";

const marketing = () => {
  return (
    <div>
      <CommandCenter />
      <Organize />
      <StandOut />
      <Panel />
      <Bootcamp />
    </div>
  );
};

export default marketing;
