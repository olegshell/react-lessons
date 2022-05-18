import React from 'react';
import css from './Friends.module.css'


const Friends = (props) => {

    const listMyFriends = props.appMyFriends.myFriends.map (function listFriends(fullName)  {
        return (
            <ul>First Name {fullName.firstName} Last Name {fullName.lastName} Age {fullName.age}</ul>
        )
    })

    const nameOfFriends = props.appMyFriends.name
    return (
        <div>
            {listMyFriends}
            {nameOfFriends}
        </div>
    )
}

export default Friends;
