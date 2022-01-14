import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom"

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to='/dialogs/1'> Oleg </NavLink>
                </div>
                <div  className={s.dialog}>
                    <NavLink to='/dialogs/1'> German </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'> Alexandr </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'> Dima </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'> Olga </NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'> Sveta </NavLink>
                </div>
            </div>
            <div className={s.masseges}>
                <div className={s.dialog}> Hi</div>
                <div className={s.dialog}> How are you?</div>
                <div className={s.dialog}> Yo</div>
            </div>
        </div>


    )
}

export default Dialogs;