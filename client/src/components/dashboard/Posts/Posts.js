import React, { Component } from "react";
import "./style.css";
import API from './../../../utils/API';
import { Link } from "react-router-dom";

class Posts extends Component {

    constructor(props) {
        super(props);
            this.state = {
              posts:[]
            }
    }

    componentDidMount() {
      this.loadPosts();
    }
  
    loadPosts = () => {
      API.getPosts()
        .then(res =>{{
          console.log(res.data)
          this.setState({ posts: res.data})};
      }
        )
        .catch(err => console.log(err));
    };


 
  render() {
    return (

      <div>
        {this.state.posts.map(map => (
          <div className="card">
            {/* <img className="card-img-top" src="..." alt="Card image cap"></img> */}
            <div className="card-body">
              <span><strong>{map.user}</strong></span><span> Updated a post at </span><span>{map.createdAt}</span>
              <p className="card-text">{map.text}</p>
            </div>
          </div>
        ))}
      </div>
            
    );
  }
}

export default Posts;