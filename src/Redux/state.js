import {act} from "@testing-library/react";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODE = 'UPDATE-NEW-MESSAGE-BODE';
const SEND_MESSAGE = 'SEND-MESSAGE';



let store = {

    languages: {
        nameLanguages: [
            {country: 'Russian', lang: 'ru' },
            {country: 'England', lang: 'en' },
            {country: 'Germany', lang: 'gr' },

        ],
    },

    _state: {


        profilePage: {
            posts: [
                {id: 0, message: "Hi, it's me! ", likesCount: 15},
                {id: 1, message: "It's my first post", likesCount: 11},
            ],

            newPostText: 'BLA BLA BLA',

        },

        dialogsPage: {
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

            newMessageBode: "please write here ",
        },

        music: [
            {group: 'Metallica', track: 'Enter sandman'},
            {group: 'Splin', track: 'Privet'},
            {group: 'Kino', track: 'Peremen'},
            {group: 'Korn', track: 'Enter sandman'},
            {group: 'Pink Floyd', track: 'Enter sandman'},
            {group: 'DDT', track: 'Russian Spring'},
            {group: 'kirpichi', track: 'new'},
        ],

        myFriends: [
            {firstName: 'German', lastName: 'Grek', age: 34},
            {firstName: 'Anatoly', lastName: 'Vasserman', age: 35},
            {firstName: 'Mara', lastName: 'Vasserma', age: 34},
            {firstName: 'Vasy', lastName: 'Mikheev', age: 30},
            {firstName: 'Vovan', lastName: 'none', age: 30},
            {firstName: 'Alina', lastName: 'Artist', age: 29},
        ],

    },

    _callSubscriber() {
        console.log('State changed')

    },

    getState() {
        return this._state
    },


    dispatch(action) { //{type: 'ADD-POST'}
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 2,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = 'Empty Line';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_MESSAGE_BODE) {
            this._state.dialogsPage.newMessageBode = action.body
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBode;
            this._state.dialogsPage.messages.push({id: 6, message: body})
            this._state.dialogsPage.newMessageBode = 'Чистое поле';
            this._callSubscriber(this._state);
        }
    },


    subscribe(observer) {
        this._callSubscriber = observer
    },

};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};
export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
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

console.log(store)


export default store;
// window.store = store