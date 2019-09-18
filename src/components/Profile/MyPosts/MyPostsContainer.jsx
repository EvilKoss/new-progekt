import React from 'react';
import {addPostActionCreator,updayteNewPostTextActionCreator} from '../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updayteNewPostText: (text) => {
            let action = updayteNewPostTextActionCreator(text);
            dispatch (action);
        },
        addPost: () => {
            dispatch (addPostActionCreator());
        }

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;