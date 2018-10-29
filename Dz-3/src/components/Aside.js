import React from "react";
import content from "./page-content";
import About from "./About";
import Archives from "./Archives";
import Elsewhere from "./Elsewhere";

class Aside extends React.Component{
    render(){
        return(
            <aside>
                <About about={content.aside.about}/>
                <Archives archives={content.aside.archives}/>
                <Elsewhere elsewhere={content.aside.elsewhere}/>
            </aside>
        )
    }
}

export default Aside;

