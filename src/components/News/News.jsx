import React from 'react';
import s from './News.module.css'
import MusicTrack from "../Music/Music Track/Music Track";
import DialogItem from "../Dialogs/Dialogitem/Dialogitem";



const News = (props) => {
    let countryName = props.languagesFromIndex.map(p => p.country)
    let countryLang = props.languagesFromIndex.map(p => p.lang)

    return (
        <div>
            News
            {countryName}
            {countryLang}

        </div>
    )
}

export default News