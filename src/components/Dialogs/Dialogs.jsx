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
    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name="Kostya" id="Kostya" />
                <DialogItem name="Dima" id="Dima" />
                <DialogItem name="Igor" id="Igor" />
                <DialogItem name="Sergey" id="Sergey" />
                <DialogItem name="Pasha" id="Pasha" />
                <DialogItem name="Jenya" id="Jenya" />
            </div>
            <div className={style.messages}>
                <Message message="hi how are u?"/>
                <Message message="i good, are u?"/>
                <Message message="me 2"/>
                <Message message="me 2"/>
                <Message message="me 2"/>
            </div>
        </div>
    )
}

export default Dialogs;