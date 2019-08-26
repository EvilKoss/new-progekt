import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData =[
        {message: 'hi how are u?', id : 0, likesCount: 12},
        {message: 'hi, i cool, are u?', id : 1, likesCount: 7},
        {message: 'me 2', id : 2, likesCount: 25}
    ]

    let postsElements = postData.map ( post =>  <Post message={post.message} likesCount={post.likesCount} />);

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