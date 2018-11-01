import React from "react";

class Post extends React.Component{
    render(){
        return(
            <div className="post">
                <h2 className="title">{this.props.header}</h2>
                <h4>{this.props.date} by {this.props.author}</h4>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default Post;