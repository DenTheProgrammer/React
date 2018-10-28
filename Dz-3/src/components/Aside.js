import React from "react";

import About from "./About";
import Archives from "./Archives";
import Elsewhere from "./Elsewhere";

class Aside extends React.Component{
    render(){
        return(
            <aside>
                <About/>
                <Archives/>
                <Elsewhere/>
            </aside>
        )
    }
}

export default Aside;

