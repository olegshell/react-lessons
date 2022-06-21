import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Massege/Message";
import {sendMessageCreator, updateNewMessageBody,} from "../../Redux/dialogs-reducer";
import {connect} from "react-redux";
// import {rerenderEntireThree} from "../../render";
// import state, {updateNewMessage} from "../../Redux/state";


const Dialogs = (props) => {

    let state = props.dialogsPage

    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} age={d.age} key={d.id}/>);
    let messageElement = state.messages.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBode = state.newMessageBody;

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.messages}>
                <textarea className={s.textArea}
                          value={newMessageBode}
                          onChange={onNewMessageChange}/>
                <button className={s.buttonMessage} onClick={onSendMessageClick}>Отправить</button>
            </div>
            <div className={s.dialogsItems}>{dialogsElement}</div>
            <div className={s.messages}>{messageElement}</div>
        </div>


    )
}



export default Dialogs;