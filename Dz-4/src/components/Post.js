import React from "react";

class Post extends React.Component{

    state ={
        visible:true,
    };

    render(){
        const body=this.state.visible && <p>{this.props.text}</p>;
        return(
            <div className="post">
                <h2 className="title">{this.props.header}</h2>
                <button onClick={this.hidePost} className="delPost">
                    {this.state.visible ? "hide" : "show"}
                </button>
                <h4>{this.props.date} by {this.props.author}</h4>
                {body}
            </div>
        )
    }

    hidePost =()=> {
        this.setState({
            visible: !this.state.visible
        });
        console.log(this.state.visible);
}


}

export default Post;