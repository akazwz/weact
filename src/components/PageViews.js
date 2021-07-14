import React from "react";
import {useLocation} from "react-router-dom"

function PageViews() {
    let location = useLocation();
    return (
        <div>
            <h1>{location.pathname}</h1>
        </div>
    )
}

export default PageViews
