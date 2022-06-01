import React from 'react';
import css from './Friends.module.css'
import Friends from "./Friends";
import StoreContext from "../../StoreContext";


// const FriendsContainer = (props) => {
//
//     let state = props.appMyFriendsStore.getState().myFriendsPage;
//
//     return <Friends myFriendsPage={state}/>
// }
//
// export default FriendsContainer;

const FriendsContainer = (props) => {

    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().myFriendsPage;

            return <Friends myFriendsPage={state}/>
        }
        }
    </StoreContext.Consumer>
}


    export default FriendsContainer;
