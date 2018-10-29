import React from "react";


class Title extends React.Component{
    render(){
        return(

            <div className="title">
                <h1 className="blog-name">{this.props.title.title}</h1>
                <p className="desc">{this.props.title.title_desc}</p>
            </div>
        )
    }
}

export default Title;