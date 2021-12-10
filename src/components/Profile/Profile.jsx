import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
  return <div>
    <div>
      <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
    </div>
    <div className={s.item}>
      ava + description
    </div>
    {/* <div>
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
    <MyPosts></MyPosts>
  </div>

}

export default Profile;