import React from "react";

class About extends React.Component{
    render(){
        return(
            <div className="about">
                <h2>{this.props.about.title}</h2>
                <p>{this.props.about.text}</p>
            </div>
        )
    }
}

export default About;