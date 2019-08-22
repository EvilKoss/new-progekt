import React from "react";
import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to="/dialogs/Kostya" >Kostya</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/Dima" >Dima</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/Igor" >Igor</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/Sergey" >Sergey</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/Pasha" >Pasha</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/Jenya" >Jenya</NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.dialog}>hi how are u?</div>
                <div className={style.dialog}>i good, are u?</div>
                <div className={style.dialog}>me 2</div>
            </div>
        </div>
    )
}

export default Dialogs;