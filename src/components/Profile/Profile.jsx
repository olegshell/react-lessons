import React from 'react';
import s from './Profile.module.css'
// import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NameProps from "../Props/NameProps";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer //store={props.stateProfilePage}
                              //newPostText={props.profilePage.newPostText}
                              //addPost={props.addPost}
                              //dispatch={props.dispatch}
            />

        </div>
    )
}

export default Profile;