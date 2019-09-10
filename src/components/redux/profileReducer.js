const ADD_POST = 'ADD-POST';
const UPDAYYTE_NEW_POST_TEXT = 'UPDAYYTE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.postData.push (newPost);
            state.newPostText = "что у вас нового?";
            return state;
        case UPDAYYTE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () =>  ({ type: ADD_POST })
export const updayteNewPostTextActionCreator = (text) => ({ type: UPDAYYTE_NEW_POST_TEXT, newText: text })


export default profileReducer;