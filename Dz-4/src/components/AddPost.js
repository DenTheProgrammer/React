import React from "react";

export  default class AddPost extends React.Component{
    render(){
        return(
            <div className="add-post">
            <h2>Create your post here</h2>
            <form action="#" className="add-post">
                <input type="text" className="add-post__title" placeholder="Title"/>
                <textarea name="post" id="post" cols="30" rows="10" className="add-post__post" placeholder="Your post:"/>
                <input type="text" className="add-post__username" placeholder="Username"/>
                <button type="submit">Create post</button>
            </form>
            </div>
        )
    }
}