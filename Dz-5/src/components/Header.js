import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="container">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contacts">Contacts</Link></li>
                    </ul>

                </div>
            </header>
        )
    }
}

export default Header;