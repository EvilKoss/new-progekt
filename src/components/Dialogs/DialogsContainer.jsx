import React from "react";
import style from './Dialogs.module.css';
import Message from './Message/Message';
import Dialogs from './Dialogs';
import {updayteNewMessageBodyCreator,sendMessageCreator} from '../redux/dialogsReducer';


const DialogsContainer = (props) => {
    let state = props.store.getState().MessagesPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (body) => {
        props.store.dispatch(updayteNewMessageBodyCreator(body));
    }

    return(<Dialogs updayteNewMessageBody = {onNewMessageChange} sendMessage={onSendMessageClick} MessagesPage={state}/>)
}

export default DialogsContainer;