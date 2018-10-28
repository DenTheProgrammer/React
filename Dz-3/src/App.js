import React from "react";
import ReactDom from "react-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import content from "./components/page-content";



let app=document.querySelector("#app");
let posts=content.posts;
ReactDom.render(
    <div className="wrapper">

    <Header/>
    <Main data={posts}/>

    {/*Footer*/}
    </div>
    ,app);