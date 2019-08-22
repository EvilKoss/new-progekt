import React from "react";
import style from './Dialogs.module.css';

const Dialogs = (props) => {
    return(
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    Kostya
                </div>
                <div className={style.dialog}>
                    Dima
                </div>
                <div className={style.dialog}>
                    Igor
                </div>
                <div className={style.dialog}>
                    Sergey
                </div>
                <div className={style.dialog}>
                    Pasha
                </div>
                <div className={style.dialog}>
                    Jenya
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