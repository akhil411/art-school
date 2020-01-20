import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";

import './style.css';


class ChatBox extends Component {

    constructor() {
        super();
        this.state = {

        };
    }

    render() {
        return (
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading">Join</h1>
                    <button onClick={this.props.onClick.bind(this, this.state.room)}>Enter Chat Room</button>
                </div>
            </div>
        )
    }

}

export default ChatBox;