let state = {

    profilePage: {
        posts: [
            {id: 0, message: "Hi, it's me! ", likesCount: 15},
            {id: 1, message: "It's my first post", likesCount: 11},
            {id: 2, message: "Yo", likesCount: 33},
            {id: 3, message: "Yo", likesCount: 23},
            {id: 4, message: "Yo", likesCount: 22},
        ],

    },

    dialogsPage : {
        messages: [
            {id:0, message: "Hi"},
            {id:1, message: "How are you?"},
            {id:2, message: "YoYoYo"},
            {id:2, message: "YoYoYo"},
        ],

        dialogs: [
            {id: 0, name: "Oleg"},
            {id: 1, name: "German"},
            {id: 2, name: "Alexandr"},
            {id: 3, name: "Dima"},
            {id: 4, name: "Olga"},
            {id: 5, name: "Sveta"},
        ],
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

export let addPost = (postMessage) => {

    let newPost = {
        id:3,
        message: postMessage,
        likesCount: 2,

    };

    state.profilePage.posts.push(newPost);

}



export default state