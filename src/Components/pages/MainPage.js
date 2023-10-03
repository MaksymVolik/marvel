import { useState } from 'react';
import { Helmet } from 'react-helmet';

import RandomChar from '../randomChar/RandomChar';
import CharList from '../charList/CharList';
import CharInfo from '../charInfo/CharInfo';
import ErrorBoundary from '../errorBoundary/ErrorBoundary';
import SearchForm from '../searchForm/SearchForm';

import decoration from '../../resources/img/vision.png';


export function Component() {
    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <>
            <Helmet>
                <title>Marvel information portal</title>
                <meta name="description" content="Marvel information portal" />
            </Helmet>
            <ErrorBoundary>
                <RandomChar />
            </ErrorBoundary>
            <div className="App__page">
                <ErrorBoundary>
                    <CharList
                        onCharSelected={onCharSelected}
                        charId={selectedChar} />
                </ErrorBoundary>
                <div className="App__descr">
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar} />
                    </ErrorBoundary>
                    <SearchForm />
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </>
    )
}


Component.displayName = "MainPage";