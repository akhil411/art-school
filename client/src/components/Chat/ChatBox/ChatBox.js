import React, { Component } from 'react';
import './style.css';

class ChatBox extends Component {

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div className="chatBoxContainer">
                <div className="chatBoxInnerContainer">
                    <button onClick={this.props.onClick}>Chat Room<img src="/assets/images/chatRoom.png" alt="Chat Room"></img></button>
                </div>
            </div>
        )
    }
}

export default ChatBox;
