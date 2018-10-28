import React from "react";
import content from "./page-content";

class Post extends React.Component{
    render(){
        return(
            <div className="post">
                <h2 className="title">{content.posts[0].header}</h2>
                <h4>{content.posts[0].date} by {content.posts[0].author}</h4>
                <p>{content.posts[0].text}</p>
            </div>
        )
    }
}

export default Post;