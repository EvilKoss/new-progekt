import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postData.map ( post =>  <Post message={post.message} likesCount={post.likesCount} />);

    return <div>
        <h3>My posts</h3>
        <div className={s.post}>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <button>remove</button>
        </div>
        { postsElements }
    </div>

}

export default MyPosts;