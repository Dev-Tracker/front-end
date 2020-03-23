import React from "react";
import Seekers from "../assets/logos4.svg";

const Bootcamp = () => {
  return (
    <div id="removeMargin" className="marketingContainer2">
      <div className="marketingBox">
        <div className="marketingText">
          <div className="marketing">
            <h2 className="hunt">Loved by job seekers</h2>
            <p className="organize">
              Dev App Tracker is used by bootcamp grads all over the world,
              including those already <br /> in the industry.
            </p>
          </div>
        </div>
      </div>
      <div className="marketingPictures2">
        <img className="material" src={Seekers} alt="website image" />
      </div>
    </div>
  );
};

export default Bootcamp;
