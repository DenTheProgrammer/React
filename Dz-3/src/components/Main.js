import React from "react";

class Main extends React.Component{
    render(){
        return(
            <container>
                <div className="main-content">
                    <div className="title">
                        <h1 className="blog-name">The Bootstrap Blog</h1>
                        <p className="desc">The official example template of creating a blog with Bootstrap.</p>
                    </div>
                </div>
                <aside>
                    <div className="about"></div>
                    <div className="archives"></div>
                    <div className="elsewhere"></div>
                </aside>
            </container>
        )
    }
}

export default Main;