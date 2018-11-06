import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class Contacts extends React.Component{
    render(){

        return(
            <div className="contacts">
                <Header/>
                <h2>Contacts</h2>
                <Footer/>
            </div>
        )
    }
}

export default Contacts;