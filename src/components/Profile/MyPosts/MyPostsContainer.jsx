import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";


//Передача данных через пропсы
// const MyPostsContainer = (props) => {
//
//     let state = props.store.getState().profilePage
//
//     let addPost =() => {
//         props.store.dispatch(addPostActionCreator());
//     };
//
//     let  onPostChange = (text) => {
//         let action = updateNewPostActionCreator(text);
//         props.store.dispatch (action);
//     }
//
//     return <MyPosts updateNewPostText={onPostChange}
//                     addPost={addPost}
//                     newPostText={state.newPostText}
//                     posts={state.posts}/>
// }
//
// export default MyPostsContainer;


//Обращение на прямую к стор через <StoreContext.Consumer>
// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().profilePage;
//
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
//
//                 let onPostChange = (text) => {
//                     let action = updateNewPostActionCreator(text);
//                     store.dispatch(action);
//                 };
//
//                 return (
//                     <MyPosts updateNewPostText={onPostChange}
//                              addPost={addPost}
//                         /////////////////////////////
//                              newPostText={state.newPostText}
//                              posts={state.posts}/>)
//             }
//             }
//         </StoreContext.Consumer>
//     )

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage.newPostText,
        posts: state.profilePage.posts,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text) => {
            let action = updateNewPostActionCreator(text);
            dispatch(action);

        }


    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;