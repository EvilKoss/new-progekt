import React from "react";
import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


const Dialogs = (props) => {

    let dialogsElements = props.state.DialogsData.map ( dialog => <DialogItem img = {dialog.img} name = {dialog.name} id = {dialog.id} /> );

    let messagesElements = props.state.MessagesData.map ( message =>  <Message message = {message.message}/> );

    let newMessageElement = React.createRef();

    let sendMessage = () => {
            let text = newMessageElement.current.value;
            alert(text);
        }

    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
            </div>
            <div>
                <textarea ref={newMessageElement}></textarea>
            </div>
            <div>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Dialogs;