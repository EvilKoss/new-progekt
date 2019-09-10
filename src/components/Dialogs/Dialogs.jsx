import React from "react";
import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {updayteNewMessageBodyCreator,sendMessageCreator} from '../redux/dialogsReducer';


const Dialogs = (props) => {

    let state = props.store.getState().MessagesPage;

    let dialogsElements = state.DialogsData.map ( dialog => <DialogItem img = {dialog.img} name = {dialog.name} id = {dialog.id} /> );
    let messagesElements = state.MessagesData.map ( message =>  <Message message = {message.message}/> );
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updayteNewMessageBodyCreator(body));
    }

    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='enter your message'></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;