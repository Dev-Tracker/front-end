import React from "react";
import Research from "../assets/research.png";

const StandOut = () => {
  return (
    <div className="marketingContainer">
      <div className="marketingBox">
        <div className="marketingText">
          <div className="marketing">
            <h2 className="hunt">
              Stand apart <br/>from the crowd
            </h2>
            <p className="organize">
            Access Industry Leading Resources <br /> to help  you land the job of your <br />dreams. Learn how to create a world <br />class resume,  master the tech <br />interview, and close the deal with a salary higher than your peers. 
            </p>
          </div>
        </div>
      </div>
      <div className="marketingPictures">
        <img className="material" src={Research} alt="website image" />
      </div>
    </div>
  );
};

export default StandOut;