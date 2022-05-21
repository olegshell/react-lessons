import React from 'react';
import css from './Friends.module.css'


const Friends = (props) => {

    const listMyFriends = props.myFriendsPage.myFriends.map (function listFriends(fullName)  {
        return (
            <ul>First Name {fullName.firstName} Last Name {fullName.lastName} Age {fullName.age}</ul>
        )
    })

    const nameOfFriends = props.myFriendsPage.name
    return (
        <div>
            {listMyFriends}
            {nameOfFriends}
        </div>
    )
}

export default Friends;
