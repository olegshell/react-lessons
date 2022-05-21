import React from 'react';
import css from './Friends.module.css'
import Friends from "./Friends";


const FriendsContainer = (props) => {

    let state = props.appMyFriendsStore.getState().myFriendsPage;

    return <Friends myFriendsPage={state}/>
}

export default FriendsContainer;
