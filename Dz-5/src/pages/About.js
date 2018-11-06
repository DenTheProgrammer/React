import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class About extends React.Component{
    render(){

        return(
            <div className="about">
                <Header/>
                <h2>About</h2>
                <Footer/>
            </div>
        )
    }
}

export default About;