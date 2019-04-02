
import React, { Component } from "react";
import API from "../../../src/utils/API";
import NewProjectCard from "../../components/NewProjectCard/NewProjectCard.js";
import MyProjectsCard from "../../components/MyProjectsCard/MyProjectsCard.js";
import {BrowserRouter as Router,Link,} from 'react-router-dom';


class MyProjects extends Component {
  state = {
    projects: "",
    userId: "",
    isLoggedIn: false,
    currentUser: ""
  };

  componentDidMount() {
    this.loadProjects();

    // CHECK FOR VALID USER
    let readToken = window.localStorage.getItem("SMC_authkey");
    console.log("Token Read = " + readToken);
    let query = {
      token: readToken
    };
    API.checkAuth(query)
      .then(res => {
        if (res.data.success) {
          console.log("in success handle");
          // SAVE USER NAME TO SESSION
          const currentUserId = sessionStorage.getItem("userId");
          const currentUser = sessionStorage.getItem("userData");
          this.setState({
            currentUser: currentUser,
            currentUserId: currentUserId,
            isLoggedIn: true,
            // userID:
          });
          // window.location.assign('/view-event');
        } else {
          console.log("in failure handle");
          this.setState({ isLoggedIn: false });
          window.location.assign('/sign-in');
          console.log("ERROR:  Would redirect to login.")
        };
      })
      .catch(err => console.log(err));
  };

  loadProjects = () => {
    API.getAllProjects()
      .then(res =>
        this.setState({
          projects: res.data
        }))
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <h1>Rownote</h1>
        <NewProjectCard />

        {this.state.projects.length ? (
          <ul className="projectList list-group list-group-flush">
            {this.state.projects.map((project) => (

              <Link to={`/project-detail/${project._id}`}>
                <li className="project list-group-item">

                  <MyProjectsCard
                    id={project.id}
                    projectName={project.projectName} />
                </li>
              </Link>
            ))}

          </ul>
        ) : (
            <h3>No Results to Display</h3>
          )}
      </div>
    );
  }
}

export default MyProjects;