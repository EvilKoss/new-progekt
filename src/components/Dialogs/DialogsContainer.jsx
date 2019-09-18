import React from "react";
import Dialogs from './Dialogs';
import {updayteNewMessageBodyCreator,sendMessageCreator} from '../redux/dialogsReducer';
import { connect } from "react-redux";


let mapStateToProps = (state) => {
    return {
        MessagesPage: state.MessagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updayteNewMessageBody: (body) => {
            dispatch(updayteNewMessageBodyCreator(body));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;