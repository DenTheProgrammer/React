import React from "react";
import Post from "./Post";
import AddPost from "./AddPost";

class Posts extends React.Component{

    state={
        postList:this.props.posts,
    };

    render(){
        console.log(`render this ${this.state.postList}`);
        let postList= this.state.postList.map((post,index)=>{
            return(
                <Post
                    key={index}
                    header={post.header}
                    date={post.date}
                    author={post.author}
                    text={post.text}
                />
            )
        });

        return(
            <div className="posts">
                {postList}
                <AddPost/>
            </div>
           )
        }


        componentDidMount(){
        let form=document.querySelector(".add-post");
            form.addEventListener("submit",(e)=>{
                e.preventDefault();
                console.log(this.state.postList);
                let title=document.querySelector(".add-post__title").value;
                let post=document.querySelector(".add-post__post").value;
                let username=document.querySelector(".add-post__username").value;
               this.addPost(title,post,username);
               form.reset();
            });

        }


    addPost(title,post,username){
     this.state.postList.push({
         // key:Math.random(),
         header:title,
        date:new Date().toDateString(),
        author:username,
        text:post,
     });
        this.setState({postList:this.state.postList})
    }
}


export default Posts;