import React from 'react';
import {addPostActionCreator,updayteNewPostTextActionCreator} from '../../redux/profileReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
            props.store.dispatch (addPostActionCreator());
        }

    let onPostChange = (text) => {
        let action = updayteNewPostTextActionCreator(text);
        props.store.dispatch (action);
    }

    return (<MyPosts updayteNewPostText={onPostChange} addPost={addPost} 
        postData={state.profilePage.postData} newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;