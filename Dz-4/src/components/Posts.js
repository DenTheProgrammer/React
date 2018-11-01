import React from "react";
import Post from "./Post";

class Posts extends React.Component{
    render(){
        return(
            this.props.posts.map((post,index)=>{
                return(
                    <Post
                        key={index}
                        header={post.header}
                        date={post.date}
                        author={post.author}
                        text={post.text}
                    />
                )
            })
        )
    }
}


export default Posts;