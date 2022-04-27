import React from 'react';
import css from './Friends.module.css'

// const myFriends = [
//     {firstName: 'German', lastName: 'Grek', age: 34},
//     {firstName: 'Anatoly', lastName: 'Vasserman', age: 35},
//     {firstName: 'Mara', lastName: 'Vasserma', age: 34},
//     {firstName: 'Vasy', lastName: 'Mikheev', age: 30},
//     {firstName: 'Vovan', lastName: 'none',  age: 30},
//     {firstName: 'Alina', lastName: 'Artist', age: 29},
// ]



const Friends = (props) => {
    const listMyFriends = props.myFriends.map (function listFriends(fullName)  {
        return (
            <ul>First Name {fullName.firstName} Last Name {fullName.lastName} Age {fullName.age}</ul>
        )

    })
    return (
        <div>
            {listMyFriends}
        </div>
    )
}

export default Friends;
