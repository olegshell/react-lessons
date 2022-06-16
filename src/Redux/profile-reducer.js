const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            {id: 0, message: "Hi, it's me! ", likesCount: 15},
            {id: 1, message: "It's my first post", likesCount: 11},
        ],

        newPostText: 'BLA BLA BLA',

    };



let profileReducer = (state=initialState, action) => {

    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 2,
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = ' ';
            // break
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            // break
            return stateCopy;
        }
        default:
            return state;
    }
}

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

export default profileReducer;
