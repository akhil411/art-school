import React from 'react';
import './style.css';
import TextField from '@material-ui/core/TextField';

const Input = ({ setMessage, sendMessage, message }) => (
	<form className="chatform">
		<TextField
			className="input"
			type="text"
			label="Type a message..."
			value={message}
			onChange={({ target: { value } }) => setMessage(value)}
			onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
		/>
		<button className="sendButton modal-call-button" onClick={e => sendMessage(e)}><span>Send </span></button>
	</form>
)

export default Input;
