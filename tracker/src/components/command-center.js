import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import Track from "../assets/commandCenter.png";
import Research from "../assets/research.png";
import { NavLink } from "react-router-dom";
import Folder from "../assets/icons8-folder-25.svg";
import Search from "../assets/icons8-search-25.svg";

const CommandCenter = () => {
  const [track, setTrack] = useState(true);
  const [research, setResearch] = useState(false);
  //   const [border, setBorder] = useState(true);

  const trackHandler = () => {
    setTrack(true);
    // setBorder(true);
    setResearch(false);
  };
  const researchHandler = () => {
    setResearch(true);
    // setBorder(false);
    setTrack(false);
  };

  console.log("track", track);
  console.log("research", research);

  return (
    <div className="marketingContainer">
      <div className="marketingBox">
        <div className="marketingText">
          <div className="switchImage">
            <div className="marketingCenter">
              <img className="marketImg" src={Folder} alt="folder icon" />
              <p
                id="pointer1"
                className={track ? "borderRender" : null}
                onClick={trackHandler}
              >
                Track
              </p>
            </div>
            <div className="marketingCenter">
              <img className="marketImg" src={Search} alt="search icon" />
              <p
                id="pointer2"
                className={research ? "borderRender" : null}
                onClick={researchHandler}
              >
                Research
              </p>
            </div>
          </div>
          <div className="marketing">
            <h2 className="hunt">
              Your Job Hunt <br />
              Command Center
            </h2>
            <p className="organize">
              Organize your job search and <br />
              learn to optimize your application, <br /> all in one place
            </p>
            <div className="callToAction">
              <NavLink className="forget" to="/register">
                <Button
                  id="link-register-button"
                  variant="contained"
                  color="secondary"
                  type="submit"
                >
                  Sign up for free
                </Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div className="marketingPictures">
        {track ? (
          <img className="material" src={Track} alt="website image" />
        ) : (
          <img className="material" src={Research} alt="website image" />
        )}
      </div>
    </div>
  );
};

export default CommandCenter;
