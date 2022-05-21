import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage

    let addPost =() => {
        props.store.dispatch(addPostActionCreator());
    };

    let  onPostChange = (text) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch (action);
    }

    return <MyPosts updateNewPostText={onPostChange}
                    addPost={addPost}
                    newPostText={state.newPostText}
                    posts={state.posts}/>
}

export default MyPostsContainer;