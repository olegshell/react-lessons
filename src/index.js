import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
// import store from "./Redux/store"
import {BrowserRouter} from "react-router-dom";
import StoreContext, {Provider}  from "./StoreContext";
//import Provider from "./StoreContext";


let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App
                        // store={store}
                        // dispatch={store.dispatch.bind(store)}
                        // store={store}
                        // languages={store.languages.nameLanguages}
                        // updateNewPostText={store.updateNewPostText.bind(store)}
                        // addMessage={store.addMessage.bind(store)}
                        // updateNewMessage={store.updateNewMessage.bind(store)}
                    />
                </Provider>

            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
rerenderEntireThree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireThree(state);
});

//
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();