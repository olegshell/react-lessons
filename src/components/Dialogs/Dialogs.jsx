import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom"


const DialogItem = (props) => {

    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name} </NavLink>
            {/*<NavLink to={'/dialogs/'+props.id}>{props.name} </NavLink>*/}
        </div>
    )
}

const Massege = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )

}

const  Dialogs = (props) => {

    let diaglogs = [
        {id: 0, name: "Oleg"},
        {id: 1, name: "German"},
        {id: 2, name: "Alexandr"},
        {id: 3, name: "Dima"},
        {id: 4, name: "Olga"},
        {id: 5, name: "Sveta"},
    ]

    let messages = [
        {id:0, message: "Hi"},
        {id:1, message: "How are you?"},
        {id:2, message: "Yo"},
    ]

    let dialogsElement = diaglogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElement = messages.map(m => <Massege message={m.message}/>)



    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            {/*    <DialogItem name={diaglosData[0].name} id={diaglosData[0].id}/>*/}
            {/*    <DialogItem name ={diaglosData[1].name} id={diaglosData[1].id}/>*/}
            {/*    /!*<DialogItem name="German" id="2"/>*!/*/}
            {/*    /!*<DialogItem name="Alexandr" id="3"/>*!/*/}
            {/*    /!*<DialogItem name="Dima" id="4"/>*!/*/}
            {/*    /!*<DialogItem name="Olga" id="5"/>*!/*/}
            {/*    /!*<DialogItem name="Sveta" id="6"/>*!/*/}
            {/*    /!*<div className={s.dialog + " " + s.active}>*!/*/}
            {/*    /!*    <NavLink to='/dialogs/1'> Oleg </NavLink>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*<div  className={s.dialog}>*!/*/}
            {/*    /!*    <NavLink to='/dialogs/1'> German </NavLink>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*<div className={s.dialog}>*!/*/}
            {/*    /!*    <NavLink to='/dialogs/1'> Alexandr </NavLink>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*<div className={s.dialog}>*!/*/}
            {/*    /!*    <NavLink to='/dialogs/1'> Dima </NavLink>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*<div className={s.dialog}>*!/*/}
            {/*    /!*    <NavLink to='/dialogs/1'> Olga </NavLink>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*    /!*<div className={s.dialog}>*!/*/}
            {/*    /!*    <NavLink to='/dialogs/1'> Sveta </NavLink>*!/*/}
            {/*    /!*</div>*!/*/}
            </div>
            <div className={s.masseges}>
                {messageElement}
                {/*<Massege message={messages[0].message}/>*/}
                {/*<Massege message={messages[1].message}/>*/}
                {/*<Massege message={messages[2].message}/>*/}
            </div>
        </div>


    )
}

export default Dialogs;