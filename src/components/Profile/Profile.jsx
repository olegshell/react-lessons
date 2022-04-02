import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NameProps from "../Props/NameProps";

const Profile = (props) => {



    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.myPostsData.posts}/>
        </div>
    )
}

export default Profile;