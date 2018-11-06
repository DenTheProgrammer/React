import React from "react";
import Header from "../components/Header";
import content from "../components/page-content";
import Main from "../components/Main";
import Footer from "../components/Footer";

class Home extends React.Component{
    render(){

        return(
            <div className="home">
                <Header/>
                <Main data={content.posts}/>
                <Footer/>
            </div>
        )
    }
}

export default Home;