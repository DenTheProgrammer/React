import React from "react";
import content from "./page-content";

class Elsewhere extends React.Component{
    render(){
        return(
            <div className="elsewhere">
                <h2>Elsewhere</h2>
                <ul>
                    <li><a href={content.aside.elsewhere[0].link}>{content.aside.elsewhere[0].text}</a></li>
                    <li><a href={content.aside.elsewhere[1].link}>{content.aside.elsewhere[1].text}</a></li>
                    <li><a href={content.aside.elsewhere[2].link}>{content.aside.elsewhere[2].text}</a></li>
                </ul>
            </div>
        )
    }
}

export default Elsewhere;