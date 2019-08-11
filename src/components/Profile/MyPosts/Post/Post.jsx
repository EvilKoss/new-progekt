import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.post}>
            <img src="https://from-ua.com/upload/articles/2015/11/13/medium/1447413117_avatar.jpg" />
            posts 1
            <div>
                <span>Like</span>
            </div>
        </div>
    );
}

export default Post;