import React from "react";


class Header extends React.Component{
    render(){
        let links=this.props.links.map((link,index)=>{
            return(
                <li key={index}><a href={link.link}>{link.text}</a></li>
            )
        });
        return(
            <header>
                <div className="container">
                    <ul>{links}</ul>
                </div>
            </header>
        )
    }
}

export default Header;