// import React, { useState } from 'react';
// import { Link } from "react-router-dom";

// import './style.css';

// export default function ChatBox(props) {


//   return (
//     <div className="joinOuterContainer">
//       <button onClick={props.onClick}>Enter Chat Room</button>
//     </div>
//   );
// }


import React, { useState, Component } from 'react';
import { Link } from "react-router-dom";

import './style.css';


class ChatBox extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            room: "",

        };
    }

    onChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className="joinOuterContainer">
                <div className="joinInnerContainer">
                    <h1 className="heading">Join</h1>
                    <div>
                    <input name="room" placeholder="Room" className="joinInput mt-20" type="text" value={this.state.room} onChange={this.onChange} />
                    </div>
                    <button onClick={this.props.onClick.bind(this, this.state.room)}>Enter Chat Room</button>
                </div>
            </div>
        )
    }

}

export default ChatBox;