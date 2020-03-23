import React from "react";
import Lottie from "react-lottie";
import Ninja from "../assets/ninja.json"

const Corporate = () => {
  return (
    <>
      <div className="ninja">
       <Lottie width={300} height={300} options={{loop: true, autoplay: true, animationData: Ninja,  rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
   }}}/>
   </div>
   <h1 className="center">Terms of service and Privacy Policy are not yet in place</h1>
    </>
  );
};

export default Corporate;
