import React from "react";
import CommandCenter from "../components/command-center";
import Organize from "../components/organize";
import StandOut from "../components/stand-out";


const marketing = () => {
  return (
    <div>
      {/* <h1>Your new career is a track away</h1> */}
      <CommandCenter />
      <Organize />
      <StandOut />
    </div>
  );
};

export default marketing;
