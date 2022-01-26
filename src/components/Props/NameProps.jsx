import React from 'react'
import s from './Props.module.css'


const NameProps = (props) => {
    return (
        <div className={s.text}>
            <div>{props.nameOfGrop} - {props.nameofTrack} </div>
            <div>Пример пропсов!!!</div>
        </div>
    )


}

// const FullName = (props) => {
//     return (
//     <NameProps name="Oleg" age="35"/>
//     )
// }

{/*<NameProps name={'Oleg'} age={35}/>Это необходимо прописать при выозве пропсов!!!*/}

export default NameProps

