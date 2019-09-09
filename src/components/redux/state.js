const ADD_POST = 'ADD-POST';
const UPDAYYTE_NEW_POST_TEXT = 'UPDAYYTE-NEW-POST-TEXT';
const UPDAYYTE_NEW_MESSAGE_BODY = 'UPDAYYTE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage:{
            postData:[
                {message: 'hi how are u?', id : 0, likesCount: 12},
                {message: 'hi, i cool, are u?', id : 1, likesCount: 7},
                {message: 'me 2', id : 2, likesCount: 25}
            ],
            newPostText: "что у вас нового?"
        },
        MessagesPage: {
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
        },
        sidebar: {}
    
    },
    _callSubscriber() {
        console.log ("state");
    },

    getState() {
        return this._state;
    },
    subscride(observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {
        if (action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postData.push (newPost);
            this._state.profilePage.newPostText = "что у вас нового?";
            this._callSubscriber (this._state);
        }else if (action.type === UPDAYYTE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber (this._state);
        }
        else if (action.type === UPDAYYTE_NEW_MESSAGE_BODY){
            this._state.MessagesPage.newMessageBody = action.body;
            this._callSubscriber (this._state);
        }
        else if (action.type === SEND_MESSAGE){
            let body = this._state.MessagesPage.newMessageBody;
            this._state.MessagesPage.DialogsData.newMessageBody = '';
            this._state.MessagesPage.MessagesData.push({message: body, id : 5});
            this._callSubscriber(this._state);
        }
    }
    
}

export const addPostActionCreator = () =>  ({ type: ADD_POST })
export const updayteNewPostTextActionCreator = (text) => ({ type: UPDAYYTE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () =>  ({ type: SEND_MESSAGE })
export const updayteNewMessageBodyCreator = (body) => ({ type: UPDAYYTE_NEW_MESSAGE_BODY, body: body })


export default store;
window.store = store;