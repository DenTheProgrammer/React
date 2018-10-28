import React from "react";
import content from "./page-content";

class About extends React.Component{
    render(){
        return(
            <div className="about">
                <h2>{content.aside.about.title}</h2>
                <p>{content.aside.about.text}</p>
            </div>
        )
    }
}

export default About;