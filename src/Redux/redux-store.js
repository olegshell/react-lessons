// import {combineReducers, createStore} from "redux";
import {combineReducers, legacy_createStore as createStore} from "redux"
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";
import musicReducer from "./music-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    myFriendsPage: friendsReducer,
    musicPage: musicReducer,

});

let store = createStore (reducers);

export default store;

