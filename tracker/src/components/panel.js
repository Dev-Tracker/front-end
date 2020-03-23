import React from "react";
import Desktop from "../assets/desktop.json";
import Manage from "../assets/manage.json";
import Task from "../assets/taks.json";
import Lottie from "react-lottie";

const Panel = () => {
  return (
    <div className="panelContainer">
      <div className="panel">
        <Lottie
          width={300}
          height={300}
          options={{
            loop: true,
            autoplay: true,
            animationData: Desktop,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
        />
        <h3 className="panelTitle">Visualize</h3>
        <p className="panelParagraph">
          Organize your job search in <br />a way that is easy to manage
        </p>
      </div>
      <div className="panel">
        <Lottie
          width={300}
          height={300}
          options={{
            loop: true,
            autoplay: true,
            animationData: Manage,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
        />
        <h3 className="panelTitle">Track Notes</h3>
        <p className="panelParagraph">
          It's not rocket science,
          <br />
          ditch the scrap paper
        </p>
      </div>
      <div className="panel">
        <Lottie
          width={300}
          height={300}
          options={{
            loop: true,
            autoplay: true,
            animationData: Task,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
        />
        <h3 className="panelTitle">Manage Tasks</h3>
        <p className="panelParagraph">
          Everything you need to
          <br />
          go from applied to hired
        </p>
      </div>
    </div>
  );
};

export default Panel;
