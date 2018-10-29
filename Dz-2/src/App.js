import React from "react";
import ReactDom from "react-dom";
import Developer from "./FIO";

let date =document.querySelector("#date");

ReactDom.render(<h1 onClick={()=>alert(new Date())}>Вывод Даты</h1>
    ,date);


console.log(new Developer());