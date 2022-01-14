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

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Oleg" id="1"/>
                <DialogItem name="German" id="2"/>
                <DialogItem name="Alexandr" id="3"/>
                <DialogItem name="Dima" id="4"/>
                <DialogItem name="Olga" id="5"/>
                <DialogItem name="Sveta" id="6"/>
                {/*<div className={s.dialog + " " + s.active}>*/}
                {/*    <NavLink to='/dialogs/1'> Oleg </NavLink>*/}
                {/*</div>*/}
                {/*<div  className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/1'> German </NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/1'> Alexandr </NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/1'> Dima </NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/1'> Olga </NavLink>*/}
                {/*</div>*/}
                {/*<div className={s.dialog}>*/}
                {/*    <NavLink to='/dialogs/1'> Sveta </NavLink>*/}
                {/*</div>*/}
            </div>
            <div className={s.masseges}>
                <Massege message="Hi"/>
                <Massege message="How are your?"/>
                <Massege message="Yo"/>
            </div>


        </div>


    )
}

export default Dialogs;