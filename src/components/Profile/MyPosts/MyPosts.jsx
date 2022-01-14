import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post massage='Hi how are you' sumLikes="25"/>
                <Post massage="It's my first post" sumLikes="13"/>
            </div>
        </div>

    )
}

export default MyPosts;