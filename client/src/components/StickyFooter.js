// OK
import React from "react"
import { Link } from "react-router-dom";

function StickyFooter() {
return (
    <>
    <div className="blurFoot"></div>
    <div className="footer">
        <h1>demoDay</h1>
            
            <Link to="/view-event" className="nav-link footerNav">
                viewEvent
            </Link>
    </div>
   </>
)
}

export default StickyFooter;