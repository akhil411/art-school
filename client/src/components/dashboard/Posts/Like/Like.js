import React, { Component } from "react";
import './style.css'
import API from './../../../../utils/API';

class Like extends Component {
    constructor() {
        super();
        this.state = {
            likeCount: '',
            likes: [],
            liked: false,
        }
    }

    componentDidMount = () => {
        this.setState({ likeCount: this.props.likes.like.length });
        this.setState({ likes: this.props.likes.like }, () => {
            if (this.state.likes.some((id) => {
                return id._id === this.props.userId;
            })) {
                this.setState({ liked: true });
            }
        })
    }

    onClick = () => {
        if (!this.state.liked) {
            API.setLike({ userId: this.props.userId, postId: this.props.postId })
                .then(res => {
                    this.setState({ likeCount: res.data[0].likes.like.length });
                    this.setState({ liked: true });
                })
                .catch(err => console.log(err));
        }
    }

    likeOnClick = () => {
        console.log(this.props.postId)
        API.getLikes(this.props.postId)
            .then(res => {
                this.setState({ likes: res.data.likes.like });
                var likesModal = document.getElementsByClassName("modal-likes-body")[0];
                likesModal.innerHTML = "";
                this.state.likes.map(like => (
                    likesModal.innerHTML += "<p>" + like.name + "</p>"
                ))
            })
            .catch(err => console.log(err));
    }

    render() {

        return (
            <div className="like-section">
                <div className="like-button" onClick={this.onClick}><img src={(this.state.liked ? '../assets/images/liked.png' : '../assets/images/like.png')}></img>  </div>
                <h6 onClick={this.likeOnClick} className="like-text" data-toggle="modal" data-target="#likeModalCenter">{this.state.likeCount} Likes</h6>
            </div>
        )
    }
}

export default Like;
