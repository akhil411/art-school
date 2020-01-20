import React, { Component } from "react";
import Message from './Message/Message';
import './style.css';

class Messages extends Component {

	scrollToBottom = () => {
		this.messagesEnd.scrollIntoView({ behavior: "smooth" });
	  }
	  
	  componentDidMount() {
		this.scrollToBottom();
	  }
	  
	  componentDidUpdate() {
		this.scrollToBottom();
	  }

	render() {

		return (
			<div>
			<div className="MessageContainer" >
			  <div className="MessagesList">
				{this.props.messages.map((message, i) => <div key={i}><Message message={message} name={this.props.name} /></div>)}
				</div>
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    </div>
		)
	}
}

export default Messages;
