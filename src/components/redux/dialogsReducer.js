const UPDAYYTE_NEW_MESSAGE_BODY = 'UPDAYYTE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDAYYTE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.DialogsData.newMessageBody = '';
            state.MessagesData.push({message: body, id : 5});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () =>  ({ type: SEND_MESSAGE })
export const updayteNewMessageBodyCreator = (body) => ({ type: UPDAYYTE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;