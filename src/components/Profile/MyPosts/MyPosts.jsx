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
        <Post message='hi, how are you?' likeCount="5"/>
        <Post message='hi, i cool, are u?' likeCount="6"/>
        <Post message='me 2 ;)' likeCount="7"/>
    </div>

}

export default MyPosts;