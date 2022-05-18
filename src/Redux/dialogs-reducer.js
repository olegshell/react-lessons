const UPDATE_NEW_MESSAGE_BODE = 'UPDATE-NEW-MESSAGE-BODE';
const SEND_MESSAGE = 'SEND-MESSAGE';



let initialState = {

        messages: [
            {id: 0, message: "Hi"},
            {id: 1, message: "How are you?"},
            {id: 2, message: "YoYoYo"},
            {id: 2, message: "YoYoYo"},
        ],

        dialogs: [
            {id: 0, name: "Oleg", age: 35},
            {id: 1, name: "German", age: 34},
            {id: 2, name: "Alexandr", age: 35},
            {id: 3, name: "Dima", age: 21},
            {id: 4, name: "Olga", age: 30},
            {id: 5, name: "Sveta", age: 26},
        ],

        newMessageBody: "please write here ",
    };



let dialogsReducer = (state=initialState, action) => {
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODE:
            state.newMessageBody = action.body
            return state

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = 'Чистое поле';
            state.messages.push({id: 6, message: body});
            return state

        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
};
export const updateNewMessageBody = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODE,
        body: body,
    }
}

export default dialogsReducer;