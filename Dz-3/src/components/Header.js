import React from "react";
import content from "./page-content";


let links=content.headerNavLinks;
class Header extends React.Component{
    render(){
        return(
            <header>
            <div className="container">
                <ul>
                    <li><a href={links[0].link}>{links[0].text}</a></li>
                    <li><a href={links[1].link}>{links[1].text}</a></li>
                    <li><a href={links[2].link}>{links[2].text}</a></li>
                    <li><a href={links[3].link}>{links[3].text}</a></li>
                    <li><a href={links[4].link}>{links[4].text}</a></li>
                </ul>
            </div>
            </header>
        )
    }
}

export default Header;