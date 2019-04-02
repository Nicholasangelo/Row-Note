import React, { Component } from "react";
import Quill from "quill";

class Wordprocessor extends Component {

    state = {
        projectName: "",
        topic: "",
        note: "",
        body: ""

    };

    componentDidMount() {
    // SET UP THE TOOLBAR OBJECT AND FORMATTING TOOLS
let toolbarOptions = [
    [{ 'align': [] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline',],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image', 'formula'],
    ['blockquote', 'code-block']
  ];
  
  
  // ];CREATE A NEW EDITOR
  var quill = new Quill('#editor', {
    modules: {
      toolbar: toolbarOptions
    },
    theme: 'snow'
  });
}


    render() {
        return (

            <>
               
                {/* START COL AND ROW CONTAINER --> */}
                <div className="container">

                    <div className="row">
                        <div id="textConatiner" className="col-sm-8">
                            {/* QUILL TOOLBAR --> */}
                            <div id="toolbar" className="tools">
                            </div>

                            {/* QUILL EDITOR ... DRAG AND DROP EVENT HANDLERS TAGGED INLINE --> */}
                            <div id="editor">
                                <div ondrop="drop(event, target)" ondragover="allowDrop(event)"></div>
                            </div>
                            {/* BTN TO SAVE PROJECT --> */}
                            <button className="btn-primary" id="saveProject">Save</button>
                        </div>

                    </div>
                </div>

            </>
        )
    }
}


export default Wordprocessor
