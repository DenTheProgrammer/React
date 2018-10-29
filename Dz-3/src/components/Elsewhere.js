import React from "react";

class Elsewhere extends React.Component{
    render(){
        let linkList=this.props.elsewhere.map((link,index)=>{
            return(
                <li key={index}><a href={link.link}>{link.text}</a></li>
            )
        });
        return(
           <div className="elsewhere">
               <h2>Elsewhere</h2>
               <ul>{linkList}</ul>
           </div>

        )
    }
}

export default Elsewhere;