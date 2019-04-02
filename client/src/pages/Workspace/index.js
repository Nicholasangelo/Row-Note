import React from "react";
import Wordprocessor from "../../components/Wordprocessor";
import Notes from "../../components/Notes";
import HeaderBar from "../../components/HeaderBar";
// import API from "../../../src/utils/API";
// import {BrowserRouter as Link,} from 'react-router-dom';


function Workspace() {
    return (
        <>

            <HeaderBar />
            <div className="container">
                <div className="row">
                    <div className="WP col-md-8 col-sm-12">
                        <Wordprocessor />
                    </div>
                    <div className="notes col-md-4 col-sm-12">
                        <Notes />
                    </div>
                </div>
            </div>
        </>
    );
}


export default Workspace;