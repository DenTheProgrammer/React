import React from "react";

class Post extends React.Component{

    state ={
        visible:true,
    };

    render(){
        return(
            <div className="post">
                <h2 className="title">{this.props.header}</h2>
                <button onClick={this.deletePost} className="delPost">del</button>
                <h4>{this.props.date} by {this.props.author}</h4>
                <p>{this.props.text}</p>
            </div>
        )
    }

    deletePost =()=> {
        this.state.visible=!this.state.visible;
        console.log(this.state.visible);
}


}

export default Post;