import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Massege/Message";
import {sendMessageCreator, updateNewMessageBody,} from "../../Redux/state";
// import {rerenderEntireThree} from "../../render";
// import state, {updateNewMessage} from "../../Redux/state";


const Dialogs = (props) => {

    let state =props.store.getState().dialogsPage;

    let dialogsElement = props.dialogsData.dialogs.map(d => <DialogItem name={d.name} id={d.id} age={d.age}/>);
    let messageElement = props.dialogsData.messages.map(m => <Message message={m.message}/>);
    let newMessageBode = props.dialogsData.newMessageBode;

    // let newPostElement = React.createRef();
    // let addPost = () => {
    //     // let text = newPostElement.current.value;
    //     props.dispatch(sendMessageCreator());
    //     // alert(text)
    // }
    //
    // let onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     let action = updateNewMessageBody(text);
    //     props.dispatch(action);
    // }
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())

    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch (updateNewMessageBody(body))

    }


    return (
        <div className={s.dialogs}>
            <div className={s.messages}>
                <textarea className={s.textArea}
                          value={newMessageBode}
                          onChange={onNewMessageChange}></textarea>
                <button className={s.buttonMessage} onClick={onSendMessageClick}>Отправить</button>
            </div>
            <div className={s.dialogsItems}>{dialogsElement}</div>
            <div className={s.messages}>{messageElement}</div>
        </div>


    )
}


export default Dialogs;