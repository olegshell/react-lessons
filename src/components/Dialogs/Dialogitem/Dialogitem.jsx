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
            <NavLink to={path}>{props.name} {props.age} </NavLink>
            {/*<button onClick={addPost} ref={newPostElement}> Отправить</button>*/}
            {/*<div> Сообщение</div>*/}
        </div>
    )
};

export default DialogItem;