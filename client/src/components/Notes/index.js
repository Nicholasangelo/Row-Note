import React, { Component } from "react";

// import API from "../../utils/API";

class Notes extends Component {

    state = {
        projectName: "",
        topic:"",
        notes:"",

    };


    render() {
        return (

            <>
                // TOPICS AND RESOURCES COL --> */ }
                <div id="resources" className="col-sm-4" data-hide="true">
                    {/* NOTES BTN ONCLICK SHOWS LIST OF TOPICS --> */}
                    <button id="viewNotes">Notes</button>

                    <div id="resourceBlock">
                        <h3>Topics</h3>
                        <ul className="list-group">
                            {/* {props.topic} */}

                        </ul>
                        <h3>Resources</h3>
                        <div draggable="true" ondragstart="drag(event)">
                            <ul className="list-group">
                                {/* {props.notes} */}
                            </ul>
                        </div>

                        <div className="close">X</div>
                    </div>
                </div>
            </>
        )
    }
}


export default Notes