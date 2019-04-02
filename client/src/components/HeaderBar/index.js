import React from "react"

function HeaderBar() {
    return (
        // PAGE HEADER WITH LOGO */ }
        < div className="pageHeader" >


            <div id="topbar" className="containerFluid">
                <div id="topbarContent" class="container">

                    <a href="/">
                        <div id="logo-box">Row.<span>note</span>
                            <img id="duck-icon" src="/images/Rownote.svg" alt="" />
                        </div>
                    </a>
                    <div id="editor-toggle" className="nav-thing">editor</div>
                    <div id="list-toggle" className="nav-thing">list</div>
                    <div id="signin-link" className="nav-thing">
                        {/* <a href="/">projects</a> */}
                    </div>

                </div>
            </div>

        </div >
    )
}

export default HeaderBar