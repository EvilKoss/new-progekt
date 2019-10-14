const ADD_POST = 'ADD-POST';
const UPDAYYTE_NEW_POST_TEXT = 'UPDAYYTE-NEW-POST-TEXT';

let initialState = {
        postData:[
            {message: 'hi how are u?', id : 0, likesCount: 12},
            {message: 'hi, i cool, are u?', id : 1, likesCount: 7},
            {message: 'me 2', id : 2, likesCount: 25}
        ],
        newPostText: "что у вас нового?"
    };

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: "что у вас нового?"
            };
        }
        case UPDAYYTE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () =>  ({ type: ADD_POST })
export const updayteNewPostTextActionCreator = (text) => ({ type: UPDAYYTE_NEW_POST_TEXT, newText: text })


export default profileReducer;