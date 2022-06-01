import React from 'react';
import s from './Music.module.css'
import MusicGroup from './Music Group/Music Group'
import MusicTrack from './Music Track/Music Track'
import Music from "./Music";
import StoreContext from "../../StoreContext";

const MusicContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().musicPage
                return <Music stateMusic={state}/>
            }
            }
        </StoreContext.Consumer>
    )


    // const musicTrack =props.appMusicData.music.map(nameOfTrack => <MusicTrack track={nameOfTrack.track}/>)
    // const musicGroup =props.appMusicData.music.map(function musicData (group) {
    //     return (
    //         <MusicGroup group={group.group} />
    //     )
    // })


}


export default MusicContainer;