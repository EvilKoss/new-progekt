import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator,updayteNewPostTextActionCreator} from '../../redux/profileReducer';


const MyPosts = (props) => {

    let postsElements = props.postData.map ( post =>  <Post message={post.message} likesCount={post.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
            let text = newPostElement.current.value;
            props.dispatch (addPostActionCreator());
        }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updayteNewPostTextActionCreator(text);
        props.dispatch (action);
    }

    return <div>
        <h3>My posts</h3>
        <div className={s.post}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <button>remove</button>
        </div>
        { postsElements }
    </div>

}

export default MyPosts;