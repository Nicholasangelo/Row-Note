// OK
import React from "react";
import "./projectCard.css";

function ProjectCard(props) {
  return (
    <>
      <div className="newProjectInput input-group mb-2">
        <div className="createNewProject input-group-prepend">
          <button className="createNewProjectButton add-project-button btn btn-outline-secondary btn-sm" type="submit">
            <i class="fas fa-book"></i>
          </button>
        </div>
        <input type="text" className="projectName add-project-name form-control form-control-sm" placeholder="enter a name for your new Project and click the book icon" />
          {/* END CREATE NEW PROJECT INPUT --}} */}
      </div>


          <div class="myProjects">

            {/* MY PROJECTS HEADLINE */}
            <div class="row">
              <div id="project-list" class="col-12">
                <p><strong>my projects:</strong></p>
              </div>
            </div>

            {/* MY PROJECTS LIST AREA  */}
            <div class="projects input-group mb-2">
            </div>

          </div>
</>
        );
      }
      
export default ProjectCard;