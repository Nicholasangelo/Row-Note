import React, { Component } from "react";
import Wordprocessor from "../../components/Wordprocessor";
import Notes from "../../components/Notes";
import HeaderBar from "../../components/HeaderBar";
import API from "../../../src/utils/API";
// import {BrowserRouter as Link,} from 'react-router-dom';

class Workspace extends Component {
    state = {
        project: "",
        topics: "",
        resources: "",
        userId: "",
        isLoggedIn: false,
        currentUser: "",
    };

    componentDidMount() {
        this.loadSingleProject();

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

    loadSingleProject = () => {
        API.getSingleProject()
            .then(res =>
                this.setState({
                    project: res.data
                })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <>

                <HeaderBar />
                <div className="container">
                    <div className="row">
                        <div className="WP col-md-9 col-sm-12">
                            <Wordprocessor />
                        </div>
                        <div className="notes col-md-3 col-sm-12">
                            <Notes />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Workspace;