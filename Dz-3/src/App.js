import React from "react";
import ReactDom from "react-dom";

import Header from "./components/Header";
import Main from "./components/Main";



let app=document.querySelector("#app");
ReactDom.render(
    <div className="wrapper">

    <Header/>
    <Main/>

    {/*Footer*/}
    </div>
    ,app);