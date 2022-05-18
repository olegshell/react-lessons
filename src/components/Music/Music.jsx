import React from 'react';
import s from './Music.module.css'
import MusicGroup from './Music Group/Music Group'
import MusicTrack from './Music Track/Music Track'

const Music = (props) => {

    const musicTrack =props.appMusicData.music.map(nameOfTrack => <MusicTrack track={nameOfTrack.track}/>)
    const musicGroup =props.appMusicData.music.map(function musicData (group) {
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