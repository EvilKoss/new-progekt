import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData =[
        {message: 'hi how are u?', id : 0, likesCount: 12},
        {message: 'hi, i cool, are u?', id : 1, likesCount: 7},
        {message: 'me 2', id : 2, likesCount: 25}
    ]

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
        <Post message={postData[0].message} likesCount={postData[0].likesCount} />
        <Post message={postData[1].message} likesCount={postData[1].likesCount} />
        <Post message={postData[2].message} likesCount={postData[2].likesCount} />
    </div>

}

export default MyPosts;