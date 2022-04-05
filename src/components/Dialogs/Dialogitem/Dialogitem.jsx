import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom"


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    };


    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name} </NavLink>
            {/*<NavLink to={'/dialogs/'+props.id}>{props.name} </NavLink>*/}
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>Отправить</button>
        </div>
    )
};

export default DialogItem;