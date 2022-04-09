import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Massege/Message";
// import {rerenderEntireThree} from "../../render";
// import state, {updateNewMessage} from "../../Redux/state";




const Dialogs = (props) => {
    let dialogsElement = props.dialogsData.dialogs.map(d => <DialogItem name={d.name} id={d.id} age={d.age}/>)
    let messageElement = props.dialogsData.messages.map(m => <Message message={m.message}/>)

    let newPostElement = React.createRef ();

    let addPost = () => {
        // let text = newPostElement.current.value;
        props.addMessage ();
        // alert(text)
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewMessage (text);
    }



    return (
        <div className={s.dialogs}>
            <div className={s.messages}>
                <textarea className={s.textArea} onChange={onPostChange} ref={newPostElement}  ></textarea>
                <button className={s.buttonMessage} onClick={addPost}>Отправить</button>
            </div>
            <div className={s.dialogsItems}>{dialogsElement}</div>
            <div className={s.messages}>{messageElement}</div>
        </div>


    )
}


export default Dialogs;