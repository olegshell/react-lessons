import React from 'react'



const NameProps = (props) => {
    return (
        <div>
            {props.names}
            {props.age}
        </div>
    )
}

const FullName = (props) => {
    return (
    <NameProps name="Oleg" age="35"/>
    )
}



export default NameProps