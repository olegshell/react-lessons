import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = (props) => {

    let posts = [
        {id: 0, message: "Hi, how are you", likesCount: 15},
        {id: 1, message: "It's my first post", likesCount: 11},
        {id: 2, message: "Yo", likesCount: 33},
        {id: 3, message: "Yo", likesCount: 23},
        {id: 4, message: "Yo", likesCount: 22},


    ]

    let postsElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

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
                {postsElements}
                {/*<Post massage={postsData[0].message} likesCount={postsData[0].likesCount}/>*/}
                {/*<Post massage={postsData[1].message} likesCount={postsData[1].likesCount}/>*/}
                {/*<Post massage={postsData[2].message} likesCount={postsData[2].likesCount}/>*/}
            </div>
        </div>

    )
}

export default MyPosts;