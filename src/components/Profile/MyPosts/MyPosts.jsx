import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'



const MyPosts = () => {
    return <div className={s.content}>
    {/* <div>
      <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
    </div>
    <div>
      ava + description
    </div> 
    <div>
      My posts
      <div>
        New post
      </div>
      <div>
        <div>
          post 1
        </div>
        <div>
          post 2
        </div>
      </div>
    </div> */}
    <Post massage = 'Hi how are you' sumLikes = "25"/>
    <Post massage = "It's my first post" sumLikes = "13"/>
    <Post />
    <Post />
    <Post />

  </div>
}

export default MyPosts;