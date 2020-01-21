import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./style.css";
import ChatBox from './ChatBox/ChatBox';
import ChatRoom from './ChatBox/ChatRoom/ChatRoom'

class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            submitSuccess: false,
            enterChatRoom:false,
            chatRoom:'',
        };
        this.chatInClick = this.chatInClick.bind(this);
        this.chatOutClick = this.chatOutClick.bind(this);
    }

    chatInClick() {
        this.setState({enterChatRoom:true});
    }

    chatOutClick() {
        this.setState({enterChatRoom: false});
    }

    render() {
        const { user } = this.props.auth;
        let chat;
        if (this.props.auth.isAuthenticated) {
            if (this.state.enterChatRoom) {
                chat = <ChatRoom onClick={this.chatOutClick} name={user.name} />;
              } else {
                chat = <ChatBox onClick={this.chatInClick} />;
            }
        } else {
            chat = <div></div>
        }

        return (
                <div className="chat-section">
                    {chat}
                </div>
        );
    }
}

Chat.propTypes = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps
)(Chat);
