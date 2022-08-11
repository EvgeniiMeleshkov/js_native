import React, { useState } from 'react';
import API from './API';
import './lesson_3';

type ResponseType = {
    'Title': string | null
    'Poster': string | null
}
const initState = {
    'Title': null,
    'Poster': null
}

const Lesson3 = () => {
    const [searchName, setSearchName] = useState('');
    const [serachResult, setSerachResult] = useState<ResponseType>(initState);
    const [searchNameByType, setSearchNameByType] = useState('');
    const [serachResultByType, setSerachResultByType] = useState<ResponseType>(initState);

    const searchFilm = () => {
        //@ts-ignore
        API.searchFilmsByTitle(searchName).then(res => setSerachResult(res.data))
    };

    const searchByType = (e: React.MouseEvent<HTMLButtonElement>) => {
        const type: string = e.currentTarget.dataset.t ? e.currentTarget.dataset.t : '';
        //@ts-ignore
        API.searchFilmsByType(searchNameByType, type).then(res => setSerachResultByType(res.data))
    }

    return (
        <div>
            <h1>Promises</h1>
            <div>
                <h3><p>Search by name:</p></h3>
                <input type="text" value={searchName} onChange={(e) => setSearchName(e.currentTarget.value)}/>
                <button onClick={searchFilm}>Search</button>
                <div style={{fontWeight: 'bold', fontSize: 'x-large', fontFamily: 'serif', color: 'navy'}}>
                    {/*@ts-ignore*/}
                    ..{serachResult.Title}..
                </div>
                <div>
                    <img style={{height: '150px'}} alt={'poster'} src={serachResult.Poster ? serachResult.Poster : 'https://cdn.onlinewebfonts.com/svg/download_148071.png'}/>
                </div>
            </div>

            <div>
                <h3><p>Search by type:</p></h3>
                <input type="text" value={searchNameByType} onChange={(e) => setSearchNameByType(e.currentTarget.value)}/>
                <button onClick={searchByType} data-t='movie'>Movie</button>
                <button onClick={searchByType} data-t='series'>Series</button>
                <div style={{fontWeight: 'bold', fontSize: 'x-large', fontFamily: 'serif', color: 'navy'}}>

                    ..{serachResultByType ? serachResultByType.Title : ''}..
                </div>
                <div>

                    <img style={{height: '150px'}} alt={'poster'} src={serachResultByType.Poster ? serachResultByType.Poster : 'https://cdn.onlinewebfonts.com/svg/download_148071.png'}/>
                </div>
            </div>
        </div>
    );
}
export default Lesson3;