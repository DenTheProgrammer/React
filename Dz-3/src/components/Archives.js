import React from "react";

class Archives extends React.Component {
    render() {
        let archives=this.props.archives.map((link,index)=>{
            return(
                <li key={index}><a href={link.link}>{link.text}</a></li>
            )
        });
        return (
            <div className="archives">
                <h2>Archives</h2>
                <ul>
                    {archives}
                </ul>
            </div>
        )
    }
}

export default Archives;

