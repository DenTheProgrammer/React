import React from "react";
import Title from "./Title";
import content from "./page-content";
import Aside from "./Aside";
import Posts from "./Posts";

class Main extends React.Component{


    render(){

        return(
            <div className={"container main_container"}>
                <div className="main-content">
                    <Title title={content.blogTitle}/>
                    <Posts posts={content.posts}/>
                </div>
                <Aside/>
            </div>
        )
    }
}

export default Main;