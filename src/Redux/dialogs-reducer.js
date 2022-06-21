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


let dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODE:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: 'Чистое поле',
                messages: [...state.messages, {id: 6, message: body}]
            };
            //stateCopy.newMessageBody = 'Чистое поле';
            //stateCopy.messages.push({id: 6, message: body});
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