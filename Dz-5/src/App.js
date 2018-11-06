import React from "react";
import ReactDom from "react-dom";


import { BrowserRouter, Route } from "react-router-dom";


import "./style.scss";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";



let app=document.querySelector("#app");

ReactDom.render(
    <BrowserRouter>
        <div className="wrapper">
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/about" component={About} />
            <Route path="/contacts" component={Contacts} />
        </div>
    </BrowserRouter>
    ,app);