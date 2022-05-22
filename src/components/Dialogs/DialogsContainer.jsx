import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Massege/Message";
import {sendMessageCreator, updateNewMessageBody,} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import {rerenderEntireThree} from "../../render";
// import state, {updateNewMessage} from "../../Redux/state";


const DialogsContainer = (props) => {

    let state = props.dialogsStore.getState().dialogsPage;

    let sendMessageClick = () => {
        props.dialogsStore.dispatch(sendMessageCreator())
    }

    let newMessageChange = (body) => {
        props.dialogsStore.dispatch(updateNewMessageBody(body))
    }


    return <Dialogs onSendMessageClick={sendMessageClick} updateNewMessageBody={newMessageChange} dialogsPage={state}/>
}


export default DialogsContainer;