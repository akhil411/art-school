import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import TextContainer from './TextContainer/TextContainer';
import Messages from './Messages/Messages';
import Input from './Input/Input';
import './style.css';
import onlineIcon from './Icons/onlineIcon.png';
import closeIcon from './Icons/closeIcon.png';
const ENDPOINT = 'localhost:3001';

let socket;

const ChatRoom = (props) => {
	const [name, setName] = useState(props.name);
	const [room, setRoom] = useState('Art School');
	const [users, setUsers] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		socket = io(ENDPOINT);

		socket.emit('join', { name, room }, (error) => {
			if (error) {
				alert(error);
			}
		});
	}, [ENDPOINT, props.name, props.room]);

	useEffect(() => {
		socket.on('message', (message) => {
			setMessages([...messages, message]);
		});

		socket.on('roomData', ({ users }) => {
			setUsers(users);
		})

		return () => {
			socket.emit('disconnect');

			socket.off();
		}
	}, [messages])

	const sendMessage = (event) => {
		event.preventDefault();

		if (message) {
			socket.emit('sendMessage', message, () => setMessage(''));
		}
	}

	const disconnect = () => {
			socket.close();
	} 

	return (
		<div className="chatRoomContainer">
			<div className="infoBar">
				<div className="leftInnerContainer">
					<img className="onlineIcon" src={onlineIcon} alt="online icon" />
					<h5>{room}</h5>
				</div>
				<div className="rightInnerContainer" onClick={() => { disconnect() ; props.onClick() }}>
					<img src={closeIcon} alt="close icon" />
				</div>
			</div>
			<div className="chatScroll">
				<Messages messages={messages} name={name} />
			</div>
			<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
			<TextContainer users={users} />
		</div>
	);
}

export default ChatRoom;
