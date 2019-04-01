// OK
import React, { Component } from "react";
import API from "../../utils/API";
import "./NewProjectCard.css";

class NewProjectCard extends Component {

  state = {
    projectName: "",

  };


  handleInputChange = event => {


    let projectValue = event.target.value;
    // let projectName = event.target.name;


    this.setState({
      projectName: projectValue
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    // this.setState({
    //   projectName: this.state.projectName
    // })

    // console.log(this.state.projectName)

    this.createProject({
      projectName: this.state.projectName
    });

    
  }

  createProject = query => {
    API.createProject(query)
      .then(res => {
        if (res.data.success) {
          console.log(`New Project Created: ${this.state.projectName}`)
        } else {
          console.log(`New Project ERROR: ${query}`)

        }
      })
      .catch(err => console.log(err))
  }





render() {

  return (
    <>
      <div className="newProjectInput input-group mb-2">
        <div className="createNewProject input-group-prepend">
          <button className="createNewProjectButton add-project-button btn btn-outline-secondary btn-sm"
            type="submit"
            onClick={this.handleFormSubmit}>
            <i className="fas fa-book"></i>
          </button>
        </div>
        <input type="text"
          className="projectName add-project-name form-control form-control-sm"
          placeholder="enter a name for your new Project and click the book icon"
          value={this.state.projectName}
          onChange={this.handleInputChange}
          name="projectName" />
        {/* END CREATE NEW PROJECT INPUT --}} */}
      </div>


    </>
  )
}
}

export default NewProjectCard;