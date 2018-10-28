import React from "react";
import Title from "./Title";
import content from "./page-content";
import Aside from "./Aside";
import Post from "./Post";

class Main extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="main-content">
                    <Title/>
                   {/*<Posts/>*/}
                   <Post/>
                   <Post/>
                </div>
                <Aside/>
            </div>
        )
    }
}

export default Main;