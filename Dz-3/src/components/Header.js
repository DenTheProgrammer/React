import React from "react";

class Header extends React.Component{
    render(){
        return(
            <header>
            <div className="container">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">New features</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">New hires</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </div>
            </header>
        )
    }
}

export default Header;