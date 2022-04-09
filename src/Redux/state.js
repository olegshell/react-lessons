import {rerenderEntireThree} from "../render";

let state = {

    profilePage: {
        posts: [
            {id: 0, message: "Hi, it's me! ", likesCount: 15},
            {id: 1, message: "It's my first post", likesCount: 11},
        ],

        newPostText:'BLA BLA BLA',

    },

    dialogsPage : {
        messages: [
            {id:0, message: "Hi"},
            {id:1, message: "How are you?"},
            {id:2, message: "YoYoYo"},
            {id:2, message: "YoYoYo"},
        ],

        dialogs: [
            {id: 0, name: "Oleg", age:35},
            {id: 1, name: "German", age:34},
            {id: 2, name: "Alexandr", age:35},
            {id: 3, name: "Dima", age:21},
            {id: 4, name: "Olga", age:30},
            {id: 5, name: "Sveta", age:26},
        ],

        newPostMessage:"please write here ",
    },

    music: [
        {group: 'Metallica',  track: 'Enter sandman'},
        {group: 'Splin',      track: 'Privet'},
        {group: 'Kino',       track: 'Peremen'},
        {group: 'Korn',       track: 'Enter sandman'},
        {group: 'Pink Floyd', track: 'Enter sandman'},
        {group: 'DDT',        track: 'Russian Spring'},
        {group: 'kirpichi',   track: 'new'},
    ],

    myFriends: [
        {firstName: 'German', lastName: 'Grek', age: 34},
        {firstName: 'Anatoly', lastName: 'Vasserman', age: 35},
        {firstName: 'Mara', lastName: 'Vasserma', age: 34},
        {firstName: 'Vasy', lastName: 'Mikheev', age: 30},
        {firstName: 'Vovan', lastName: 'none',  age: 30},
        {firstName: 'Alina', lastName: 'Artist', age: 29},
    ],

};

export let addPost = () => {

    let newPost = {
        id:3,
        message: state.profilePage.newPostText,
        likesCount: 2,

    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText= 'Empty Line';
    rerenderEntireThree(state);

}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireThree(state);

}
////////////////////////////////////////////////////

export let addMessage = () => {

    let newPostMassage = {
        // Name: 'Oleg',
        // Age: 35,
        message: state.dialogsPage.updateNewMessage,
    }

    state.dialogsPage.messages.push(newPostMassage);
    state.dialogsPage.newPostMessage = 'Empty Line'
    rerenderEntireThree(state);
}

export let updateNewMessage = (newMessage) => {
    state.dialogsPage.updateNewMessage = newMessage;
    rerenderEntireThree(state);
}

export default state