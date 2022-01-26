import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./Redux/state";

let postsIndexJs = [
    {id: 0, message: "Hi, how are you", likesCount: 15},
    {id: 1, message: "It's my first post", likesCount: 11},
    {id: 2, message: "Yo", likesCount: 33},
    {id: 3, message: "Yo", likesCount: 23},
    {id: 4, message: "Yo", likesCount: 22},
]

let dialogs = [
    {id: 0, name: "Oleg"},
    {id: 1, name: "German"},
    {id: 2, name: "Alexandr"},
    {id: 3, name: "Dima"},
    {id: 4, name: "Olga"},
    {id: 5, name: "Sveta"},
]

let messages = [
    {id:0, message: "Hi"},
    {id:1, message: "How are you?"},
    {id:2, message: "YoYoYo"},
    {id:2, message: "YoYoYo"},
]

ReactDOM.render(
    <React.StrictMode>
        <App  state={state}  />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
