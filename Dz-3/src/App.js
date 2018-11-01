import React from "react";
import ReactDom from "react-dom";

import Header from "./components/Header";
import Main from "./components/Main";
import content from "./components/page-content";
import Footer from "./components/Footer";
import "./style.scss";



let app=document.querySelector("#app");

ReactDom.render(
    <div className={"wrapper"}>

        <Header links={content.headerNavLinks}/>
        <Main data={content.posts}/>
        <Footer/>

    </div>
    ,app);