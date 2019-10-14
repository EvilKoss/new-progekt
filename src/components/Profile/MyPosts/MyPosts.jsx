import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.postData.map ( post =>  <Post message={post.message} likesCount={post.likesCount} key={post.id}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
            props.addPost();
        }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updayteNewPostText(text);
    }

    return <div>
        <h3>My posts</h3>
        <div className={s.post}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <button>remove</button>
        </div>
        { postsElements }
    </div>

}

export default MyPosts;