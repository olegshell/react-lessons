

let store ={

    _state: {

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

    },

    _callSubscriber() {
        console.log('State changed')

    },

    getState() {
        return this._state
    },

    addPost ()  {

        let newPost = {
            id:3,
            message: this._state.profilePage.newPostText,
            likesCount: 2,

        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText= 'Empty Line';
        this._callSubscriber(this._state);

    },

    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);

    },
/////////////////////////////////////////////////////////////
    addMessage ()  {

        let newPostMassage = {
            // Name: 'Oleg',
            // Age: 35,
            message: this._state.dialogsPage.updateNewMessage,
        }

        this._state.dialogsPage.messages.push(newPostMassage);
        this._state.dialogsPage.newPostMessage = 'Empty Line'
        this._callSubscriber(this._state);
    },

    updateNewMessage (newMessage)  {
        this._state.dialogsPage.updateNewMessage = newMessage;
        this._callSubscriber(this._state);
    },
//////////////////////////////////////////////////////////////////


    subscribe (obserever)  {
        this._callSubscriber=obserever
    },

}

export default store;
window.store=store