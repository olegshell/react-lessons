import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Massege/Message";




const  Dialogs = (props) => {

    let dialogsElement = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = props.state.messages.map(m => <Message message={m.message}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElement}</div>
            <div className={s.masseges}>{messageElement}</div>
        </div>


    )
}

export default Dialogs;