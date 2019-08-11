import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return <div>
        My posts
        <div className={s.post}>
            <textarea></textarea>
            <button>Add post</button>
            <button>remove</button>
        </div>
        <Post />
        <Post />
        <Post />
    </div>

}

export default MyPosts;