import React from 'react';
import s from './Dialogs.module.css'


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    Oleg
                </div>
                <div className={s.dialog}>
                    German
                </div>
                <div className={s.dialog}>
                    Alexandr
                </div>
                <div className={s.dialog}>
                    Dmitriy
                </div>
                <div className={s.dialog}>
                    Kostya
                </div>
                <div className={s.dialog}>
                    Valera
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