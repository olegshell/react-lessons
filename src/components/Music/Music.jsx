import React from 'react';
import s from './Music.module.css'
import MusicGroup from './Music Group/Music Group'
import MusicTrack from './Music Track/Music Track'

const Music = (props) => {

    const musicTrack =props.musicData.map(nameOftrack=><MusicTrack track={nameOftrack.track}/>)
    const musicGroup =props.musicData.map(function musicData (group) {
        return (
            <MusicGroup group={group.group} />
        )
    })

    return (
        <div className={s.musicItems}>
            <div className={s.group}>{musicGroup}</div>
            <div className={s.group}>{musicTrack}</div>
        </div>
    )
}


export default Music