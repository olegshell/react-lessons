import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./Dialogitem/Dialogitem";
import Message from "./Massege/Message";
import {sendMessageCreator, updateNewMessageBody,} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
// import {rerenderEntireThree} from "../../render";
// import state, {updateNewMessage} from "../../Redux/state";

//Передача данных через пропсы
// const DialogsContainer = (props) => {
//
//     let state = props.dialogsStore.getState().dialogsPage;
//
//     let sendMessageClick = () => {
//         props.dialogsStore.dispatch(sendMessageCreator())
//     }
//
//     let newMessageChange = (body) => {
//         props.dialogsStore.dispatch(updateNewMessageBody(body))
//     }
//
//
//     return <Dialogs onSendMessageClick={sendMessageClick} updateNewMessageBody={newMessageChange} dialogsPage={state}/>
// }
//
//
// export default DialogsContainer;

//Обращение на прямую к стор через <StoreContext.Consumer>
// const DialogsContainer = () => {
//
//     return <StoreContext.Consumer>
//         {(store) => {
//             let state = store.getState().dialogsPage;
//
//             let sendMessageClick = () => {
//                 store.dispatch(sendMessageCreator())
//             }
//
//             let newMessageChange = (body) => {
//                 store.dispatch(updateNewMessageBody(body))
//             }
//
//             return <Dialogs onSendMessageClick={sendMessageClick} updateNewMessageBody={newMessageChange}
//                             dialogsPage={state}/>
//         }
//         }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }

}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBody(body))
        },
        onSendMessageClick: () => {
            dispatch(sendMessageCreator())
        },

    }


}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;