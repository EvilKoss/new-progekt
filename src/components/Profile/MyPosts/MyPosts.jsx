import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
        <Post message='hi, how are you?' likesCount="5"/>
        <Post message='hi, i cool, are u?' likesCount="6"/>
        <Post message='me 2 ;)' likesCount="7"/>
    </div>

}

export default MyPosts;