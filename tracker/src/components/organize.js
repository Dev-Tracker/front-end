import React from "react";
import Research from "../assets/research.png";

const Organize = () => {
  return (
    <div className="marketingContainer2">
      <div className="marketingBox">
        <div className="marketingText">
          <div className="marketing">
            <h2 className="hunt">
              Organize <br/>your search
            </h2>
            <p className="organize">
            Other applications track everything. <br /> At Trackr we track what's essential <br />and leave you with more time to<br /> prep for what matters. 
            </p>
          </div>
        </div>
      </div>
      <div className="marketingPictures2">
        <img className="material" src={Research} alt="website image" />
      </div>
    </div>
  );
};

export default Organize;
