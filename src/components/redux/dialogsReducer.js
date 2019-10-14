const UPDAYYTE_NEW_MESSAGE_BODY = 'UPDAYYTE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    DialogsData:[
        {name: 'Kostya' , id : 0,img: 'https://sun9-20.userapi.com/c629305/v629305300/44cda/_Cz_0blUsiY.jpg'},
        {name: 'Dima', id : 1,img: 'https://i.pinimg.com/originals/88/00/76/8800768b99a0148df9c9491fb01a068d.jpg'},
        {name: 'Igor', id : 2,img: 'https://i.pinimg.com/originals/29/2c/54/292c54ae1d1db8460a2848c9e7b511d5.png'},
        {name: 'Sergey', id : 3,img: 'https://i.pinimg.com/originals/86/4f/fc/864ffc3dee1fd8359ab768c8f7b5ae80.png'},
        {name: 'Pasha', id : 4,img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDSEPvZj4iYxZYw9V-FT1CnxrT8NlWrHpsK5EoHpSxuMRXJpf'},
        {name: 'Jenya', id : 5,img: 'https://vignette.wikia.nocookie.net/volfs/images/5/50/Wiki-background/revision/latest?cb=20161223104028&path-prefix=ru'}
    ],
    MessagesData:[
        {message: 'hi how are u?', id : 0},
        {message: 'i good, are u?', id : 1},
        {message: 'me 2', id : 2},
        {message: 'me 2', id : 3},
        {message: 'me 2', id : 4}
    ],
    newMessageBody: ""
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDAYYTE_NEW_MESSAGE_BODY:
                return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
                let body = state.newMessageBody;
                return {
                    ...state,
                    newMessageBody: '',
                    MessagesData: [...state.MessagesData,{message: body, id : 5}]
                };
        default:
            return state;
    }
}

export const sendMessageCreator = () =>  ({ type: SEND_MESSAGE })
export const updayteNewMessageBodyCreator = (body) => ({ type: UPDAYYTE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;