import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return(
        <div className={style.dialog + '' + style.active} >
            <NavLink to={"/dialogs/" + props.id} >{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return <div className={style.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
    let DialogsData =[
        {name: 'Kostya' , id : 0},
        {name: 'Dima', id : 1},
        {name: 'Igor', id : 2},
        {name: 'Sergey', id : 3},
        {name: 'Pasha', id : 4},
        {name: 'Jenya', id : 5}
    ]

    let MessagesData =[
        {message: 'hi how are u?', id : 0},
        {message: 'i good, are u?', id : 1},
        {message: 'me 2', id : 2},
        {message: 'me 2', id : 3},
        {message: 'me 2', id : 4}
    ]

    let dialogsElements = DialogsData.map ( dialog => <DialogItem name = {dialog.name} id = {dialog.id} /> );

    let messagesElements = MessagesData.map ( message =>  <Message message = {message.message}/> );

    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;