import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Signin from "./pages/Signin";
import MyProjects from "./pages/MyProjects";
import Workspace from "./pages/Workspace";
import NoMatch from "./pages/NoMatch";
import "./app.css";
import "./app.scss";
import CreateAcct from "./pages/CreateAcct";


class App extends Component {
  state = {
    isLoggedIn: false,
    loginUserName: ""
  }

  handleLoginStatus = (passedStatus, passedUserName) => {
    console.log("APP: Loginstatus and email = " + passedStatus + " " + passedUserName);
    if (passedStatus) {
      this.setState({ isLoggedIn: true, });
      this.setState({ loginUserName: passedUserName });
    } else {
      this.setState({ isLoggedIn: false });
      this.setState({ loginUserName: passedUserName });
    };
    console.log("APP: state = " + JSON.stringify(this.state));
  };


  reportLogin = () => {
    let note = this.state.isLoggedIn;
    return note
  };

  reportUserName = () => {
    let userName = this.state.loginUserName;
    return userName;
  };


  render() {
  return (
    <Router>
      <div className="pageContainer">
      <div className="row">
      <div className="col-12">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/sign-in" component={Signin} />
          <Route exact path="/create-acct" component={CreateAcct} />
          <Route exact path="/my-projects" component={MyProjects} />
          <Route exact path="/project-detail" component={Workspace} />
          <Route component={NoMatch} />
        </Switch>
      </div>
      </div>
      </div>
    </Router>
  );
}
};

export default App;
