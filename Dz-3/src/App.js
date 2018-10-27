import React from "react";
import ReactDom from "react-dom";

import Header from "./components/Header";
import Main from "./components/Main";



let body=document.querySelector("body");
ReactDom.render(
    <wrapper>

    <Header/>
    <Main/>

    {/*Footer*/}
    </wrapper>
    ,body);