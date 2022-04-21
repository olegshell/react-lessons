import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/state";
import {addPost} from "./Redux/state";
import {BrowserRouter} from "react-router-dom";
import {updateNewPostText} from "./Redux/state";
import {addMessage} from "./Redux/state";
import {updateNewMessage} from "./Redux/state";
import {subscribe} from "./Redux/state";


export let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App appState={store.getState()}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     addPost={store.addPost.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     updateNewMessage={store.updateNewMessage.bind(store)} />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireThree(store.getState);
store.subscribe(rerenderEntireThree)


//
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();