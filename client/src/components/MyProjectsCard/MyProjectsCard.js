
import React from "react";

function MyProjectsCard(props) {
  return (
        <div className="projectCard">

          <div className="content">
            <h1 className="projectTitle">
            <strong>{props.projectName}</strong>
            </h1>
          </div>
        </div>
  );
}

export default MyProjectsCard;