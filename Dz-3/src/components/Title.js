import React from "react";
import content from "./page-content";

class Title extends React.Component{
    render(){
        return(

            <div className="title">
                <h1 className="blog-name">{content.title}</h1>
                <p className="desc">{content.title_desc}</p>
            </div>
        )
    }
}

export default Title;