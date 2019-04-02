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
            <Wordprocessor />
            <Notes />
        
</>
    );
}


export default Workspace;